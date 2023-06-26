import React, { useState, useEffect, useRef } from "react";
import Home from "./Home";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Resume from "./Resume";
import Work from "./Work";
import MobileMenu from "../components/MobileMenu";
import DesktopMenu from "../components/DesktopMenu";
import { AnimatePresence, motion } from "framer-motion";

import {
    Route,
    Routes,
    useLocation
  } from "react-router-dom";
 
function Main () {
    // initialize hooks/variables
    const [showMobileMenu, setMobileMenu] = useState(null),
          [isMobile, setIsMobile] = useState(false),
          [isTransitioning, setIsTransitioning] = useState(false),
          windowSize = useRef([window.innerWidth, window.innerHeight]),
          location = useLocation(),
          variants = {
            initial: { opacity: 0 },
            enter: { opacity: 1 },
            exit: { opacity: 0 },
          };

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
        setIsTransitioning(true);
        const timeout = setTimeout(() => {
          setIsTransitioning(false);
        }, 300); 
        return () => clearTimeout(timeout);
    }, [isMobile,showMobileMenu],[location]);

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
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={location.pathname}
                    initial="initial"
                    animate="enter"
                    exit="exit"
                    variants={variants}
                    transition={{ duration: 0.3 }}
                >
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<AboutMe />} />
                        <Route path="/work" element={<Work />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/resume" element={<Resume />} />
                    </Routes>

                    {/* footer */}
                    <footer className="footer">
                        <div className="vertical-center">
                            <h4>&copy; 2023 Erin Keller</h4>
                        </div>
                    </footer>
                </motion.div>
            </AnimatePresence>
            </main>
        </React.Fragment>
    );
}
 
export default Main;