import React, { useContext } from "react";
import "./navBar.css";
import { HashLink as Link } from "react-router-hash-link";
import { SwitchContext } from "../../context";
import Toggle from "../toggle/Toggle";

const NavBar = () => {
  const menu = useContext(SwitchContext);
  const menuOpen = menu.state.menuOpen;
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  const menuHandler = (e) => {
    menu.dispatch({
      type: "TOGGLE-MENU",
    });
  };

  const menuCloseHandler = () => {
    menu.dispatch({ type: "FALSE" });
  };

  return (
    <div className={`n ${darkMode ? "dark" : "light"} noselect`}>
      <nav className={`nav-wrapper ${menuOpen ? "active" : "inactive"} `}>
        <button className={`n-icon `} onClick={menuHandler}>
          <i className="n-icon-hamburger fa-solid fa-bars"></i>
        </button>
        <div className="nav-bar">
          <Link
            className="n-menu-item"
            to="#intro"
            onClick={menuCloseHandler}
            smooth
          >
            Introduction
          </Link>
          <Link
            className="n-menu-item"
            to="#about"
            onClick={menuCloseHandler}
            smooth
          >
            About Me
          </Link>
          <Link
            className="n-menu-item"
            to="#pl"
            onClick={menuCloseHandler}
            smooth
          >
            My work
          </Link>
          <Link
            className="n-menu-item"
            to="#contact"
            onClick={menuCloseHandler}
            smooth
          >
            Contact
          </Link>
        </div>
      </nav>
      <Toggle />
    </div>
  );
};

export default NavBar;
