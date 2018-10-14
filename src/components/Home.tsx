import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import * as React from "react";
import NavBar from "./NavBar";
interface IState {
  txt: string;
}
class Home extends Component <any, IState> {
    public state = {
      txt: "",
    };
    private newTxt: string = "";
    private words: string[] = ["Developer", "Designer"];
    private wordIndex: number = 0;
    private wait: number = 3000;
    private isDeleting: boolean = false;
    private textTimeout: any;
    public componentDidMount() {
      this.type();
    }
    public componentWillUnmount() {
      clearTimeout(this.textTimeout);
    }
  public type = () => {
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
    // tslint:disable-next-line:no-console
    this.setState({txt: this.newTxt});
    this.textTimeout = setTimeout(() => this.type(), typeSpeed);
  }

  public render() {
    return <React.Fragment>
        <NavBar background="rgba(0,0,0,0)" />
        <div id="gradient-layer">
          <section className="wrapper">
            <img src="../img/io.png" alt="A photo of me" />
            <div id="landing-text">
              <h1>Ciro Villafraz</h1>
              <h2>
                Professional Web <span className="non-static-text">
                  {this.state.txt}
                </span>
              </h2>
            </div>
            <div className="social-icons">
              <a href="https://www.linkedin.com/in/ciro-villafraz/" target="_blank">
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
              <a href="https://github.com/cvillafraz" target="_blank">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            <a href="https://es.stackoverflow.com/users/103373/c-villafraz?tab=profile" target="_blank">
                <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
              </a>
            </div>
            <button>Mail me!</button>
          </section>
        </div>
      </React.Fragment>;
  }
}

export default Home;
