// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import * as React from "react";
import { Link } from "react-router-dom";
import Ciro from "../../img/io.png";
import Modal from "./Modal";
import NavBar from "./NavBar";
// define state interface
interface IState {
  isModalVisible: boolean;
  txt: string;
}
// Home component
class Home extends Component<any, IState> {
  private newTxt: string = "";
  private words: string[] = ["Developer", "Designer"];
  private wordIndex: number = 0;
  private wait: number = 3000;
  private isDeleting: boolean = false;
  private textTimeout: any;
  constructor(props: any) {
    super(props);
    this.state = { isModalVisible: false, txt: "" };
  }
  public componentDidMount(): void {
    this.type();
  }
  public componentWillUnmount(): void {
    // stop typing animation when unmounting
    clearTimeout(this.textTimeout);
  }
  public handleModal = (): void => {
    this.setState({ isModalVisible: this.state.isModalVisible ? false : true });
  }
  public type = (): void => {
    // Got this code out of this tutorial https://www.youtube.com/watch?v=POX3dT-pB4E
    // Current index of word
    const current = this.wordIndex % this.words.length;
    // Get full text of current word
    const fullTxt = this.words[current];

    // Check if deleting
    if (this.isDeleting) {
      // Remove char
      this.newTxt = fullTxt.substring(0, this.newTxt.length - 1);
    } else {
      // Add char
      this.newTxt = fullTxt.substring(0, this.newTxt.length + 1);
    }
    // Initial Type Speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      typeSpeed /= 2;
    }

    // If word is complete
    if (!this.isDeleting && this.newTxt === fullTxt) {
      // Make pause at end
      typeSpeed = this.wait;
      // Set delete to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.newTxt === "") {
      this.isDeleting = false;
      // Move to next word
      this.wordIndex++;
      // Pause before start typing
      typeSpeed = 500;
    }
    this.setState({ txt: this.newTxt });
    this.textTimeout = setTimeout(() => this.type(), typeSpeed);
  }

  public render(): React.ReactNode {
    return (
      <React.Fragment>
        {this.state.isModalVisible && <Modal toggle={this.handleModal} />}
        <NavBar background="rgba(0,0,0,0)" />
        <div id="gradient-layer">
          <section
            className="wrapper"
            item-scope="true"
            item-type="http://schema.org/Person"
          >
            <img src={Ciro} alt="A photo of me" item-prop="image" />
            <div id="landing-text">
              <h1 item-prop="name">Ciro Villafraz</h1>
              <h2 item-prop="jobTitle">
                Professional Web{" "}
                <span className="non-static-text">{this.state.txt}</span>
              </h2>
            </div>
            <div className="social-icons">
              <a
                href="https://twitter.com/cvillafraz"
                target="_blank"
                item-prop="url"
                aria-label="twitter"
              >
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
              <a
                href="https://www.linkedin.com/in/ciro-villafraz/"
                target="_blank"
                item-prop="url"
                aria-label="linkedin"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a
                href="https://github.com/cvillafraz"
                target="_blank"
                item-prop="url"
                aria-label="github"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
              <a
                href="https://es.stackoverflow.com/users/103373/c-villafraz?tab=profile"
                target="_blank"
                item-prop="url"
                aria-label="stack overflow"
              >
                <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
              </a>
              <a onClick={this.handleModal}>
                <FontAwesomeIcon icon={["far", "envelope"]} />
              </a>
            </div>
            <Link to="/portfolio" className="portfolio-link">Check my work!</Link>
          </section>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
