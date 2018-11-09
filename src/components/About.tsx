// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "React";
import { Component } from "react";
import { connect } from "react-redux";
import { getPages } from "../config/actions/pagesAction";
import Error from "./Error";
import Footer from "./Footer";
import Modal from "./Modal";
import NavBar from "./NavBar";
import Wait from "./Wait";
const Parser = require("html-react-parser");
// define state and props interfaces
interface Istate {
  isModalVisible: boolean;
}
interface Iprops {
  pages: any[];
  getPages: any;
  error?: Error ;
}
class About extends Component<Iprops, Istate> {
  private regexp = /<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g;
  constructor(props: any) {
    super(props);
    this.state = { isModalVisible: false };
  }
  public componentDidMount(): void {
    this.props.getPages();
  }
  public handleModal = (): void => {
    this.setState({ isModalVisible: this.state.isModalVisible ? false : true });
  }
  public render(): React.ReactNode {
    const aboutPage = this.props.pages
      && this.props.pages.filter((page: any) => page.id === 1726)[0];
    const services = this.props.pages
      && this.props.pages
          .filter((page: any) => page.parent === 1726)
          .sort((a: any, b: any) => a.id - b.id);
    return (
      <React.Fragment>
        {this.state.isModalVisible && <Modal toggle={this.handleModal} />}
        <NavBar background="#283149" />
        {!this.props.error ? (
          aboutPage && services ? (
            <main id="about/services-main">
              <section id="about-section">
                <article className="wrapper">
                  <h1>{aboutPage.title.rendered}</h1>
                  <p>{aboutPage.content.rendered.replace(this.regexp, "")}</p>
                </article>
              </section>
              <section id="services-section" className="wrapper">
                <h2>What I have to offer</h2>
                <div>
                  {services.map((service: any) => {
                    return (
                      <div className="service" key={service.id}>
                        <span className="service-icon">
                          <FontAwesomeIcon icon={service.custom_fields.icon} />
                        </span>
                        <h3>{service.title.rendered}</h3>
                        {Parser(service.content.rendered)}
                        {Object.keys(service.custom_fields).map(
                          (field, i) =>
                            /^[A-Z]/.test(field) && (
                              <React.Fragment key={i}>
                                <h4>{field}</h4>
                                <p>{service.custom_fields[field]}</p>
                              </React.Fragment>
                            ),
                        )}
                      </div>
                    );
                  })}
                </div>
                <button onClick={this.handleModal}>Let's start a project!</button>
              </section>
            </main>
          ) : (
            <Wait />
          )
        ) : (
          <Error error={this.props.error} />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any): object => ({
  error: state.errorMessage,
  pages: state.pages.items,
});

export default connect(mapStateToProps, { getPages })(About);
