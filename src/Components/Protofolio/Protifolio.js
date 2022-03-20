import React, { useState } from "react";
import EsatIcon from "../../Images/EsatIcon";
import HomeIcon from "../../Images/HomeIcon";
import MyApplication from "../../Images/MyApplication";
import EsatP from "./EsatP";
import HomeP from "./HomeP";
import MyProtofolio from "./MyProtofolio";
import NavButton from "./NavButton";
import "./Protofolio.css";

const Protifolio = () => {
  const [current, setCurrent] = useState(0);
  const NavData = [
    { icon: <HomeIcon />, tex: "Home" },
    { icon: <EsatIcon />, tex: "VSAT" },
    { icon: <MyApplication />, tex: "My Protfolio" },
  ];
  const dat = [<HomeP key={0} />, <EsatP key={1} />, <MyProtofolio key={2} />];
  return (
    <div className="protofolio-Sec">
      <div className="protofolio-Sec-Left">
        {NavData.map((val, index) => (
          <NavButton
            icon={val.icon}
            tex={val.tex}
            current={current}
            index={index}
            setCurrent={setCurrent}
            key={index}
          />
        ))}
      </div>
      <div className="protofolio-Sec-Right">
        {dat.map((val, index) => (current === index ? val : null))}
      </div>
    </div>
  );
};

export default Protifolio;
