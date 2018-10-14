import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchPosts } from "../config/actions/postAction";
import Footer from "./Footer";
import NavBar from "./NavBar";
// tslint:disable-next-line:no-var-requires
const Parser = require("html-react-parser");
class Portfolio extends Component<any, any> {
  private regexp = /<(?:[^><\"\']*?(?:([\"\']).*?\1)?[^><\'\"]*?)+(?:>|$)/g;
  public componentDidMount() {
    this.props.fetchPosts();
  }
  public render() {
    return (
      <React.Fragment>
        <NavBar background="#283149" />
        <main id="portfolio" className="wrapper">
          <h1>My latest work</h1>
          <section id="portfolio-items">
            {this.props.items
              ? this.props.items.map((item: any) => (
                  <figure key={item.id}>
                    <img src={item.featured_img} alt="" />
                    <figcaption>
                      <h2>{item.title.rendered}</h2>
                      {Parser(item.content.rendered)}
                    </figcaption>
                    <a href={item.link} target="_blank">View project</a>
                  </figure>
                ))
              : ""}
          </section>
          <a className="codepen-link" href="http://codepen.io/cvillafraz">See more!</a>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any) => ({
  items: state.posts.items.filter((post: any) => post.categories[0] === 190),
});

export default connect(mapStateToProps, { fetchPosts })(Portfolio);
