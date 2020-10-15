// Import modules
import axios from "axios";
import * as React from "react";
import { Component } from "react";
// Define state interface
interface Istate {
  email: string;
  message: string;
  name: string;
  response: {
    status: number;
    text: string;
  };
  subject: string;
}
// Modal component
class Modal extends Component <any, Istate> {
  private modal = React.createRef<HTMLDivElement>();
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      message: "",
      name: "",
      response: { status: 0, text: "" },
      subject: "",
    };
  }
  // Add overlay click event
  public componentDidMount() {
    window.addEventListener("click", (e: Event): void => {
      if (e.target === this.modal.current) {
        this.props.toggle();
      }
    });
  }
  // Update input fields
  public handleInput = (event: {}): void => {
    const e = event as React.ChangeEvent<HTMLInputElement>;
    this.setState({ [e.target.name]: e.target.value } as any);
  }
  // Do post request to send the email
  public handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    const request = {
      email: this.state.email,
      message: this.state.message,
      name: this.state.name,
      subject: this.state.subject,
    };
    axios
      .post(
        "https://wordpress2.cirov.com/wp-json/contact/v1/send",
        JSON.stringify(request),
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((res) => {
        const newResponse = { ...this.state.response };
        newResponse.status = res.data.status;
        newResponse.text = res.data.message;
        this.setState({ response: newResponse });
      })
      .catch((err) => {
        const newResponse = { ...this.state.response };
        newResponse.status = 1;
        newResponse.text = err.message;
        this.setState({ response: newResponse });
      });
  }
  public render(): React.ReactNode {
    return (
      <div className="modal-layer" ref={this.modal}>
        <div className="form-container" role="dialog" aria-modal="true" aria-label="Send me an email">
        <div className="modal-intro">
        <h1>Get in touch</h1>
        <p>Send any inquiries
          to <a href="mailto:contact@cirov.com.ve">contact@cirov.com.ve</a> or use the following form:</p>
        </div>
          <form onSubmit={this.handleSubmit}>
            {this.state.response.status !== 0 && (
              <p
                className={
                  this.state.response.status === 200
                    ? "form-success"
                    : "form-failure"
                }
              >
                {this.state.response.text}
              </p>
            )}
            <p>
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                name="name"
                id="name"
                onChange={this.handleInput}
                value={this.state.name}
                placeholder="Your name..."
                required
              />
            </p>
            <p>
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                name="email"
                id="email"
                required
                onChange={this.handleInput}
                value={this.state.email}
                placeholder="Your email..."
              />
            </p>
            <p>
              <label htmlFor="subject">Subject: </label>
              <input
                type="text"
                name="subject"
                id="subject"
                onChange={this.handleInput}
                value={this.state.subject}
                placeholder="Subject"
              />
            </p>
            <p>
              <label htmlFor="message">Message: </label>
              <textarea
                name="message"
                id="message"
                value={this.state.message}
                placeholder="Your message..."
                onChange={this.handleInput}
              />
            </p>
            <button type="submit">Send email</button>
            <button onClick={this.props.toggle}>Cancel</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;
