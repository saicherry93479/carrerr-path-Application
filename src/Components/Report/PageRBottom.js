import React from "react";
import { useNavigate } from "react-router-dom";
import { PagesR } from "../../Utils/utils";
import "./PageRBottom.css";
const PageRBottom = ({ setCurrent, current }) => {
  const navigate = useNavigate();
  return (
    <div className="pageRBottom">
      <div onClick={() => setCurrent((p) => (p > 0 ? p - 1 : p))}>
        <p>Back</p>
      </div>
      {current < 3 ? (
        <div
          onClick={() => setCurrent((p) => (p < PagesR.length - 1 ? p + 1 : p))}
        >
          <p>next</p>
        </div>
      ) : (
        <div onClick={() => navigate("/protofolio")}>
          <p>Go To Protofolio</p>
        </div>
      )}
    </div>
  );
};

export default PageRBottom;
