import React from "react";
import "./MyProtofolioEducation.css";
const MyProtofolioEducationItem = ({ head, subHead }) => {
  return (
    <div className="myProtofolioEducationItem">
      <header>{head}</header>
      <p>{subHead}</p>
    </div>
  );
};

const MyProtofolioEducation = () => {
  return (
    <div className="myProtofolioEducation">
      <MyProtofolioEducationItem head={"X Grade"} subHead={"9.5/10"} />
      <MyProtofolioEducationItem head={"X Grade"} subHead={"9.5/10"} />
      <MyProtofolioEducationItem head={"X Grade"} subHead={"9.5/10"} />
    </div>
  );
};

export default MyProtofolioEducation;
