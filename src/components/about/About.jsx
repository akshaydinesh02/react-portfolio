import React from "react";
import "./about.css";
import Instagram from "../../img/award.png";
import { useContext } from "react";
import { ThemeContext } from "../../context";

const About = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  console.log(darkMode);
  return (
    <div className={`a ${darkMode ? "dark" : "light"}`}>
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
        {/* <p className="a-sub">This is a long sub title</p> */}
        <div className="a-desc">
          A graduate from{" "}
          <strong>BMS Institute of Technology, Bangalore.</strong>
          <br />
          Seeking internship/job opportunities in front end development.
          <br />
          <br />
          Skilled in
          <ul>
            <li>HTML5</li>
            <li>CSS3 </li>
            <li>JavaScript (ES6)</li>
            <li>React & Angular frameworks</li>
          </ul>
          <br />
          Apart from that I like to travel, practice martial arts, lift weights
          and take photos!
        </div>
        <div className="a-award">
          {/* <img src={Instagram} alt="" className="a-award-img" /> */}
          <i className="i-social-icon fa-brands fa-instagram eyz-insta"></i>
          <div className="a-award-texts">
            <h4 className="award-title"> Some extra information</h4>
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
