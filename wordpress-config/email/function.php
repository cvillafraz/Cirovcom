<?php
function sendWithPhpMailer($subject, $body, $reply) {
    require_once(ABSPATH . WPINC . '/class-phpmailer.php');
    require_once(ABSPATH . WPINC . '/class-smtp.php');
    $blogname = wp_strip_all_tags( trim( get_option( 'blogname' ) ) );
    $smtpHost = wp_strip_all_tags( trim( get_option( 'smtp_host' ) ) );
    $mailPort = wp_strip_all_tags( trim( get_option( 'smtp_port' ) ) );
    $smtpUser = wp_strip_all_tags( trim( get_option( 'smtp_user' ) ) );
    $smtpPass = wp_strip_all_tags( trim( get_option( 'smtp_pass' ) ) );
    $mailTo = wp_strip_all_tags( trim( get_option( 'mail_to' ) ) );
    $send = false;
    $mail = new PHPMailer;
    try {
        $mail->IsSMTP();
        $mail->SMTPDebug = 0;
        $mail->Sender = $smtpUser;
        $mail->CharSet = 'utf-8';
        $mail->SMTPSecure = 'tls';
        $mail->SMTPAuth = true;
        $mail->Port = $mailPort;
        $mail->Host = $smtpHost;
        $mail->Username = $smtpUser;
        $mail->Password = $smtpPass;
        $mail->Subject = $subject;
        $mail->From = $smtpUser;
        $mail->setFrom($smtpUser, $blogname);
        $mail->addReplyTo($reply);
        $mail->addAddress($mailTo);
        // Attachments
        // $mail->addAttachment('/var/tmp/file.tar.gz');
        $mail->isHTML(true);
        $mail->Body = $body;
        $send = $mail->Send();
        $mail->ClearAllRecipients();
    } catch (Exception $e) {
        echo "Message could not be sent. Mailer Error: $mail->ErrorInfo \n";
        echo "Error: $e";
        return false;
    }
    return $send;
}
function sendContactMail($request) {
    $request->set_headers([header('Access-Control-Allow-Origin: *')]);
    $response = array(
        'status' => 304,
        'message' => 'There was an error sending the email.'
    );
    $parameters = $request->get_json_params();
    if ( count($_POST) > 0 ) {
        $parameters = $_POST;
    }
    $contactName = wp_strip_all_tags( trim( $parameters['name'] ) );
    $contactEmail = wp_strip_all_tags( trim( $parameters['email'] ) );
    $contactSubject = wp_strip_all_tags( trim( $parameters['subject']));
    $contactMessage = wp_strip_all_tags( trim( $parameters['message'] ) );
    if ( !empty($contactName) && !empty($contactEmail) && !empty($contactMessage) ) {
        $subject = $contactSubject || "(New message sent from site $blogname) $contactName <$contactEmail>";
        $body = "<h3>$subject</h3><br/>";
        $body .= "<p><b>Name:</b> $contactName</p>";
        $body .= "<p><b>Email:</b> $contactEmail</p>";
        $body .= "<p><b>Message:</b> $contactMessage</p>";
        if ( sendWithPhpMailer( $subject, $body, $contactEmail ) ) {
            $response['status'] = 200;
            $response['message'] = 'Your email has been sent successfully.';
        }
    }
    return json_decode( json_encode( $response ) );
    exit();
}