import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import resume from "../assets/documents/erin-resume.pdf";
 
class Resume extends Component {
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
    const resumeElem = {
      initial: { opacity: 0, x: 200 },
      enter: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 200 },
    };
    return (
      <motion.section
        initial="initial"
        animate="enter"
        exit="exit"
        variants={parentElem}
        transition={{ duration: 0.3 }}
        className="content-section four"
      >
        <div className="main-content">
          <motion.div variants={childElem} transition={{ duration: 0.5 }} className="resume container">
            <h1 className="header-title">My <span className="emphasis">resume</span>. <FontAwesomeIcon icon={faFire} /></h1>
            <motion.div className="resume-form" variants={resumeElem} transition={{ duration: 1.5 }}>
              <div className="main">
                <div className="edu-exp">
                  <h3 className="resume-title">Erin Keller<span className="resume-subtitle">Full Stack Developer</span></h3>
                  <form action={resume} target="_blank">
                    <input type="submit" value="Download" className="resume-btn" />
                  </form>
                  <article className="objective">
                      <h4 className="resume-bold">Profile</h4>
                      <p className="sm">
                        Highly proficient and committed Full Stack Developer with a strong technical background and over a decade of front-end experience. 
                        Known for consistently staying updated with cutting-edge skills and industry knowledge. Demonstrated expertise in coding responsive 
                        websites and web applications, utilizing a wide range of technologies such as HTML5, CSS/LESS/SASS, JavaScript ES6, jQuery, JSON, 
                        Node, MySQL, MongoDB, Sequelize, React, PWA, NoSQL, and MERN stack.
                      </p>
                  </article>
                  <article>
                    <div>
                      <h4 className="resume-bold">Employment History</h4>
                      <p className="resume-bold">Learning Developer, IBM, Lansing<span className="resume-date">May 2013 - Present</span></p>
                      <ul className="resume-list">
                        <li className="sm">Works in an agile environment with weekly stand-ups, tracks issues in Jira, and conducts sprint, planning and retrospectives every two weeks.</li>
                        <li className="sm">Rebuilt 5-year-old PHP application in React with full user experience redesign (Leadership Academy).</li>
                        <li className="sm">Refactored legacy HTML to meet industry standards and Accessibility compliance.</li>
                        <li className="sm">Utilized HTML, CSS, and JavaScript to create 100+ responsive pages.</li>
                        <li className="sm">Produced and assisted in the deployment of 10+ various web applications for our HR clients.</li>
                        <li className="sm">Developed responsive and user-friendly web interfaces using HTML, CSS, and JavaScript, ensuring cross-browser compatibility and accessibility standards.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Student Programmer, Lansing Community College, Lansing<span className="resume-date">May 2012 - May 2013</span></p>
                      <ul className="resume-list">
                        <li className="sm">Collaborated with business stakeholders to analyze their requirements and identify opportunities for developing custom solutions that streamline and improve business processes.</li>
                        <li className="sm">Leveraged PL/SQL queries to manage and manipulate data within databases, ensuring efficient data retrieval and maintaining data integrity.</li>
                        <li className="sm">Developed applications using Application Express, a low-code development platform, to create user-friendly and functional interfaces for various projects.</li>
                        <li className="sm">Assisted in the installation and configuration of new applications and versions, ensuring smooth deployment and seamless integration with existing systems.</li>
                        <li className="sm">Participated in code reviews, providing feedback and suggestions to improve code quality, performance, and adherence to coding standards.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Front-end Developer, Tripper's, Lansing<span className="resume-date">Sep 2010 - Sep 2011</span></p>
                      <ul className="resume-list">
                        <li className="sm">Designed and developed the company's website, adhering to industry best practices and implementing accessible design standards to ensure an optimal user experience.</li>
                        <li className="sm">Created and maintained an interactive menu on the website, employing modern front-end technologies to enhance usability and navigation for site visitors.</li>
                        <li className="sm">Managed the web application utilized by the manager, efficiently handling patron correspondence and providing seamless communication between the business and its customers.</li>
                        <li className="sm">Utilized expertise in HTML and CSS to craft visually appealing and responsive web interfaces, ensuring compatibility across multiple browsers and devices.</li>
                        <li className="sm">Implemented and customized content management systems (CMS), empowering the company to easily update and manage website content without extensive technical knowledge.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Shift Leader II, Speedway LLC, Lansing<span className="resume-date">Feb 2006 - Sep 2010</span></p>
                      <ul className="resume-list">
                        <li className="sm">Demonstrated strong leadership and provided clear direction to employees, fostering a motivated and productive work environment.</li>
                        <li className="sm">Supervised daily tasks, optimizing workflow and driving efficiency to meet operational goals and deliver exceptional service.</li>
                        <li className="sm">Developed and implemented comprehensive training processes for newly hired employees, ensuring a smooth onboarding experience and promoting consistent performance.</li>
                        <li className="sm">Oversaw weekly inventory control, effectively managing stock levels to maintain cost control and minimize waste.</li>
                        <li className="sm">Maintained strict adherence to food safety standards, consistently upholding high levels of cleanliness and sanitation to ensure a safe and healthy working environment.</li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <h4 className="resume-bold">Education</h4>
                    <div>
                      <p className="resume-bold">Michigan State University, East Lansing</p>
                      <p className="sm">Certificate of Completion: Fullstack Developer Bootcamp</p>
                      <p className="sm">4.0 GPA</p>
                    </div>
                    <div>
                      <p className="resume-bold">Lansing Community College</p>
                      <p className="sm">Associate's Degree: Computer Programmer/Business Analyst</p>
                      <p className="sm">Additional specialized courses in computer graphics, graphic design, traditional art (drawing/painting), networking, database management, and project management.</p>
                    </div>
                    <div>
                      <p className="resume-bold">Sault Area High School</p>
                      <p className="sm">Diploma</p>
                      <p><strong>Activities and societies:</strong> Kiwanis Key Club, JV/Varsity Softball, Varsity Diving</p>
                      <p className="sm">Studies focused in general education, art (including art history), and computer networking. Graduated with a certification in Novell Networking through the Career Center.</p>
                    </div>
                  </article>
                  <article>
                    <h4 className="resume-bold">Badges</h4>
                    <p className="sm"><a href="https://www.credly.com/badges/09e073a0-e7c4-4b20-ab6d-f387bbd9cadf" target="_blank">Be Equal Ally</a>, <a href="https://www.credly.com/badges/62d9ba2b-8e15-4b69-a1d8-e3960e4beee8" target="_blank">Advancing Accessibility</a>, <a href="https://www.credly.com/badges/e030c825-b054-4fcf-a055-33f25bfea5a3/linked_in_profile" target="_blank">Python for Data Science</a>, <a href="https://www.credly.com/badges/bde1d498-b46f-414a-8bcc-f8943d15c7a8?source=linked_in_profile" target="_blank">Data Science Foundations - Level 1</a>, <a href="https://www.credly.com/badges/5f6891fb-4ba4-41a6-afbe-b80f39218f3a?source=linked_in_profile" target="_blank">IBM Carbon Design Systems Developer Essentials - React</a>, <a href="https://www.credly.com/badges/c08b7c46-c03d-4e33-8849-930480d37792?source=linked_in_profile" target="_blank">IBM Virtual Collaborator</a>, <a href="https://www.credly.com/badges/953104f8-84ef-4d73-b2c0-4880e191278a/linked_in_profile" target="_blank">IBM Digital Learning Transformation</a>, <a href="https://www.credly.com/badges/452993ff-74d7-4569-8267-e0118c9c0f97/linked_in_profile" target="_blank">IBM Agile Explorer</a>, <a href="https://www.credly.com/badges/becc3448-2a5a-4bbd-8282-dee30de55b62/linked_in_profile" target="_blank">Cognitive Practitioner</a>, <a href="https://www.credly.com/badges/c448c084-95d6-4947-bb9a-99f857e6adde/linked_in_profile" target="_blank">Human Resources in a Cognitive Era - Essentials</a>, <a href="https://www.credly.com/badges/9f4cc05e-0e1a-42d9-a0ea-cbcc63571401/linked_in_profile" target="_blank">IBM Mentor</a>, <a href="https://www.credly.com/badges/ea25633c-9cac-4fa6-b711-bc2087b51244/linked_in_profile" target="_blank">IBM Cloud Essentials</a>, <a href="https://www.credly.com/badges/bef456a5-3b2b-4619-bf85-da3d12cf5ffc/linked_in_profile" target="_blank">IBM Design Thinking Practitioner</a>, <a href="https://www.credly.com/badges/223dc2c4-4ba8-4868-a22b-4932c735a52c?source=linked_in_profile" target="_blank">IBM Growth Behaviors</a></p>
                  </article>
                </div>
                <div className="sidebar">
                  <article>
                    <p  className="resume-bold">Details</p>
                    <div className="contact">
                      <p className="sm">Lansing, Michigan 48911</p>
                      <p className="sm">United States</p>
                      <p className="sm"><a href="mailto:aestheticartist@gmail.com">aestheticartist@gmail.com</a></p>
                    </div>
                  </article>
                  <article>
                    <p  className="resume-bold">Links</p>
                    <p className="sm"><a href="https://www.linkedin.com/in/erin-m-keller/" target="_blank">LinkedIn</a></p>
                    <p className="sm"><a href="https://erin-m-keller.github.io/keller-portfolio/#" target="_blank">Web Portfolio</a></p>
                  </article>
                  <article>
                    <p  className="resume-bold">Skills</p>
                    <p className="sm">HTML5</p>
                    <p className="sm">CSS3</p>
                    <p className="sm">SASS</p>
                    <p className="sm">LESS</p>
                    <p className="sm">Bootstrap</p>
                    <p className="sm">Bulma CSS</p>
                    <p className="sm">Tailwind CSS</p>
                    <p className="sm">JavaScript ES6</p>
                    <p className="sm">jQuery</p>
                    <p className="sm">JSON</p>
                    <p className="sm">Ajax</p>
                    <p className="sm">Object-oriented Programming</p>
                    <p className="sm">Node</p>
                    <p className="sm">Express</p>
                    <p className="sm">MySQL</p>
                    <p className="sm">MVC Paradigm</p>
                    <p className="sm">MongoDB</p>
                    <p className="sm">Mongoose</p>
                    <p className="sm">Sequelize</p>
                    <p className="sm">Testing</p>
                    <p className="sm">Agile Development</p>
                    <p className="sm">React</p>
                    <p className="sm">Progressive Web Apps</p>
                    <p className="sm">NoSQL</p>
                    <p className="sm">Git</p>
                    <p className="sm">MERN Stack</p>
                    <p className="sm">Computer Skills</p>
                    <p className="sm">Computer Science Fundamentals</p>
                    <p className="sm">Growth Minded</p>
                  </article>
                  <article>
                    <p className="resume-bold">Hobbies</p>
                    <p className="sm">Reading, playing piano, playing board games, playing video games, listening to music, watching/reading true crime, watching anime, camping, backpacking, hiking, kayaking, cooking and baking.</p>
                  </article>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    );
  }
}
 
export default Resume;