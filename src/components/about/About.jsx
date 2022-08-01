import React from "react";
import "./about.css";
import Instagram from "../../img/award.png";
import { useContext } from "react";
import { SwitchContext } from "../../context";
import { NavHashLink as Link } from "react-router-hash-link";

const About = () => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={`a ${darkMode ? "dark" : "light"}`}>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About me</h1>
        <div className="a-desc">
          A graduate from{" "}
          <strong>BMS Institute of Technology, Bangalore.</strong>
          <br />
          Seeking internship/job opportunities in front end development.
          <br />
          <br />
          Skilled in:
          <ul>
            <li>
              Font End Development
              <ul>
                <li>HTML5</li>
                <li>CSS3 incl. LESS/SASS</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
              </ul>
            </li>
            <li>
              Database
              <ul>
                <li>MySQL</li>
              </ul>
            </li>
            <li>
              Other tools
              <ul>
                <li>Git</li>
                <li>Photoshop</li>
              </ul>
            </li>
          </ul>
          <br />
          Apart from that I like to travel, practice martial arts, lift weights
          and take photos!
        </div>
        <div className="a-award">
          {/* <img src={Instagram} alt="" className="a-award-img" /> */}
          <i className="i-social-icon fa-brands fa-instagram eyz-insta"></i>
          <div className="a-award-texts">
            <h4 className="a-award-title"> Nutrition & Fitness Consultation</h4>
            <p className="a-award-desc">
              I also mentor people for nutritional and fitness needs in my free
              time! <br /> Checkout my{" "}
              <strong>
                <span className="instagram-link">instagram</span>
              </strong>{" "}
              profile to know more about it!
            </p>
          </div>
        </div>
      </div>
      <Link to="/" smooth />

      <Link to="#about" smooth />

      <Link to="#pl" smooth />

      <Link to="#contact" smooth />
    </div>
  );
};

export default About;
