import React from "react";
import "./Button.css";
const Button = ({ tex, handler }) => {
  return (
    <div className="signInButton" onClick={handler}>
      <p>{tex}</p>
    </div>
  );
};

export default Button;
