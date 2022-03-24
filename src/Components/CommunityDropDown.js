import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./CommunityDropDown.css";
import LinkItem from "./LinkItem";

const CommunityDropDown = ({ linkItems, width = "250px", communi }) => {
  return (
    <div className="community-Dropdown" style={width ? { width: width } : null}>
      {linkItems.map((value, index) => (
        <LinkItem
          color={value.color}
          colorLight={value.colorLight}
          tex={value.tex}
          navigat={value.navigate}
          communi={communi}
        />
      ))}
    </div>
  );
};

export default CommunityDropDown;
