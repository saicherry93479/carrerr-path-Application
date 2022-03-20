import React from "react";
import "./GoogleButton.css";
import googleImage from "../Images/GoogleImage.png";
const GoogleButtonF = ({ tex }) => {
  return (
    <div className="googleButton">
      <img src={googleImage} style={{ height: "20px", width: "20px" }}></img>

      <p>{tex}</p>
    </div>
  );
};

export default GoogleButtonF;
