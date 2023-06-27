import React, { Component } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import NodeCard from "../components/NodeCard";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPeopleGroup, faPerson, faTerminal } from '@fortawesome/free-solid-svg-icons';
import portfolioScreenshot from "../assets/images/portfolio-screenshot.png";
import recipeAppScreenshot from "../assets/images/recipe-app-screenshot.png";
import lastFmScreenshot from "../assets/images/lastfm-screenshot.png";
import pwdScreenshot from "../assets/images/password-generator-screenshot.png";
import reactCalcScreenshot from "../assets/images/react-calculator-screenshot.png";
import reactToDo from "../assets/images/react-todo-screenshot.png";
import quizScreenshot from "../assets/images/quiz-screenshot.png";
import workdayScreenshot from "../assets/images/workday-scheduler.png";
import diceGame from "../assets/images/dice-game.png";
import pokemonScreenshot from "../assets/images/pokemon-screenshot.png";
import weatherScreenshot from "../assets/images/weather-screenshot.png";
import volunteerFinderScreenshot from "../assets/images/volunteer-finder-screenshot.png";
import svgMakeScreenshot from "../assets/images/svg-maker-screenshot.png";
import readmeGeneratorScreenshot from "../assets/images/readme-generator-screenshot.png";
import noteTakerScreenshot from "../assets/images/note-taker-screenshot.png";
import empTrackerScreenshot from "../assets/images/employee-tracker-screenshot.png";
import techBlogScreenshot from "../assets/images/techBlog.png";
import metaInsightScreenshot from "../assets/images/meta-insight.png";
import pwaScreenshot from "../assets/images/pwa-screenshot.png";
import socialScreenshot from "../assets/images/social-api.png";
import ecommerceScreenshot from "../assets/images/ecommerce-screenshot.png";

class Portfolio extends Component {
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
      const cardElem = {
        initial: { opacity: 0, x: 200 },
        enter: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: 200 },
      };
    return (
      <motion.div
      initial="initial"
      animate="enter"
      exit="exit"
      variants={parentElem}
      transition={{ duration: 0.3 }}
  >
      <section className="content-section two">
            <div className="main-content">
                  <motion.div variants={childElem} transition={{ duration: 0.5 }} className="work container">
                        <h1 className="header-title">Collaborative <span className="emphasis">initiatives</span>. <FontAwesomeIcon icon={faPeopleGroup} /></h1>
                        <div className="card-list" style={{marginBottom:"2em"}}>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://meta-insight.herokuapp.com/"
                                          btnUrl="https://github.com/erin-m-keller/meta-insight"
                                          src={metaInsightScreenshot}
                                          alt="Meta-Insight"
                                          title="Meta-Insight"
                                          tags={["#html","#css","#ionic","#javascript","#mysql","express","#jawsdb","#handlebars"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/volunteer-finder/"
                                          btnUrl="https://github.com/erin-m-keller/volunteer-finder"
                                          src={volunteerFinderScreenshot}
                                          alt="Volunteer Finder"
                                          title="Volunteer Finder"
                                          tags={["#html","#css","#bulma-css","#javascript","#firebase"]} />
                              </motion.article>
                        </div>
                        <h1 className="header-title">Personal <span className="emphasis">web projects</span>. <FontAwesomeIcon icon={faPerson} /></h1>
                        <div className="card-list" style={{marginBottom:"2em"}}>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://keller-text-editor-c96daa18d32b.herokuapp.com/"
                                          btnUrl="https://github.com/erin-m-keller/keller-text-editor"
                                          src={pwaScreenshot}
                                          alt="PWA Text Editor"
                                          title="PWA Text Editor"
                                          tags={["#javascript","#css","#nodeJS","#expressJS","#pwa"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://keller-tech-blog.herokuapp.com/"
                                          btnUrl="https://github.com/erin-m-keller/keller-tech-blog"
                                          src={techBlogScreenshot}
                                          alt="Tech Blog"
                                          title="Tech Blog"
                                          tags={["#html","#css","#fomantic-ui","#javascript","#nodeJS","#expressJS","#mysql","#sequelize","#handlebars"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://keller-note-taker.herokuapp.com/"
                                          btnUrl="https://github.com/erin-m-keller/keller-note-tracker"
                                          src={noteTakerScreenshot}
                                          alt="Express.js Note Tracker"
                                          title="Express.js Note Tracker"
                                          tags={["#html","#css","#pure-css","#javascript","#nodeJS","#expressJS","#fs","#uuid"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-weather/"
                                          btnUrl="https://github.com/erin-m-keller/keller-weather"
                                          src={weatherScreenshot}
                                          alt="Weather Dashboard"
                                          title="Weather Dashboard"
                                          tags={["#html","#css","#bulma-css","#jquery","#openweather-api"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-scheduler/"
                                          btnUrl="https://github.com/erin-m-keller/keller-scheduler"
                                          src={workdayScreenshot}
                                          alt="Work Day Scheduler"
                                          title="Work Day Scheduler"
                                          tags={["#html","#css","#jquery","#day.js"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-quiz/"
                                          btnUrl="https://github.com/erin-m-keller/keller-quiz"
                                          src={quizScreenshot}
                                          alt="Coding Quiz"
                                          title="Coding Quiz"
                                          tags={["#html","#css","#bootstrap","#javascript"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-password/"
                                          btnUrl="https://github.com/erin-m-keller/keller-password"
                                          src={pwdScreenshot}
                                          alt="Password Generator"
                                          title="Password Generator"
                                          tags={["#html","#css","#javascript"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-portfolio/#/"
                                          btnUrl="https://github.com/erin-m-keller/keller-portfolio"
                                          src={portfolioScreenshot}
                                          alt="Erin Keller Portfolio - Old"
                                          title="Erin Keller Portfolio - Old"
                                          tags={["#html","#css","#javascript","#react"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-calculator/"
                                          btnUrl="https://github.com/erin-m-keller/keller-calculator"
                                          src={reactCalcScreenshot}
                                          alt="Screenshot of React Powered Calculator App"
                                          title="React Powered Calculator"
                                          tags={["#html","#css","#javascript","#react"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-pokemon/"
                                          btnUrl="https://github.com/erin-m-keller/keller-pokemon"
                                          src={pokemonScreenshot}
                                          alt="Pokémon Search Engine"
                                          title="Pokémon Search Engine"
                                          tags={["#html","#css","#bootstrap","#javascript","#react","#pokéApi"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-dice/"
                                          btnUrl="https://github.com/erin-m-keller/keller-dice"
                                          src={diceGame}
                                          alt="Dice Game"
                                          title="Dice Game"
                                          tags={["#html","#css","#bulma-css","#jQuery","#localstorage"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-todo/"
                                          btnUrl="https://github.com/erin-m-keller/keller-todo"
                                          src={reactToDo}
                                          alt="React Powered To-Do List"
                                          title="React Powered To-Do List"
                                          tags={["#html","#css","#javascript","#localstorage","#react"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-recipe/#/"
                                          btnUrl="https://github.com/erin-m-keller/keller-recipe"
                                          src={recipeAppScreenshot}
                                          alt="Recipe Grocery List Search Engine"
                                          title="Recipe Grocery List Search Engine"
                                          tags={["#html","#css","#javascript","#react","#edamam api"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <Card cardUrl="https://erin-m-keller.github.io/keller-lastfm/#/"
                                          btnUrl="https://github.com/erin-m-keller/keller-lastfm"
                                          src={lastFmScreenshot}
                                          alt="LastFM Music Artist Search Engine"
                                          title="LastFM Music Artist Search Engine"
                                          tags={["#html","#css","#bulma-css","#javascript","#react","#lastfm api"]} />
                              </motion.article>
                        </div>
                        <h1 className="header-title">Terminal <span className="emphasis">applications</span>. <FontAwesomeIcon icon={faTerminal} /></h1>
                        <div className="card-list" style={{marginBottom:"2em"}}>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <NodeCard cardUrl="javascript:void(0)"
                                          btnUrl="https://github.com/erin-m-keller/keller-social-network"
                                          src={ecommerceScreenshot}
                                          alt="Screenshot of Ecommerce API"
                                          title="Ecommerce API"
                                          tags={["#javascript","#nodeJS","#expressJS","#sequelize","#mysql"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <NodeCard cardUrl="javascript:void(0)"
                                          btnUrl="https://github.com/erin-m-keller/keller-social-network"
                                          src={socialScreenshot}
                                          alt="Screenshot of Social Network API"
                                          title="Social Network API"
                                          tags={["#javascript","#nodeJS","#expressJS","#mongoDB","#mongoose","#momentJS"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <NodeCard cardUrl="javascript:void(0)"
                                          btnUrl="https://github.com/erin-m-keller/keller-employee-tracker"
                                          src={empTrackerScreenshot}
                                          alt="Screenshot of Employee Database Manager"
                                          title="Employee Database Manager"
                                          tags={["#javascript","#nodeJS","#mysql"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <NodeCard cardUrl="javascript:void(0)"
                                          btnUrl="https://github.com/erin-m-keller/keller-svg-maker"
                                          src={svgMakeScreenshot}
                                          alt="Screenshot of SVG Maker Node.js App"
                                          title="SVG Maker Node.js"
                                          tags={["#javascript","#nodeJS","#fs","#inquirer","#jest"]} />
                              </motion.article>
                              <motion.article variants={cardElem} transition={{ duration: 1.5 }}>
                                    <NodeCard cardUrl="javascript:void(0)"
                                          btnUrl="https://github.com/erin-m-keller/keller-readme"
                                          src={readmeGeneratorScreenshot}
                                          alt="Screenshot of README Generator Node.js App"
                                          title="README Generator Node.js"
                                          tags={["#javascript","#nodeJS","#fs","#inquirer"]} />
                              </motion.article>
                        </div>
                  </motion.div>
            </div>
      </section>
      </motion.div>
    );
  }
}
 
export default Portfolio;