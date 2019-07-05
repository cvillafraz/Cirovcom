// Import all font awesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faFacebook } from "@fortawesome/free-brands-svg-icons/faFacebook";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons/faLinkedin";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons/faStackOverflow";
import { faTwitter } from "@fortawesome/free-brands-svg-icons/faTwitter";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faChevronCircleLeft } from "@fortawesome/free-solid-svg-icons/faChevronCircleLeft";
import { faCode } from "@fortawesome/free-solid-svg-icons/faCode";
import { faEdit } from "@fortawesome/free-solid-svg-icons/faEdit";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import { faTimes } from "@fortawesome/free-solid-svg-icons/faTimes";

// Other imports
import * as React from "react";
import {hydrate, render} from "react-dom";
import App from "./App";
import "./styles/index.scss";

// Add font awesome icons to library
library.add(
  faFacebook,
  faGithub,
  faLinkedin,
  faStackOverflow,
  faTwitter,
  faTimes,
  faBars,
  faCode,
  faEdit,
  faServer,
  faChevronCircleLeft,
  faEnvelope,
);
// Render
const rootElement: any = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
