import React, { useRef } from "react";
import "./button.css";

const Button = (props) => {
  console.log(props);
  const contactRef = useRef(null);

  return <button className={props.className}>{props.name}</button>;
};

export default Button;
