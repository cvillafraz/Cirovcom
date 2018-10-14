import * as React from "react";
import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../config/actions/postAction";
import Footer from "./Footer";
import NavBar from "./NavBar";
// tslint:disable-next-line:no-var-requires
const Parser = require("html-react-parser");
class Blog extends Component <any, any> {
    public componentDidMount() {
        this.props.fetchPosts();
    }
  public render() {
    return <React.Fragment>
        <NavBar background={"#283149"} />
        <main id="main-posts">
          <section className="wrapper">
            <h1>Blog</h1>
            {this.props.posts.length >= 1 ? this.props.posts.map((post: any) => (
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
                      to={`/blog/categories/:${post.categories[0]}`}>{post.category_name}</Link>
                      <span>
                        {" "}
                        /{" "}
                        {new Date(post.date)
                          .toLocaleDateString()
                          .replace(/\//g, "-")}
                      </span>
                            </div>
                      {Parser(post.excerpt.rendered)}
                    <Link to={`/blog/${post.slug}`} className="post-link">Keep reading</Link>
                  </div>
                </article>
              )) : <div>waiting...</div>}
          </section>
        </main>
        <Footer />
      </React.Fragment>;
  }
}

const mapStateToProps = (state: any) => ({
  posts: state.posts.items.filter((post: any) => post.categories[0] !== 190),
});
export default connect(mapStateToProps, { fetchPosts })(Blog);
