import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import "./styles/index.scss";

library.add(fab, fas, far);
ReactDOM.render(
  <App />,
  document.getElementById("root") as HTMLElement,
);
