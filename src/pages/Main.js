import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Work from "./Work";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import selfImg from "../assets/images/erin.jpeg";
 
function Main () {
    // initialize hooks/variables
    const [showMobileMenu, setMobileMenu] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const windowSize = useRef([window.innerWidth, window.innerHeight]);
    // Close mobile menu when window is resized
    if (!isMobile && showMobileMenu) {
        setMobileMenu(false)
        setIsMobile(false)
    }
    // runs on page load
    useEffect(() => {
        // set isMobile true on page resize less than 600w
        window.addEventListener('resize', () => {
            if (window.innerWidth < 600) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        });
        // set isMobile true if window width is less than 600w on page load
        if (windowSize.current[0] <= 600) {
            setIsMobile(true);
        }
    }, [isMobile,showMobileMenu]);
    return (
        <React.Fragment>
            {/* show backdrop when mobile menu is open */}
            {showMobileMenu != null && isMobile ? 
                <div className={showMobileMenu ? 'back-drop active' : 'back-drop closed'}></div>
            : 
                <div className="back-drop"></div>
            }
            {/* main header */}
            <header className="header">
                <a className="skip-link" href="#main" tabIndex="1">Skip Navigation Links</a>
                <DesktopMenu />
                <MobileMenu setMobileMenu={setMobileMenu} showMobileMenu={showMobileMenu} />
            </header>
            {/* main content */}
            <main className="content" id="main">
                <div className="hero">
                    <h1 className="header-title">Hi, I'm <span className="emphasis">Erin Keller</span>.</h1>
                    <div className="img-container">
                        <img src={selfImg} alt="A photo of Erin Keller" />
                    </div>
                </div>
                <section name="about-me">
                    <AboutMe />
                </section>
                <section name="work">
                    <Work />
                </section>
                <section name="contact">
                    <Contact />
                </section>
                <section name="resume">
                    <Resume />
                </section>
            </main>
            {/* footer */}
            <footer className="footer">
                <div className="vertical-center">
                    <h4>&copy; 2023 Erin Keller</h4>
                    <a href="https://www.vecteezy.com/free-png/forest">Forest PNGs by Vecteezy</a>
                </div>
            </footer>
        </React.Fragment>
    );
}
 
export default Main;