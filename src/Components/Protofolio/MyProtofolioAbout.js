import React from "react";
import "./MyProtofolioAbout.css";
import ProtofolioAboutItem from "./ProtofolioAboutItem";

const aboutData = [
  { head: "Name", subHeader: "Sai Charan Lode" },
  { head: "Programme", subHeader: "Bachelor of Technology (B.Tech)" },
  {
    head: "College",
    subHeader:
      "Sreenidhi Institute Of Science & Technology, Rangareddy, Telangana",
  },
  { head: "Graduation Year", subHeader: "2023" },
  { head: "Intersts", subHeader: "computers,puzzles,automation" },
  { head: "Skills", subHeader: "coding,data science,cloud" },
];

const MyProtofolioAbout = () => {
  return (
    <div className="myProtofolio-About">
      {aboutData.map((val, index) => (
        <ProtofolioAboutItem head={val.head} subHeader={val.subHeader} />
      ))}
    </div>
  );
};

export default MyProtofolioAbout;
