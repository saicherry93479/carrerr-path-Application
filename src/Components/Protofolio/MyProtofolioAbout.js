import React, { useLayoutEffect, useState } from "react";
import "./MyProtofolioAbout.css";
import ProtofolioAboutItem from "./ProtofolioAboutItem";

const MyProtofolioAbout = ({ data }) => {
  const [skills, setSkills] = useState("");
  const [departs, setDeparts] = useState("");

  useLayoutEffect(() => {
    var str = "";
    data.technologies.forEach((val, index) => {
      str += val + " , ";
    });
    setSkills(str);
    var strOne = "";
    data.departments.forEach((val, index) => {
      strOne += val + " , ";
    });
    setDeparts(strOne);
  }, []);
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
    { head: "skills", subHeader: skills },
    { head: "Departments", subHeader: departs },
  ];
  return (
    <div className="myProtofolio-About">
      {aboutData.map((val, index) => (
        <ProtofolioAboutItem head={val.head} subHeader={val.subHeader} />
      ))}
    </div>
  );
};

export default MyProtofolioAbout;
