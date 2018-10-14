import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../config/actions/postAction";
import DisqusThread from "./DisqusThread";
import Footer from "./Footer";
import NavBar from "./NavBar";
// tslint:disable-next-line:no-var-requires
const Parser = require("html-react-parser");
class Post extends Component <any, any> {
    public componentDidMount() {
        if (this.props.posts.length < 1) {
            this.props.fetchPosts();
        }
    }
  public render() {
    const entry = this.props.posts.length >= 1 ?
    this.props.posts.filter((post: any) => post.slug ===  this.props.match.params.post_slug)
    .reduce((a: any, b: any) => a) : "";
    return <React.Fragment>
        <NavBar background="#283149" />
        <div className="wrapper">
          <Link to="" onClick={() => this.props.history.goBack()} className="go-back">
            <FontAwesomeIcon icon="chevron-circle-left" /> Go back
          </Link>
          <main id="main-post">
            {entry ? <article className="single-post">
                <img src={entry.featured_image || "https://placehold.it/300x200"} alt="" />
                <h1>{entry.title.rendered}</h1>
                <div>
                  <Link className="category-link" to={`/blog/categories/:${entry.categories[0]}`}>
                    {entry.category_name}
                  </Link>
                  <span>
                    {" "}
                    /{" "}
                    {new Date(entry.date)
                      .toLocaleDateString()
                      .replace(/\//g, "-")}
                  </span>
                </div>
                {Parser(entry.content.rendered)}
              </article> : ""}
            <hr />
            <h2>Share this post!</h2>
            <a href={`https://www.facebook.com/sharer/sharer.php?u=${document.URL}`} className="share-icon"
            target="_blank">
              <FontAwesomeIcon icon={["fab", "facebook"]} />
            </a>
                <a href={`https://twitter.com/home?status=${document.URL}`} className="share-icon" target="_blank">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
                <a href={`https://www.linkedin.com/shareArticle?mini=true&url=
                ${document.URL}&title=${entry ? entry.title.rendered : ""}&summary=&source=`}
                className="share-icon" target="_blank">
              <FontAwesomeIcon icon={["fab", "linkedin"]} />
            </a>
                <DisqusThread
                    id={entry ? entry.id : "nothing"}
                    title={ entry ? entry.title.rendered : "nothing"}
                    path="/blog/123-disquss-integration"
                />
          </main>
        </div>
        <Footer />
      </React.Fragment>;
  }
}

const mapStateToProps = (state: any) => ({
    posts: state.posts.items,
});

export default connect(mapStateToProps, { fetchPosts })(Post);
