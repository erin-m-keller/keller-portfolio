import React, { useState, useEffect, useRef } from "react";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Work from "./Work";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import { AnimatePresence } from "framer-motion";

import {
    Route,
    Routes,
    useLocation
  } from "react-router-dom";
 
function Main () {
    // initialize hooks/variables
    const [showMobileMenu, setMobileMenu] = useState(null),
          [isMobile, setIsMobile] = useState(false),
          [theme, setTheme] = useState(() => {
            const savedTheme = localStorage.getItem('portfolioTheme');
            return savedTheme || 'light';
          }),
          windowSize = useRef([window.innerWidth, window.innerHeight]),
          location = useLocation();

    // Close mobile menu when window is resized
    if (!isMobile && showMobileMenu) {
        setMobileMenu(false)
        setIsMobile(false)
    }

    // toggle the light or dark theme for the site
    const toggleTheme = (selectedTheme) => {
        if (selectedTheme === 'light') {
            setTheme('light');
            localStorage.setItem('portfolioTheme','light');
        } else {
            setTheme('dark');
            localStorage.setItem('portfolioTheme','dark');
        }
    };

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
        <div className={`${theme}`}>
            {/* show backdrop when mobile menu is open */}
            {showMobileMenu != null && isMobile ? 
                <div className={showMobileMenu ? 'back-drop active' : 'back-drop closed'}></div>
            : 
                <div className="back-drop"></div>
            }
            {/* main header */}
            <header className="header">
                <a className="skip-link" href="#main" tabIndex="1">Skip Navigation Links</a>
                <DesktopMenu currentTheme={theme} toggleTheme={toggleTheme} />
                <MobileMenu currentTheme={theme} setMobileMenu={setMobileMenu} toggleTheme={toggleTheme} showMobileMenu={showMobileMenu} />
            </header>
            {/* main content */}
            <main className="content" id="main">
            <AnimatePresence mode="wait" initial={false}>
                <Routes location={location}>
                    <Route path="/portfolio" element={<AboutMe />} />
                    <Route path="/work" element={<Work />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </AnimatePresence>
            </main>
            {/* footer */}
            <footer className="footer">
                <div className="vertical-center">
                    <h4>&copy; 2023 Erin Keller</h4>
                </div>
            </footer>
        </div>
    );
}
 
export default Main;