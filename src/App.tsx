// T8uL1esp8p@!UGZM8M
import * as React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import About from "./components/About";
import Blog from "./components/Blog";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import Post from "./components/Post";
import store from "./config/store";
class App extends Component<any, {}> {
  public render() {
    return <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about_services" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route exact path="/blog" component={Blog}/>
            <Route path="/blog/:post_slug" component={Post} />
          </Switch>
        </Router>
      </Provider>;
  }
}
export = App;
