// T8uL1esp8p@!UGZM8M
// Import modules
import * as ES6Promise from "es6-promise";
import history from "history";
import * as React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Error from "./components/Error";
import Home from "./components/Home";
import Wait from "./components/Wait";
import store from "./config/store";
const Loadable = require("react-loadable");
ES6Promise.polyfill();
interface ILoadableComponent {
  component:
  (React.ComponentClass<any, any>) |
  (React.StatelessComponent<any>);
}
const About: ILoadableComponent["component"] = Loadable({
  loader: (): Promise<any> =>
    import("./components/About" /* webpackChunkName: "about" */),
  loading: Wait,
});
const Portfolio: ILoadableComponent["component"] = Loadable({
  loader: (): Promise<any> =>
    import("./components/Portfolio" /* webpackChunkName: "portfolio" */),
  loading: Wait,
});
const Blog: ILoadableComponent["component"] = Loadable({
  loader: (): Promise<any> =>
    import("./components/Blog" /* webpackChunkName: "blog" */),
  loading: Wait,
});
const Post: ILoadableComponent["component"] = Loadable({
  loader: (): Promise<any> =>
    import("./components/Post" /* webpackChunkName: "post" */),
  loading: Wait,
});
// App component
class App extends Component<any, any> {
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
export default App;
