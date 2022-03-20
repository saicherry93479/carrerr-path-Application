import React, { useEffect, useLayoutEffect, useState } from "react";
import { pageThreeBottomData, pageThreeTopData } from "../../Utils/utils";
import "./PageThreeR.css";
import ReportHeader from "./ReportHeader";
const colorsData = ["#42BD7D", "#FFA50B", "#D65C6A", "#DEDEDE"];
const PageThreeRTopItem = ({ tex, color }) => {
  return (
    <div className="pageThreeTopItem">
      <p>{tex}</p>
      <div style={{ backgroundColor: color }}></div>
    </div>
  );
};
const PageThreeR = () => {
  return (
    <div>
      <ReportHeader
        head={"Your performance vs top 1%ile"}
        subHeader={
          "You got some correct, some incorrect & some partially correct answers in the entire test."
        }
      />
      <div className="pageThreeRTop">
        {pageThreeTopData.map((val, index) => (
          <PageThreeRTopItem key={index} tex={val.tex} color={val.color} />
        ))}
      </div>
      <div className="pageThreeRBotttom">
        {pageThreeBottomData.map((val, index) => (
          <PageThreeRBotttomItem
            head={val.head}
            subHead={val.subHead}
            data={val.data}
          />
        ))}
      </div>
    </div>
  );
};

const PageThreeRBotttomItem = ({ head, subHead, data }) => {
  const [wid, setWidth] = useState([]);
  useEffect(() => {
    data.map((val) => setWidth((p) => [...p, (val * 800) / 100]));
  }, []);
  return (
    <div className="pageThreeRBotttomItem">
      <header>{head}</header>
      <p>{subHead}</p>
      {data.map((val, index) => (
        <div
          key={index}
          style={{
            backgroundColor: colorsData[index],
            width: wid[index],
          }}
          className="pageThreeRBottomItemItem"
        >
          <p style={{ marginRight: "15px" }}>{val}</p>
        </div>
      ))}
    </div>
  );
};
export default PageThreeR;
