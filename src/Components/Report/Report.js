import React, { useContext, useEffect, useState } from "react";
import { scrollContext } from "../../App";
import { PagesR } from "../../Utils/utils";
import PageOne from "../Understand/PageOne";
import PageoneR from "./PageoneR";
import PageRBottom from "./PageRBottom";
import PageTwoR from "./PageTwoR";
import "./Report.css";
import ReportHeader from "./ReportHeader";

const Report = () => {
  const [current, setCurrent] = useState(0);
  const { setHeaderDisplay, setFooterDisplay, headeDisplay } =
    useContext(scrollContext);
  useEffect(() => {
    setHeaderDisplay((p) => !p);
    setFooterDisplay((p) => !p);
    return () => {
      setHeaderDisplay((p) => !p);
      setFooterDisplay((p) => !p);
    };
  }, []);
  return (
    <div className="report-Sec">
      <div className="report-Info">
        {PagesR.map((val, index) => (current === index ? val : null))}

        {current === 0 ? (
          <div className="pageOneRButton" onClick={() => setCurrent(1)}>
            <p>see my performance in Round 2</p>
          </div>
        ) : (
          <PageRBottom setCurrent={setCurrent} current={current} />
        )}
      </div>
    </div>
  );
};

export default Report;
