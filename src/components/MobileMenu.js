import React, { Component } from "react";
import { 
    Link, 
    animateScroll as scroll 
  } from "react-scroll";
 
class MobileMenu extends Component {
  render() {
    let showMobileMenu = this.props.showMobileMenu;
    let setMobileMenu = this.props.setMobileMenu;
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
                <li><Link onClick={() => setMobileMenu(!showMobileMenu)} tabIndex="1" to="about-me" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">About Me</Link></li>
                <li><Link onClick={() => setMobileMenu(!showMobileMenu)} tabIndex="1" to="work" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Examples</Link></li>
                <li><Link onClick={() => setMobileMenu(!showMobileMenu)} tabIndex="1" to="contact" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Contact Me</Link></li>
                <li><Link onClick={() => setMobileMenu(!showMobileMenu)} tabIndex="1" to="resume" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Resume</Link></li>
            </ul>
        </nav>
    );
  }
}
 
export default MobileMenu;