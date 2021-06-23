// import modules
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../img/logo.png";

// define state and props interfaces
interface INavBarState {
  isBurgerNavClicked: boolean;
}
interface INavBarProps {
  background: string;
}
// NavBar component
class NavBar extends Component<INavBarProps, INavBarState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isBurgerNavClicked: false,
    };
  }
  public toggleMenu = (): void => {
    this.setState({
      isBurgerNavClicked: this.state.isBurgerNavClicked ? false : true,
    });
  };
  public render(): React.ReactNode {
    return (
      <header style={{ backgroundColor: this.props.background }}>
        <div
          className="blue-layer"
          style={{ display: this.state.isBurgerNavClicked ? "block" : "none" }}
        />
        <div className="wrapper">
          <Link to="/" className="logo">
            <img src={logo} alt="home page" />
          </Link>
          <div className="nav-elements">
            <span onClick={this.toggleMenu} aria-label="toggle menu">
              <FontAwesomeIcon
                icon={this.state.isBurgerNavClicked ? "times" : "bars"}
                className="nav-icon"
              />
            </span>
            <nav
              aria-label="Main Navigation"
              style={{
                display: this.state.isBurgerNavClicked ? "block" : "none",
              }}
            >
              <ul onClick={this.toggleMenu}>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/portfolio">Portfolio</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default NavBar;
