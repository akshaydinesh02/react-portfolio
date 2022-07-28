import React from "react";
import "./about.css";
import Award from "../../img/award.png";
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
        <p className="a-sub">This is a long sub title</p>
        <p className="a-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo adipisci
          nisi aspernatur voluptate laborum dolor ducimus, at eveniet eligendi
          placeat quam, quia hic doloribus corporis facere sed harum quisquam
          ut!
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="award-title">Award heading test</h4>
            <p className="a-award-desc">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae
              labore culpa esse
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
