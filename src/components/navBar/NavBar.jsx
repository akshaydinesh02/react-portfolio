import React, { useContext } from "react";
import "./navBar.css";
import { HashLink as Link } from "react-router-hash-link";
import { SwitchContext } from "../../context";

const NavBar = () => {
  const menu = useContext(SwitchContext);
  console.log(menu);
  const menuOpen = menu.state.menuOpen;

  const menuHandler = () => {
    menu.dispatch({ type: "TOGGLE-MENU" });
  };

  return (
    <div className="n">
      <button className="n-icon" onClick={menuHandler}>
        <i className="fa-solid fa-bars"></i>
      </button>
      <nav className={`nav-wrapper ${menuOpen ? "active" : ""}`}>
        <Link className="menu__item" to="#intro" smooth>
          Introduction
        </Link>
        <Link className="menu__item" to="#about" smooth>
          About Me
        </Link>
        <Link className="menu__item" to="#pl" smooth>
          My work
        </Link>
        <Link className="menu__item" to="#contact" smooth>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default NavBar;
