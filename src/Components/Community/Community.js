import { collection, getDocs, orderBy, query } from "firebase/firestore/lite";
import React, {
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from "react";
import { db } from "../../Firebase/Firebase";
import EsatIcon from "../../Images/EsatIcon";
import HomeIcon from "../../Images/HomeIcon";
import MyApplication from "../../Images/MyApplication";
import NavButton from "../Protofolio/NavButton";
import "./Community.css";
import Event from "./Event";
import HomeC from "./HomeC";
import PostC from "./PostC";

export const dataContext = createContext();

const Community = () => {
  const [data, setData] = useState([]);

  const [current, setCurrent] = useState(0);

  const dataQu = async () => {
    setData([]);
    const citiesRef = collection(db, "questions");
    const q = query(citiesRef, orderBy("timestamp"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots

      setData((p) => [...p, { ...doc.data(), uniqId: doc.id }]);
    });
  };
  useLayoutEffect(() => {
    dataQu();
  }, [current]);

  const NavDataCommunity = [
    { icon: <HomeIcon />, tex: "Home" },
    { icon: <EsatIcon />, tex: "Post Question" },
    { icon: <MyApplication />, tex: "Events" },
  ];
  const datCommunity = [
    <HomeC key={0} setCurrent={setCurrent} />,
    <PostC key={1} setCurrent={setCurrent} />,
    <Event key={2} setCurrent={setCurrent} />,
  ];
  return (
    <dataContext.Provider value={{ data, setData }}>
      <div className="community-Sec">
        <div className="community-Sec-left">
          {NavDataCommunity.map((val, index) => (
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
        <div className="community-Sec-right">
          {datCommunity.map((val, index) => (current === index ? val : null))}
        </div>
      </div>
    </dataContext.Provider>
  );
};

export default Community;
