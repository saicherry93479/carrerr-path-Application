import React from "react";

const ProtofolioAboutItem = ({ head, subHeader }) => {
  return (
    <div className="myProtofolioAboutItem">
      <header>{head}</header>
      <p>{subHeader}</p>
    </div>
  );
};

export default ProtofolioAboutItem;
