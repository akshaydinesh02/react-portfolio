import "./product.css";

import React, { useContext } from "react";
import { SwitchContext } from "../../context";

const Product = ({ img, link }) => {
  const theme = useContext(SwitchContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className={`p ${darkMode ? "dark" : "light"}`}>
      <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Product;
