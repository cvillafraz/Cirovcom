import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Link } from "react-router-dom";

const Error = (props: any): React.ReactElement<any> => {
  return (
    <React.Fragment>
            <main id="error" className="wrapper">
        <Link to="" onClick={() => props.history.goBack()} className="go-back">
          <FontAwesomeIcon icon="chevron-circle-left" /> Go back
          </Link>
                <h1>Sorry, this content is not available right now :(</h1>
                <p>Error: {props.error ? props.error.message || props.error.statusText : "Wrong route"}</p>
            </main>
    </React.Fragment>
  );
};

export default Error;
