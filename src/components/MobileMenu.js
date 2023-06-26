import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
 
class MobileMenu extends Component {
  render() {
    let showMobileMenu = this.props.showMobileMenu,
        setMobileMenu = this.props.setMobileMenu,
        toggleTheme = this.props.toggleTheme;
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
                <li><a href="/portfolio" onClick={() => setMobileMenu(!showMobileMenu)}>About Me</a></li>
                <li><a href="/work" onClick={() => setMobileMenu(!showMobileMenu)}>Work</a></li>
                <li><a href="/contact" onClick={() => setMobileMenu(!showMobileMenu)}>Contact</a></li>
                <li><a href="/resume" onClick={() => setMobileMenu(!showMobileMenu)}>Resume</a></li>
                <li className="toggle-theme-mobile"><span onClick={() => {toggleTheme('light');setMobileMenu(!showMobileMenu);}}><FontAwesomeIcon icon={faSun} />&nbsp;Light Mode</span></li>
                <li className="toggle-theme-mobile"><span onClick={() => {toggleTheme('dark');setMobileMenu(!showMobileMenu);}}><FontAwesomeIcon icon={faMoon} />&nbsp;Dark Mode</span></li>
            </ul>
        </nav>
    );
  }
}
 
export default MobileMenu;