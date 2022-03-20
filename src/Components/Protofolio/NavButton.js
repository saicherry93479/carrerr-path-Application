import React from "react";
import "./NavButton.css";
const NavButton = ({ icon, tex, current, index, setCurrent }) => {
  return (
    <div
      onClick={() => setCurrent(index)}
      className="protofolio-Sec-Left-Item"
      style={current === index ? { backgroundColor: "#eee5fd" } : null}
    >
      {icon}
      <p>{tex}</p>
    </div>
  );
};

export default NavButton;
