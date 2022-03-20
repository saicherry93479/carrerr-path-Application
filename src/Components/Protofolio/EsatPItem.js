import React from "react";
import { useNavigate } from "react-router-dom";
import "./EsatPItem.css";

const EsatPItem = ({ icon, head, subHeader, appeared }) => {
  const navigate = useNavigate();
  return (
    <div className="EsatP-Item">
      {icon}
      <div className="EsatP-Item-Info">
        <p>{head}</p>
        <p>{subHeader}</p>
      </div>
      {appeared ? (
        <div className="EsatP-Button" onClick={() => navigate("myReport")}>
          <p>view my report</p>
        </div>
      ) : (
        <p className="EsatP-not">not appeared</p>
      )}
    </div>
  );
};

export default EsatPItem;
