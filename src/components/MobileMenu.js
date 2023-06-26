import React, { Component } from "react";
 
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
                <li><a href="/" onClick={() => setMobileMenu(!showMobileMenu)}>Home</a></li>
                <li><a href="/about" onClick={() => setMobileMenu(!showMobileMenu)}>About Me</a></li>
                <li><a href="/work" onClick={() => setMobileMenu(!showMobileMenu)}>Work</a></li>
                <li><a href="/contact" onClick={() => setMobileMenu(!showMobileMenu)}>Contact</a></li>
                <li><a href="/resume" onClick={() => setMobileMenu(!showMobileMenu)}>Resume</a></li>
            </ul>
        </nav>
    );
  }
}
 
export default MobileMenu;