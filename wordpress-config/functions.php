######### Including email callback function

include_once $_SERVER['DOCUMENT_ROOT'].'/wp/wp-includes/email/function.php';

######### Adding custom endpoints

add_action('rest_api_init', 'register_custom_endpoints' );
add_action( 'rest_api_init', function () {
    register_rest_route( 'contact/v1', '/send', array(
        'methods' => 'POST',
        'callback' => 'sendContactMail'
    ));
});

function register_custom_endpoints(){
    register_rest_field( array('post'),
        'featured_img',
        array(
            'get_callback'    => 'get_rest_featured_image',
            'update_callback' => null,
            'schema'          => null,
        )
	);
	register_rest_field(array('post'),
		'code_link',
		array(
            'get_callback'    => 'get_project_link',
            'update_callback' => null,
            'schema'          => null,
        )
		);
	register_rest_field(array('page'),
		'custom_fields',
		array(
            'get_callback'    => 'get_custom_fields',
            'update_callback' => null,
            'schema'          => null,
        )
		);
}

function get_rest_featured_image( $object, $field_name, $request ) {
    if( $object['featured_media'] ){
        $img = wp_get_attachment_image_src( $object['featured_media'], 'app-thumb' );
        return $img[0];
    }
    return false;
}
function get_project_link( $object, $request ) {
    return get_post_meta( $object[ 'id' ], 'link', true );
}

function get_custom_fields($object){
	$flattened=get_post_custom($object['id']);
	foreach($flattened as $field => $value){
		$flattened[$field]=array_reduce($value,function($a, $b){
			return $a.$b;
		});
	}
	return $flattened;
}