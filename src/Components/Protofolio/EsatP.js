import React from "react";
import { roundOneData, roundTwoData } from "../../Utils/utils";
import EsatPItem from "./EsatPItem";
import "./EsatP.css";

const EsatP = () => {
  return (
    <div className="Estp-Sec">
      <div className="header">
        <p>Round 2 Result</p>
      </div>
      {roundTwoData.map((value, index) => (
        <EsatPItem
          head={value.head}
          subHeader={value.subHeader}
          icon={value.icon}
          appeared={value.appeared}
        />
      ))}
      <div className="header">
        <p>Round 1 Result</p>
      </div>
      {roundOneData.map((value, index) => (
        <EsatPItem
          head={value.head}
          subHeader={value.subHeader}
          icon={value.icon}
          appeared={value.appeared}
        />
      ))}
    </div>
  );
};

export default EsatP;
