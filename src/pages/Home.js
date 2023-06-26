import React, { Component } from "react";
import { motion } from "framer-motion";
import selfImg from "../assets/images/erin.jpeg";
 
class Home extends Component {
  render() {
    const variants = {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    };
    const childAnimation = {
      initial: { opacity: 0, y: 60 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 60 },
    };
    return (
      <motion.section
        key={location.pathname}
        initial="initial"
        animate="enter"
        exit="exit"
        variants={variants}
        transition={{ duration: 0.3 }}
        className="content-section two"
      >
        <div className="main-content">
          <div className="home">
            <motion.div variants={childAnimation} transition={{ duration: 0.5 }} className="hero">
              <h1 className="header-title">Hi, I'm <span className="emphasis">Erin Keller</span>.</h1>
              <div className="img-container">
                <img src={selfImg} alt="A photo of Erin Keller" />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    );
  }
}

export default Home;