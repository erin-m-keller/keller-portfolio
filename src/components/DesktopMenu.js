import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faCode } from '@fortawesome/free-solid-svg-icons';
 
class MobileMenu extends Component {
  render() {
    let toggleTheme = this.props.toggleTheme,
        currentTheme = this.props.currentTheme;
    return (
      <nav className="desktop-menu">
        <ul role="menu" aria-labelledby="menu-btn">
            <li role="listitem" className="nav-name"><FontAwesomeIcon icon={faCode} />&nbsp;Erin Keller</li>
            <li role="listitem"><NavLink to="/">About Me</NavLink></li>
            <li role="listitem"><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li role="listitem"><NavLink to="/contact">Contact</NavLink></li>
            <li role="listitem"><NavLink to="/resume">Resume</NavLink></li>
            <li role="listitem" className={`toggle-theme ${currentTheme === 'light' ? 'active' : ''}`}><span onClick={() => toggleTheme('light')}><FontAwesomeIcon icon={faSun} />&nbsp;Light Mode</span></li>
            <li role="listitem" className={`toggle-theme ${currentTheme === 'dark' ? 'active' : ''}`}><span onClick={() => toggleTheme('dark')}><FontAwesomeIcon icon={faMoon} />&nbsp;Dark Mode</span></li>
        </ul>
      </nav>
    );
  }
}
 
export default MobileMenu;