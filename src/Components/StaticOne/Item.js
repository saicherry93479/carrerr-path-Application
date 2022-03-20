import React from "react";
import "./Item.css";
import DevImage from "../../Images/DevImage";
const Item = ({ head, subHead }) => {
  return (
    <div className="staticOneItem ">
      <DevImage />
      <div>
        <header>{head}</header>
        <p>{subHead}</p>
      </div>
    </div>
  );
};

export default Item;
