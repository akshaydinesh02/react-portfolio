import "./toggle.css";
import { useContext } from "react";
import { SwitchContext } from "../../context";

const Toggle = () => {
  const menu = useContext(SwitchContext);
  const menuOpen = menu.state.menuOpen;
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "TOGGLE-THEME" });
  };
  return (
    <div className={`t ${darkMode ? "dark" : "light"}`}>
      <button
        className={`t-button ${menuOpen ? "active" : "inactive"}`}
        onClick={handleClick}
      >
        <i className="fa-solid fa-circle-half-stroke t-icon noselect"></i>
      </button>
    </div>
  );
};

export default Toggle;
