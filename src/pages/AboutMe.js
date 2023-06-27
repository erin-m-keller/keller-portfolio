import React, { Component, useState, useEffect } from "react";
import { motion } from "framer-motion";
import ImageGallery from 'react-image-gallery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDove } from '@fortawesome/free-solid-svg-icons';
import selfImg from "../assets/images/erin.jpeg";
import galleryImg1 from "../assets/images/gallery/1.jpg";
import galleryImg2 from "../assets/images/gallery/2.jpg";
import galleryImg3 from "../assets/images/gallery/3.jpg";
import galleryImg4 from "../assets/images/gallery/4.jpg";
import galleryImg5 from "../assets/images/gallery/5.jpg";
import galleryImg6 from "../assets/images/gallery/6.jpg";
import galleryImg7 from "../assets/images/gallery/7.jpg";
import galleryImg8 from "../assets/images/gallery/8.jpg";
import galleryImg9 from "../assets/images/gallery/9.jpg";
import galleryImg10 from "../assets/images/gallery/10.jpg";
import galleryImg11 from "../assets/images/gallery/11.jpg";
import galleryImg12 from "../assets/images/gallery/12.jpg";

// @ExperienceTimer function is modified from the code found on 
// this blog post by Julia: https://dev.to/yuridevat/how-to-create-a-timer-with-react-7b9 
function ExperienceTimer() {
    // initialize hooks/variables
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const startingDate = "September 01, 2010";
    /**
     * @getTime
     * displays the days, hours, minutes 
     * and seconds since I started working 
     * in front end development
     */
    const getTime = () => {
        // initialize variables
        const time = Date.now() - Date.parse(startingDate);
        // get days
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)).toLocaleString());
        // get hours
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        // get minutes
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        // get seconds
        setSeconds(Math.floor((time / 1000) % 60));
    };
    // runs on page load
    useEffect(() => {
        // set interval to increment the time 
        const interval = setInterval(() => getTime(startingDate), 1000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="timer">
          <p>I have been a <strong>&lt;front end developer&#47;&gt;</strong> for...</p>
          <div className="flex-columns">
            <div className="col"><span className="days">{days} days</span></div>
            <div className="col"><span className="hours">{hours} hours</span></div>
            <div className="col"><span className="minutes">{minutes} minutes</span></div>
            <div className="col"><span className="seconds">{seconds} seconds</span></div>
          </div>
        </div>
    );
}
class AboutMe extends Component {
  render() {
    const parentElem = {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    };
    const childElem = {
      initial: { opacity: 0, y: 60 },
      enter: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 60 },
    };
    const imgElem = {
      initial: { opacity: 0 },
      enter: { opacity: 1 },
      exit: { opacity: 0 },
    };
    const images = [
      {
        original: galleryImg1,
        thumbnail: galleryImg1,
      },
      {
        original: galleryImg2,
        thumbnail: galleryImg2,
      },
      {
        original: galleryImg3,
        thumbnail: galleryImg3,
      },
      {
        original: galleryImg4,
        thumbnail: galleryImg4,
      },
      {
        original: galleryImg5,
        thumbnail: galleryImg5,
      },
      {
        original: galleryImg6,
        thumbnail: galleryImg6,
      },
      {
        original: galleryImg7,
        thumbnail: galleryImg7,
      },
      {
        original: galleryImg8,
        thumbnail: galleryImg8,
      },
      {
        original: galleryImg9,
        thumbnail: galleryImg9,
      },
      {
        original: galleryImg10,
        thumbnail: galleryImg10,
      },
      {
        original: galleryImg11,
        thumbnail: galleryImg11,
      },
      {
        original: galleryImg12,
        thumbnail: galleryImg12,
      }
    ];
    return (
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={parentElem}
        transition={{ duration: 0.3 }}
        className="content-section three"
      >
        <div className="main-content">
          <motion.div variants={childElem} transition={{ duration: 0.5 }} className="about-me container">
            <h1 className="header-title">About <span className="emphasis">me</span>. <FontAwesomeIcon icon={faDove} /></h1>
            <div className="self">
            <motion.div
              initial="initial"
              animate="enter"
              exit="exit"
              variants={imgElem}
              transition={{ duration: 3 }}
            >
              <div className="img-container">
                <img src={selfImg} alt="A photo of Erin Keller" />
              </div>
            </motion.div>
            </div>
            <ExperienceTimer />
          </motion.div>
          <motion.div variants={childElem} transition={{ duration: 0.5 }} className="aboutme-section">
            <div className="personal">
              <ImageGallery items={images} />
            </div>
              <p className="personal-txt">Erin Keller loves programming, solving problems, working in a team, and continuously learning new things. She's been <strong>developing Front End applications</strong> for over <strong>12 years</strong>. For the past decade she has been working for the Fortune 500 company <strong>IBM</strong>.</p>
              <p className="personal-txt">Erin has some educational background in programming but she is mainly <strong>self-taught</strong> in all things front end related. Erin is a <strong>passionate</strong> Front End Developer who focuses on writing <strong>clean</strong>, <strong>elegant</strong> and <strong>efficient</strong> code.</p>
              <p className="personal-txt">Erin finds great joy in pursuing a diverse range of interests. An <strong>avid reader</strong> and <strong>music enthusiast</strong>, she finds solace in the pages of captivating books and the melodic tunes that resonate with her soul. Alongside her love for literature and music, Erin has a deep appreciation for the <strong>art of cooking</strong>. Exploring culinary delights and experimenting with flavors brings her immense satisfaction and allows her to express her <strong>creativity in the kitchen</strong>. From crafting mouthwatering dishes to trying out new recipes, she finds solace and fulfillment in the culinary art.</p>
              <p>Whether it's playing the <strong>piano</strong>, engaging in <strong>board games</strong> or <strong>video games</strong>, or exploring the enthralling world of <strong>true crime</strong> and <strong>anime</strong>, Erin embraces various forms of entertainment with enthusiasm. Additionally, her love for <strong>outdoor adventures</strong> such as <strong>camping</strong>, <strong>backpacking</strong>, <strong>hiking</strong>, and <strong>kayaking</strong> allows her to appreciate the wonders of nature and seek moments of tranquility. As a proud <strong>cat mom</strong> to two lovable boys named Yuki and Jello, and <strong>happily married</strong> to Taylor Keller, Erin's personal life is filled with love and cherished moments.</p>
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
export default AboutMe;