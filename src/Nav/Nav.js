import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Login from "../Login/Login";
import Logout from "../Logout/Logout";

const Navigation = styled.header`
.navigation-link {
    color: black;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 42px;
  }

.navigation-link {
    color: #F73BB2;
  }
  .fa-bars {
    display: none;
    color: black;
    font-size: 2rem;
  }


}

  .nav ul {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
}

.nav li {
    font-size: 42px;
    color: #000000;
    text-decoration: none;
}

li:hover {
    color: #E24E1B;
}



  @media only screen and (max-width: 1000px) {
    height: auto;
    min-height: 50px;
    display: block;
    position: relative;
    
    .fa-bars {
      display: inline-block;
      position: absolute;
      top: 10px;
      right: 10px;
      cursor: pointer;
    }
    ul.collapsed {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-wrap: wrap;
      overflow: hidden;
      max-height: 0;
      

      &.is-expanded {
        overflow: hidden;
        max-height: 500px; /* approximate max height */
      }
      li {
        padding: 15px 10px;
        margin: 0px 0px;
        width: 100%;
      }
    }
  }
`;

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
      <Navigation>
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
      </Navigation>
    );
  }
}

export default Nav;
