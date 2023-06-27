import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun, faCode } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from "react-router-dom";
 
class MobileMenu extends Component {
  render() {
    let showMobileMenu = this.props.showMobileMenu,
        setMobileMenu = this.props.setMobileMenu,
        toggleTheme = this.props.toggleTheme,
        currentTheme = this.props.currentTheme;
    return (
        <nav className={`mobile-menu ${!showMobileMenu ? "closed" : ""}`}>
            <a href="#" onClick={() => setMobileMenu(!showMobileMenu)} className={showMobileMenu ? "active" : ""} id="menu-btn">
                <div aria-controls="menu">
                <div>
                    <div className="menu-bar bar-one"></div>
                    <div className="menu-bar bar-two"></div>
                    <div className="menu-bar bar-three"></div>
                </div>
                </div>
            </a>
            <ul role="menu" aria-labelledby="menu-btn" className={showMobileMenu ? "active" : "inactive"}>
                <li role="listitem" className="nav-name"><FontAwesomeIcon icon={faCode} />&nbsp;Erin Keller</li>
                <li role="listitem"><NavLink to="/" onClick={() => setMobileMenu(!showMobileMenu)}>About Me</NavLink></li>
                <li role="listitem"><NavLink to="/portfolio" onClick={() => setMobileMenu(!showMobileMenu)}>Portfolio</NavLink></li>
                <li role="listitem"><NavLink to="/contact" onClick={() => setMobileMenu(!showMobileMenu)}>Contact</NavLink></li>
                <li role="listitem"><NavLink to="/resume" onClick={() => setMobileMenu(!showMobileMenu)}>Resume</NavLink></li>
                <li role="listitem" className={`toggle-theme-mobile ${currentTheme === 'light' ? 'active' : ''}`}><span onClick={() => {toggleTheme('light');setMobileMenu(!showMobileMenu);}}><FontAwesomeIcon icon={faSun} />&nbsp;Light Mode</span></li>
                <li role="listitem" className={`toggle-theme-mobile ${currentTheme === 'dark' ? 'active' : ''}`}><span onClick={() => {toggleTheme('dark');setMobileMenu(!showMobileMenu);}}><FontAwesomeIcon icon={faMoon} />&nbsp;Dark Mode</span></li>
            </ul>
        </nav>
    );
  }
}
 
export default MobileMenu;