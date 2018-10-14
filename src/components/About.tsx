import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { getPages } from "../config/actions/pagesAction";
import Error from "./Error";
import Footer from "./Footer";
import NavBar from "./NavBar";
// tslint:disable-next-line:no-var-requires
const Parser = require("html-react-parser");
class About extends Component <any, any> {
  private regexp = /<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g;
  public componentDidMount() {
      this.props.getPages();
  }
  public render() {
    // tslint:disable-next-line:no-console
    const aboutPage = this.props.pages ? this.props.pages.filter((page: any) => page.id === 1726)[0] : "";
    const services = this.props.pages ? this.props.pages.filter((page: any) => page.parent === 1726)
    .sort((a: any, b: any) => a.id - b.id) : "";
    return (!this.props.error ? <React.Fragment>
      <NavBar background="#283149"/>
        <main id="about/services-main">
          <section id="about-section">
            <article className="wrapper">
              <h1>{aboutPage ? aboutPage.title.rendered : "Hold on..."}</h1>
              <p>
                {aboutPage
                  ? aboutPage.content.rendered.replace(
                      this.regexp,
                      "",
                    )
                  : ""}
              </p>
            </article>
          </section>
          <section id="services-section" className="wrapper">
              <h2>What I have to offer</h2>
              <div>
              {services ? services.map((service: any) => {
                return(
                <div className="service" key={service.id}>
                    <span className="service-icon"><FontAwesomeIcon icon={service.custom_fields.icon} /></span>
                  <h3>{service.title.rendered}</h3>
                  {Parser(service.content.rendered)}
                  {
                    Object.keys(service.custom_fields).map((field, i) => (
                      /^[A-Z]/.test(field) ?
                      (<React.Fragment key={i}>
                        <h4>{field}</h4>
                        <p>{service.custom_fields[field]}</p>
                      </React.Fragment>) : ""
                    ))
                  }
                  </div>
                  );
            }) : ""}</div>
          <button>Let's start a project!</button>
          </section>
        </main>
        <Footer />
    </React.Fragment> : <Error error={this.props.error}/>);
  }
}

const mapStateToProps = (state: any) => ({
  error: state.errorMessage,
  pages: state.pages.items,
});

export default connect(mapStateToProps, { getPages })(About);
