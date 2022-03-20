import React from "react";
import "./PageHeader.css";
const PageHeader = ({ head, subhead }) => {
  return (
    <div className="underStand-PageHeader">
      <p>{head}</p>
      <p>{subhead}</p>
    </div>
  );
};

export default PageHeader;
