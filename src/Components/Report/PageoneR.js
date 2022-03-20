import React from "react";
import RoundTwoAnalytics from "../../Images/RoundTwoAnalytics";
import "./PageOne.css";
import ReportHeader from "./ReportHeader";

const data = [
  { icon: <RoundTwoAnalytics />, data: "PROBLEM SOLVING" },
  { icon: <RoundTwoAnalytics />, data: "PROBLEM SOLVING" },
  { icon: <RoundTwoAnalytics />, data: "PROBLEM SOLVING" },
  { icon: <RoundTwoAnalytics />, data: "PROBLEM SOLVING" },
  ,
  { icon: <RoundTwoAnalytics />, data: "PROBLEM SOLVING" },
];
const PageoneR = () => {
  return (
    <div>
      <ReportHeader
        head={"Business Operations Career Track"}
        subHeader={
          "We evaluated you across 5 different subskills that are important to succeed as a Business Operations intern at high growth companies."
        }
      />
      <div className="pageOneRInfo">
        {data.map((val, index) => (
          <div className="pageOneRInfoItem">
            {val.icon}
            <p>{val.data}</p>
          </div>
        ))}
      </div>
     
    </div>
  );
};

export default PageoneR;
