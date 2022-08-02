import React, { useRef } from "react";
import "./intro.css";
import Me from "../../img/me-final.png";
import { useContext } from "react";
import { SwitchContext } from "../../context";
import { HashLink } from "react-router-hash-link";

const Intro = () => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  const linksObject = {
    linkedin: "https://www.linkedin.com/in/akshaydinesh02/",
    github: "https://github.com/akshay-dinesh/",
    instagram: "https://www.instagram.com/akshay.dinesh/",
  };

  return (
    <div>
      <div id="intro" className={`i ${darkMode ? "dark" : "light"}`}>
        <div className="i-left">
          <div className="i-left-wrapper">
            <h2 className="i-intro">Hello, My name is</h2>
            <h2 className="i-name">Akshay Dinesh</h2>
            <div className="i-title">
              <div className="i-title-wrapper">
                <div className="i-title-item">Front End Developer</div>
              </div>
            </div>
            <p className="i-desc">
              I develop Websites & Web-Apps using React JS.
            </p>
            <div className="i-social">
              <a href={linksObject.linkedin} target="_blank" rel="noreferrer">
                <i className="i-social-icon fa-brands fa-linkedin-in"></i>
              </a>
              <a href={linksObject.github} target="_blank" rel="noreferrer">
                <i className="i-social-icon fa-brands fa-github"></i>
              </a>
              <a href={linksObject.instagram} target="_blank" rel="noreferrer">
                <i className="i-social-icon fa-brands fa-instagram"></i>
              </a>
            </div>
            <div className="i-cta">
              <HashLink to="" className="btn btn-resume" name="Resume">
                Resume
              </HashLink>
              <HashLink to="#contact" className="btn btn-contact" smooth>
                Contact
              </HashLink>
            </div>
          </div>
          <svg
            width="75"
            height="75"
            viewBox="0 0 75 75"
            fill="none"
            stroke="black"
            className="i-scroll"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="scroll">
              <path
                id="Vector"
                d="M40.5 15L34.5 9L28.5 15"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                id="Vector_2"
                d="M28.5 24L34.5 30L40.5 24"
                strokeWidth="3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group">
                <path
                  id="Vector_3"
                  d="M9 37.5H60"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <path
                id="Vector_4"
                d="M34.5 27V9"
                strokeWidth="2.9895"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="Group_2">
                <path
                  id="Vector_5"
                  d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5859 1.5 60 12.918 60 27C60 29.8906 60 45.1094 60 48C60 62.082 48.5859 73.5 34.5 73.5C20.418 73.5 9 62.082 9 48C9 45.1094 9 29.8906 9 27Z"
                  strokeWidth="3"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </g>
          </svg>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
