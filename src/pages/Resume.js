import React, { Component } from "react";
import profileImg from "../assets/images/erin.jpeg";
import resume from "../assets/documents/erin-resume.pdf";
 
class Resume extends Component {
  render() {
    return (
      <div className="content-section four">
        <div className="main-content">
          <div className="resume">
            <h2>Resume</h2>
            <div className="resume-form">
              <div className="main">
                <div className="edu-exp">
                  <h3 className="resume-title">Erin Keller<span className="resume-subtitle">Full Stack Developer</span></h3>
                  <form action={resume} target="_blank">
                    <input type="submit" value="Download" className="resume-btn" />
                  </form>
                  <article className="objective">
                      <h4 className="resume-bold">Profile</h4>
                      <p className="sm">
                        Technically proficient and committed developer who maintains cutting-edge skills and industry knowledge. Experience coding responsive websites 
                        and web applications using HTML5, CSS, LESS, SASS, JavaScript, jQuery, ReactJS, Node.js, and MongoDB.
                      </p>
                  </article>
                  <article>
                    <div>
                      <h4 className="resume-bold">Employment History</h4>
                      <p className="resume-bold">Learning Developer, IBM, Lansing<span>May 2013 - Present</span></p>
                      <ul className="resume-list">
                        <li className="sm">Works in an agile environment with weekly stand-ups, tracks issues in Jira, and conducts sprint planning and retrospectives every two weeks.</li>
                        <li className="sm">Rebuilt 5-year-old PHP application in React with full user experience redesign (Leadership Academy).</li>
                        <li className="sm">Refactored legacy HTML to meet industry standards and Accessibility compliance.</li>
                        <li className="sm">Utilized HTML, CSS, and JavaScript to create 100+ responsive pages for leadership, management and executive development.</li>
                        <li className="sm">Produced and assisted in the deployment of 10+ various web applications for our HR clients.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Student Programmer, Lansing Community College, Lansing<span>May 2012 - May 2013</span></p>
                      <ul className="resume-list">
                        <li className="sm">Analyzed business processes to develop customized solutions.</li>
                        <li className="sm">Used PL/SQL queries to manage databases.</li>
                        <li className="sm">Developed applications in Application Express.</li>
                        <li className="sm">Installed new applications/versions.</li>
                        <li className="sm">Assisted in code reviews.</li>
                        <li className="sm">Worked in an agile environment.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Front-end Developer, Tripper's, Lansing<span>Sep 2010 - Sep 2011</span></p>
                      <ul className="resume-list">
                        <li className="sm">Designed and developed the company website using accessible design standards.</li>
                        <li className="sm">Developed and maintained an interactive menu on the site.</li>
                        <li className="sm">Managed the web application for the manager, including handling patron correspondance.</li>
                        <li className="sm">Experience with HTML, CSS, JavaScript and working with content management systems (CMS).</li>
                      </ul>
                    </div>
                    <div>
                      <p className="resume-bold">Shift Leader II, Speedway LLC, Lansing<span>Feb 2006 - Sep 2010</span></p>
                      <ul className="resume-list">
                        <li className="sm">Provided leadership and direction for employees.</li>
                        <li className="sm">Supervised daily tasks to drive productivity and efficiency.</li>
                        <li className="sm">Implemented training processes for newly hired employees.</li>
                        <li className="sm">Handled weekly inventory control to replenish stock and maintain costs.</li>
                        <li className="sm">Upheld food safety standards at all time.</li>
                      </ul>
                    </div>
                  </article>
                  <article>
                    <h4 className="resume-bold">Education</h4>
                    <div>
                      <p className="resume-bold">Lansing Community College</p>
                      <p className="sm">Associate's Degree: Computer Programmer/Business Analyst</p>
                    </div>
                    <div>
                      <p className="resume-bold">Sault Area High School</p>
                      <p className="sm">Diploma</p>
                      <p className="sm">Certification: Novell Networking</p>
                    </div>
                  </article>
                  <article>
                    <h4 className="resume-bold">Badges</h4>
                    <p className="sm"><a href="https://www.credly.com/badges/e030c825-b054-4fcf-a055-33f25bfea5a3/linked_in_profile" target="_blank">Python for Data Science</a>, <a href="https://www.credly.com/badges/bde1d498-b46f-414a-8bcc-f8943d15c7a8?source=linked_in_profile" target="_blank">Data Science Foundations - Level 1</a>, <a href="https://www.credly.com/badges/5f6891fb-4ba4-41a6-afbe-b80f39218f3a?source=linked_in_profile" target="_blank">IBM Carbon Design Systems Developer Essentials - React</a>, <a href="https://www.credly.com/badges/c08b7c46-c03d-4e33-8849-930480d37792?source=linked_in_profile" target="_blank">IBM Virtual Collaborator</a>, <a href="https://www.credly.com/badges/953104f8-84ef-4d73-b2c0-4880e191278a/linked_in_profile" target="_blank">IBM Digital Learning Transformation</a>, <a href="https://www.credly.com/badges/452993ff-74d7-4569-8267-e0118c9c0f97/linked_in_profile" target="_blank">IBM Agile Explorer</a>, <a href="https://www.credly.com/badges/becc3448-2a5a-4bbd-8282-dee30de55b62/linked_in_profile" target="_blank">Cognitive Practitioner</a>, <a href="https://www.credly.com/badges/c448c084-95d6-4947-bb9a-99f857e6adde/linked_in_profile" target="_blank">Human Resources in a Cognitive Era - Essentials</a>, <a href="https://www.credly.com/badges/9f4cc05e-0e1a-42d9-a0ea-cbcc63571401/linked_in_profile" target="_blank">IBM Mentor</a>, <a href="https://www.credly.com/badges/ea25633c-9cac-4fa6-b711-bc2087b51244/linked_in_profile" target="_blank">IBM Cloud Essentials</a>, <a href="https://www.credly.com/badges/bef456a5-3b2b-4619-bf85-da3d12cf5ffc/linked_in_profile" target="_blank">IBM Design Thinking Practitioner</a>, <a href="https://www.credly.com/badges/223dc2c4-4ba8-4868-a22b-4932c735a52c?source=linked_in_profile" target="_blank">IBM Growth Behaviors</a></p>
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
                    <p className="sm">JavaScript</p>
                    <p className="sm">jQuery</p>
                    <p className="sm">React JS</p>
                    <p className="sm">Node.js</p>
                    <p className="sm">MySQL</p>
                    <p className="sm">MongoDB</p>
                    <p className="sm">Git</p>
                    <p className="sm">Microsoft Office Suite</p>
                    <p className="sm">Adobe Suite</p>
                    <p className="sm">Interpersonal Skills</p>
                    <p className="sm">Creativity</p>
                    <p className="sm">Problem Solving</p>
                    <p className="sm">Decision Making</p>
                    <p className="sm">Computer Skills</p>
                    <p className="sm">Effective Time Management</p>
                    <p className="sm">Ability to Multitask</p>
                    <p className="sm">Growth Minded</p>
                    <p className="sm">Fast Learner</p>
                    <p className="sm">Adaptability</p>
                    <p className="sm">Customer Service</p>
                    <p className="sm">Ability to Work Under Pressure</p>
                    <p className="sm">Ability to Work in a Team</p>
                    <p className="sm">Communication Skills</p>
                  </article>
                  <article>
                    <p className="resume-bold">Hobbies</p>
                    <p className="sm">Reading, playing piano, playing board games, playing video games, listening to music, watching/reading true crime, watching anime, camping, backpacking, hiking, kayaking, cooking and baking.</p>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 
export default Resume;