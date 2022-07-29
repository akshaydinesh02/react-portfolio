import React, { useRef } from "react";
import "./button.css";

const Button = React.forwardRef((props, ref) => {
  return <button className={props.className}>{props.name}</button>;
});

export default Button;
