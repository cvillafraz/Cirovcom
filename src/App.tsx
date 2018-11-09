// Import modules
import * as React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Error from "./components/Error";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import store from "./config/store";
// App component
class App extends Component <any, any> {
  public render(): React.ReactNode {
    return <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about_services" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/blog/:category?" component={Blog}/>
            <Route exact path="/post/:post_slug" component={Post} />
            <Route component={Error} />
          </Switch>
        </Router>
      </Provider>;
  }
}
export = App;
