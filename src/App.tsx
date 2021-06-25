import * as React from "react";
import { Component } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import store from "./config/store";
// App component
class App extends Component<any, any> {
  public render(): React.ReactNode {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about-services" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route component={Error} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}
export default App;
