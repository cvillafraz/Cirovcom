// import modules
import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../config/actions/postAction";
import Error from "./Error";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Wait from "./Wait";
const Parser = require("html-react-parser");
// Define props interface
interface Iprops {
  posts: any[];
  fetchPosts: any;
  error?: Error;
}
// Blog component
class Blog extends Component <Iprops, any> {
    public componentDidMount(): void {
        this.props.fetchPosts();
    }
  public render(): React.ReactNode {
    const { posts, error } = this.props;
    return <React.Fragment>
        <NavBar background={"#283149"} />
      {!error ? (posts.length >= 1 ? <main id="main-posts">
          <section className="wrapper" id="posts-section">
            <h1>Blog</h1>
            {posts.map((post: any) => (
              <article className="post" key={post.id}>
                <img
                  src={
                    post.featured_image || "https://placehold.it/300x200"
                  }
                  alt=""
                />
                <div>
                  <h2>{post.title.rendered}</h2>
                  <div>
                    <Link
                      className="category-link"
                      to={`blog/${post.category_slug}`}>{post.category_name}</Link>
                    <span>
                      {" "}
                      /{" "}
                      {new Date(post.date)
                        .toLocaleDateString()
                        .replace(/\//g, "-")}
                    </span>
                  </div>
                  {Parser(post.excerpt.rendered)}
                  <Link to={`/post/${post.slug}`} className="post-link">Keep reading</Link>
                </div>
              </article>
            ))}
          </section>
          </main>  : <Wait />)
       : <Error error={error}/>}
        <Footer />
      </React.Fragment>;
  }
}

const mapStateToProps = (state: any, ownProps: any): object => ({
  error: state.errorMessage,
  posts: state.posts.items.filter(
    (post: any) =>
      ownProps.match.params.category
        ? post.category_slug === ownProps.match.params.category
        : post.categories[0] !== 190,
  ),
});
export default connect(mapStateToProps, { fetchPosts })(Blog);
