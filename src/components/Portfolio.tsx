// Import modules
import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../config/actions/postAction";
import Error from "./Error";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Wait from "./Wait";
const Parser = require("html-react-parser");
// Define props interface
interface Iprops {
  items: any[];
  fetchPosts: any;
  error?: Error;
}
// Component
class Portfolio extends Component <Iprops, any> {
  public componentDidMount(): void {
    this.props.fetchPosts();
  }
  public render(): React.ReactNode {
    const { items, error } = this.props;
    return <React.Fragment>
        <NavBar background="#283149" />
        {!error ? (items.length >= 1 ? <main id="portfolio" className="wrapper">
                <h1>My latest work</h1>
                <section id="portfolio-items">
                  {items.map((item: any) => <figure key={item.id}>
                      <img src={item.featured_img} alt="" />
                      <figcaption>
                        <h2>{item.title.rendered}</h2>
                        {Parser(item.content.rendered)}
                      </figcaption>
                      <a href={item.code_link} target="_blank">
                        View project
                      </a>
                    </figure>)}
                </section>
                <a className="codepen-link" href="http://codepen.io/cvillafraz">
                  See more!
                </a>
        </main> : <Wait />)
           : <Error error={error} />}
        <Footer />
      </React.Fragment>;
  }
}

const mapStateToProps = (state: any): object => ({
  error: state.errorMessage,
  items: state.posts.items.filter((post: any): boolean => post.categories[0] === 190),
});

export default connect(mapStateToProps, { fetchPosts })(Portfolio);
