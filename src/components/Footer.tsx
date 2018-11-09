// Import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Component } from "react";
import Modal from "./Modal";
// State interface
interface Istate {
  isModalVisible: boolean;
}
// Footer Component
class Footer extends Component <any, Istate> {
  constructor(props: any) {
    super(props);
    this.state = { isModalVisible: false };
  }
  public handleModal = (): void => {
    this.setState({ isModalVisible: this.state.isModalVisible ? false : true });
  }
  public render(): React.ReactNode {
    return <React.Fragment>
      {this.state.isModalVisible && <Modal toggle={this.handleModal}/>}
        <footer>
          <div id="contact" className="wrapper">
            <h2>Contact me!</h2>
            <a href="https://www.linkedin.com/in/ciro-villafraz/" target="_blank">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
            <a href="https://github.com/cvillafraz" target="_blank">
              <FontAwesomeIcon icon={["fab", "github"]} />
            </a>
            <a href="https://es.stackoverflow.com/users/103373/c-villafraz?tab=profile" target="_blank">
              <FontAwesomeIcon icon={["fab", "stack-overflow"]} />
            </a>
            <a onClick={this.handleModal}>
              <FontAwesomeIcon icon={["far", "envelope"]} />
            </a>
          </div>
          <p>&copy; Ciro Villafraz, 2018</p>
        </footer>
      </React.Fragment>;
  }
}

export default Footer;
