import React from "react";
import "./MyPortfolio.css";
import MyProtofolioAbout from "./MyProtofolioAbout";
import MyProtofolioEducation from "./MyProtofolioEducation";

const MyProtofolio = () => {
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
      <MyProtofolioAbout />
      <header>EDUCATION</header>
      <MyProtofolioEducation />
    </div>
  );
};

export default MyProtofolio;
