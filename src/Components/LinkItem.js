import React from "react";
import { useNavigate } from "react-router-dom";

const LinkItem = ({ colorLight, color, tex, navigat }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => {
        console.log("navigate is ", navigat);
        navigate(navigat);
      }}
      className="linkItem"
    >
      <div style={{ backgroundColor: colorLight }}>
        <i class="fa-solid fa-plus" style={{ color: color }}></i>
      </div>
      <p>{tex}</p>
      <i
        class="fa-solid fa-arrow-right link-item-right"
        style={{ color: color }}
      ></i>
    </div>
  );
};

export default LinkItem;
