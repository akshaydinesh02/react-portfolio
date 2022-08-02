import React, { useContext } from "react";
import "./navBar.css";
import { HashLink as Link } from "react-router-hash-link";
import { SwitchContext } from "../../context";
import Toggle from "../toggle/Toggle";

const NavBar = () => {
  const menu = useContext(SwitchContext);
  console.log(menu);
  const menuOpen = menu.state.menuOpen;
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  const menuHandler = () => {
    menu.dispatch({ type: "TOGGLE-MENU" });
  };

  return (
    <div className={`n ${darkMode ? "dark" : "light"}`}>
      {/* <button className="n-icon" onClick={menuHandler}>
        <i className="fa-solid fa-bars"></i>
      </button> */}
      <nav className={`nav-wrapper mobile ${menuOpen ? "active" : "active"} `}>
        <Link className="n-menu-item" to="#intro" smooth>
          Introduction
        </Link>
        <Link className="n-menu-item" to="#about" smooth>
          About Me
        </Link>
        <Link className="n-menu-item" to="#pl" smooth>
          My work
        </Link>
        <Link className="n-menu-item" to="#contact" smooth>
          Contact
        </Link>
        <Toggle className="n-menu-item" />
      </nav>
    </div>
  );
};

export default NavBar;
