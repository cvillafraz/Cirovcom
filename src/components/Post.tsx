// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import * as React from "react";
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../config/actions/postAction";
import DisqusThread from "./DisqusThread";
import Error from "./Error";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Wait from "./Wait";
const Parser = require("html-react-parser");
// Post component
class Post extends Component<any, any> {
  public componentDidMount(): void {
    if (this.props.posts.length < 1) {
      this.props.fetchPosts();
    }
  }
  public render(): React.ReactNode {
    // Get the post
    const entry =
      this.props.posts.length === 1 &&
      this.props.posts.reduce((a: any, b: any) => a);
    return (
      <React.Fragment>
        {entry && <Helmet>
          <title>{entry.title.rendered}</title>
          <meta name="description">{entry.meta_description}</meta>
        </Helmet>}
        <NavBar background="#283149" />
        {!this.props.error ? (
          <div className="wrapper">
            <Link
              to=""
              onClick={() => this.props.history.goBack()}
              className="go-back"
            >
              <FontAwesomeIcon icon="chevron-circle-left" /> Go back
            </Link>
            <main id="main-post">
              {entry && (
                <article className="single-post">
                  <img
                    src={entry.featured_image || "https://placehold.it/300x200"}
                    alt=""
                  />
                  <h1>{entry.title.rendered}</h1>
                  <div>
                    <Link
                      className="category-link"
                      to={`/blog/${entry.category_slug}`}
                    >
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
                  <hr />
                </article>
              )}
              <div className="share">
                <h2>Share this post!</h2>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${
                    document.URL
                  }`}
                  className="share-icon"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "facebook"]} />
                </a>
                <a
                  href={`https://twitter.com/home?status=${document.URL}`}
                  className="share-icon"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "twitter"]} />
                </a>
                <a
                  href={
                    "https://www.linkedin.com/shareArticle?mini=true&url=" +
                    document.URL +
                    "&title=" +
                    (entry ? entry.title.rendered : "") +
                    "&summary=&source="
                  }
                  className="share-icon"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} />
                </a>
              </div>
              {entry ? (
                <DisqusThread
                  id={entry.id}
                  title={entry.title}
                  path={"/blog/" + this.props.match.params.post_slug}
                />
              ) : (
                <Wait />
              )}
            </main>
          </div>
        ) : (
          <Error error={this.props.error} />
        )}
        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state: any, ownProps: any) => ({
  error: state.errorMessage,
  posts: state.posts.items.filter(
    (post: any) => post.slug === ownProps.match.params.post_slug,
  ),
});

export default connect(
  mapStateToProps,
  { fetchPosts },
)(Post);
