import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css"
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpanded: false,
    };
  }
  handleToggle(e) {
    this.setState({
      isExpanded: !this.state.isExpanded,
    });
  }

  render() {
    const { isExpanded } = this.state;

    return (
        <nav className="nav">
          <i
            className="fa fa-bars"
            aria-hidden="true"
            onClick={(e) => this.handleToggle(e)}
          />
          <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
            <NavLink
              activeClassName="active"
              className="navigation-link"
              to="/videos"
              onClick={(e) => this.handleToggle(e)}
            >
              <li>Videos</li>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navigation-link"
              to="/about"
              onClick={(e) => this.handleToggle(e)}
            >
              <li>Why</li>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navigation-link"
              to="/submit"
              onClick={(e) => this.handleToggle(e)}
            >
              <li>Submit</li>
            </NavLink>
            <NavLink
              activeClassName="active"
              className="navigation-link"
              to="/contact"
              onClick={(e) => this.handleToggle(e)}
            >
              <li>Contact</li>
            </NavLink>
            <Login />
            <Logout />
          </ul>
        </nav>
    );
  }
}

export default Nav;
