import React from "react";
import "./PageFourR.css";
import ReportHeader from "./ReportHeader";
const PageFourR = () => {
  return (
    <div>
      <ReportHeader
        center={true}
        head={"You were this close to getting selected"}
        subHeader={"We’ve discovered your strengths and areas of improvement"}
      />
      <p style={{ fontSize: "30vh", textAlign: "center" }}>👍</p>
    </div>
  );
};

export default PageFourR;
