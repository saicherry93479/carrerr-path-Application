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
      <MyProtofolioEducationItem head={"XII Grade"} subHead={"9.2/10"} />
      <MyProtofolioEducationItem head={"UG Grade"} subHead={"3.79/5"} />
    </div>
  );
};

export default MyProtofolioEducation;
