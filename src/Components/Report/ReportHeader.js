import React from "react";
import "./ReportHeader.css";
const ReportHeader = ({ head, subHeader, center = false }) => {
  return (
    <div
      className="reportHeader"
      style={center ? { textAlign: "center" } : null}
    >
      <header>{head}</header>
      <p>{subHeader}</p>
    </div>
  );
};

export default ReportHeader;
