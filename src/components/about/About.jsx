import React from "react";
import "./about.css";
import Instagram from "../../img/award.png";
import { useContext } from "react";
import { SwitchContext } from "../../context";

const About = () => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;
  return (
    <div id="about" className={`a ${darkMode ? "dark" : "light"}`}>
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://i.imgur.com/iRUQq7b.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title primary-heading">About me</h1>
        <div className="a-desc">
          A graduate from{" "}
          <strong>BMS Institute of Technology, Bangalore.</strong>
          <br />
          Seeking internship/job opportunities in front end development.
          <br />
          <br />
          <div className="tertiary-heading">Skilled in:</div>
          <ul>
            <li>
              <span className="li-header">Font End Development</span>
              <ul>
                <li>HTML5</li>
                <li>CSS3 incl. LESS/SASS</li>
                <li>JavaScript (ES6+)</li>
                <li>React</li>
              </ul>
            </li>
            <li>
              <span className="li-header">Database</span>
              <ul>
                <li>MySQL</li>
              </ul>
            </li>
            <li>
              <span className="li-header">Other tools</span>
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
          {/* <i class="a-icon-dumbbell fa-solid fa-dumbbell"></i> */}
          <i class="a-icon-dumbbell fa-solid fa-heart-pulse"></i>
          {/* <i class="a-icon-dumbbell fa-solid fa-heart"></i> */}
          {/* <i className="i-social-icon fa-brands fa-instagram eyz-insta"></i> */}
          <div className="a-award-texts">
            <h4 className="a-award-title tertiary-heading">
              Nutrition & Fitness Consultation
            </h4>
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
    </div>
  );
};

export default About;
