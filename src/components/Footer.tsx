import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Footer = () => {
  return <footer>
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
        <a href="#">
          <FontAwesomeIcon icon={["far", "envelope"]} />
        </a>
      </div>
          <p>&copy; Ciro Villafraz, 2018</p>
    </footer>;
};

export default Footer;
