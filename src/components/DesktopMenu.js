import React, { Component } from "react";
import {
  NavLink
} from "react-router-dom";
 
class MobileMenu extends Component {
  render() {
    return (
      <nav className="desktop-menu">
        <ul role="menu" aria-labelledby="menu-btn">
            <li role="listitem"><NavLink to="/">Home</NavLink></li>
            <li role="listitem"><NavLink to="/about">About Me</NavLink></li>
            <li role="listitem"><NavLink to="/work">Work</NavLink></li>
            <li role="listitem"><NavLink to="/contact">Contact</NavLink></li>
            <li role="listitem"><NavLink to="/resume">Resume</NavLink></li>
        </ul>
      </nav>
    );
  }
}
 
export default MobileMenu;