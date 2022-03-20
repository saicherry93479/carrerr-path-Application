import React from "react";
import ReportHeader from "./ReportHeader";
import "./PageTwoR.css";

const PageTwoR = () => {
  return (
    <div className="pageTwoR">
      <ReportHeader
        head={"Your performance"}
        subHeader={
          "Your participation in ESAT clearly exhibits your drive and commitment to get an internship"
        }
      />
      <p className="pageTwoR-top">
        You attempted <span>60 questions</span> across <span>4</span>sections in
        <span> 58 minutes 13 seconds</span>
      </p>
      <div className="pageTwoR-bottom">
        <p> ⭐ You solved a question every 58 seconds</p>
      </div>
    </div>
  );
};

export default PageTwoR;
