import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
interface INavBarState {
  isBurgerNavClicked: boolean;
}
interface INavBarProps {
  background: string;
}
class NavBar extends Component <INavBarProps, INavBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isBurgerNavClicked: false,
    };
  }
  public toggleMenu = () => {
    // tslint:disable-next-line:no-console
    this.setState({isBurgerNavClicked: this.state.isBurgerNavClicked ? false : true});
  }
  public render() {
    return <header style={{backgroundColor: this.props.background}}>
        <div className="blue-layer" style={{ display: this.state.isBurgerNavClicked ? "block" : "none" }} />
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src="../img/logo.png" alt="home page" />
          </Link>
          <div>
          <span onClick={this.toggleMenu}>
            <FontAwesomeIcon icon={this.state.isBurgerNavClicked ? "times" : "bars"} className="nav-icon" />
          </span>
            <nav aria-label="Main Navigation" style={{ display: this.state.isBurgerNavClicked ? "block" : "none" }}>
                <ul onClick={this.toggleMenu}>
                  <li>
                    <NavLink exact to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about_services">
                      About &amp; Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                </ul>
            </nav>
          </div>
        </div>
      </header>;
  }

}

export default NavBar;
