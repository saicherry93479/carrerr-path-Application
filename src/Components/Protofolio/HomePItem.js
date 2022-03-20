import React from "react";
import "./HomePItem.css";
import homePImage from "../../Images/ProtoFolioImageOne.png";
const HomePItem = ({ head, subHeader, index, tex }) => {
  return (
    <div className="homPItem-top">
      <div>
        <header>{head}</header>
        <p>{subHeader}</p>
        <div className="homePItem-Button">
          <p>{tex}</p>
        </div>
      </div>
      <div style={index === 1 ? { opacity: 0 } : null}>
        <img src={homePImage}></img>
      </div>
    </div>
  );
};

export default HomePItem;
