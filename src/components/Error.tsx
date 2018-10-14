import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
const Error = (props: any) => {
  // tslint:disable-next-line:no-console
  console.log(props.error);
  return (
    <React.Fragment>
          <NavBar background="#283149"/>
            <div id="error" className="wrapper">
                <h1>Sorry, this content is not available right now :(</h1>
                <p>Error: {props.error.message || props.error.statusText}</p>
            </div>
        <Footer/>
    </React.Fragment>
  );
};

export default Error;
