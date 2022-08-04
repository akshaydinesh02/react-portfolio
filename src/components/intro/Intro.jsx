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
    resume:
      "https://docs.google.com/document/d/1v5NBV0UymTAKIglEMgZ5nwMVF_cOFKV_/edit?usp=sharing&ouid=117010981329994470499&rtpof=true&sd=true",
  };

  return (
    <>
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
              <a
                href={linksObject.resume}
                className="btn btn-resume"
                name="Resume"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
              <HashLink to="#contact" className="btn btn-contact" smooth>
                Contact
              </HashLink>
            </div>
          </div>
        </div>
        <div className="i-right">
          <div className="i-bg"></div>
          <img src={Me} alt="" className="i-img" />
        </div>
      </div>
    </>
  );
};

export default Intro;
