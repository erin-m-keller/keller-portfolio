import React, { Component } from "react";
import selfImg from "../assets/images/erin.jpeg";
 
class Home extends Component {
  render() {
    return (
      <section className="content-section two">
        <div className="main-content">
          <div className="home">
            <div className="hero">
                <h1 className="header-title">Hi, I'm <span className="emphasis">Erin Keller</span>.</h1>
                <div className="img-container">
                    <img src={selfImg} alt="A photo of Erin Keller" />
                </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
 
export default Home;