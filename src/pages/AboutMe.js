import React, { Component, useState, useEffect } from "react";

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
          <p>I have been a front end developer for...</p>
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
    return (
        <article className="content-section three">
          <div className="main-content">
            <div className="about-me">
              <h2>About me</h2>
              <ExperienceTimer />
              <div className="aboutme-section">
                <p>Erin Keller loves programming, solving problems, working in a team, and continuously learning new things. She's been <strong>developing Front End applications</strong> for over <strong>12 years</strong>. For the past decade she has been working for the Fortune 500 company <strong>IBM</strong>.</p>
                <p>Erin has some educational background in programming but she is mainly <strong>self-taught</strong> in all things front end related. Erin is a <strong>passionate</strong> Front End Developer who focuses on writing <strong>clean</strong>, <strong>elegant</strong> and <strong>efficient code</strong>.</p>
              </div>
            </div>
          </div>
        </article>
    );
  }
}
export default AboutMe;