import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
} from "firebase/firestore/lite";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { scrollContext } from "../../App";
import { auth, db } from "../../Firebase/Firebase";
import { underStandData } from "../../Firebase/FirebaseMethods";
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
  const navigat = useNavigate();
  const { user, displayLogin, setDisplayLogin } = useContext(scrollContext);
  const [data, setData] = useState([]);
  useEffect(() => {
    console.log("in protofolio useffect");
    if (!user) {
      navigat("/");
      setDisplayLogin(!displayLogin);
    } else {
      const a = fireUnderStandData();
      console.log(" a is ", a);
      setData(a);
    }
  }, []);
  const fireUnderStandData = async () => {
    const docRef = doc(db, "underStandData/", auth.currentUser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("docsnap data is ", docSnap.id);
      setData(docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  };
  const NavData = [
    { icon: <HomeIcon />, tex: "Home" },
    { icon: <EsatIcon />, tex: "VSAT" },
    { icon: <MyApplication />, tex: "My Protfolio" },
  ];
  const dat = [
    <HomeP key={0} />,
    <EsatP key={1} />,
    <MyProtofolio key={2} data={data} />,
  ];
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
