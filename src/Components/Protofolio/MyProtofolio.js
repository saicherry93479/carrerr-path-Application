import React, { useEffect } from "react";
import "./MyPortfolio.css";
import MyProtofolioAbout from "./MyProtofolioAbout";
import MyProtofolioEducation from "./MyProtofolioEducation";
import MyProtoFolioImages from "./MyProtoFolioImages";

const MyProtofolio = ({ data }) => {
  useEffect(() => {
    console.log("data is ", data);
  }, []);
  return (
    <div className="myProtfolio-Sec">
      <div className="myProtfolio-Sec-Header">
        <p>My Portfolio</p>
      </div>
      <p>
        We have populated your profile based on the information you have shared
        with us in your registration form.
      </p>
      <header>ABOUT</header>
      <MyProtofolioAbout data={data} />
      <header>EDUCATION</header>
      <MyProtofolioEducation />
      <MyProtoFolioImages data={data} />
    </div>
  );
};

export default MyProtofolio;
