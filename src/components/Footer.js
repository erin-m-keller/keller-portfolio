import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithubAlt, faFacebook, faSquareInstagram, faDiscord } from '@fortawesome/free-brands-svg-icons';
 
class Footer extends Component {
  render() {
    let currentTheme = this.props.currentTheme;
    return (
        <footer className="footer">
            <div className="vertical-center">
                <h4>&copy; 2023 Erin Keller</h4>
                <div className={`social-icons ${currentTheme === 'light' ? 'light' : 'dark'}`}>
                    <a href="https://www.linkedin.com/in/erin-m-keller/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://github.com/erin-m-keller" target="_blank">
                        <FontAwesomeIcon icon={faGithubAlt} />
                    </a>
                    <a href="https://www.facebook.com/erinkeller86/" target="_blank">
                        <FontAwesomeIcon icon={faFacebook} />
                    </a>
                    <a href="https://www.instagram.com/tsunderestrike/" target="_blank">
                        <FontAwesomeIcon icon={faSquareInstagram} />
                    </a>
                    <a href="https://www.discordapp.com/users/146712003438837760" target="_blank">
                        <FontAwesomeIcon icon={faDiscord} />
                    </a>
                </div>
            </div>
        </footer>
    );
  }
}
 
export default Footer;