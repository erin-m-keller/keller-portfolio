import React, { Component } from "react";
import { 
    Link, 
    animateScroll as scroll 
  } from "react-scroll";
 
class MobileMenu extends Component {
  render() {
    return (
      <nav className="desktop-menu">
        <ul role="menu" aria-labelledby="menu-btn">
            <li role="listitem"><Link tabIndex="1" to="about-me" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">About Me</Link></li>
            <li role="listitem"><Link tabIndex="1" to="work" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Examples</Link></li>
            <li role="listitem"><Link tabIndex="1" to="contact" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Contact Me</Link></li>
            <li role="listitem"><Link tabIndex="1" to="resume" spy={true} smooth={true} offset={-50} duration={500} activeclassname="active" role="menuitem">Resume</Link></li>
        </ul>
      </nav>
    );
  }
}
 
export default MobileMenu;