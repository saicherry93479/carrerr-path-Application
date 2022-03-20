import React from "react";
import "./ThirdPageItem.css";
import pdf from "../../Utils/pdf/frontend.pdf";

const ThirdPageItem = ({ head }) => {
  return (
    // <a href={pdf}>
    <a href={pdf} className="thirdPageItem">
      <h1>{head}</h1>

      <img src="https://cmsbackend.verzeo.com/assets/upload/file-0-1624556329749.png"></img>
      <div className="thirdPageItem-Button">
        <p>Explore {head}</p>
      </div>
    </a>
    // </a>
  );
};

export default ThirdPageItem;
