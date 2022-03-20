import React, { useContext } from "react";
import { scrollContext } from "../../App";
import { staticOneData } from "../../Utils/utils";
import "./HomeStaticOne.css";
import Item from "./Item";
const HomeStaticOne = () => {
  const { displayLogin, displayUnderStand } = useContext(scrollContext);
  return (
    <div>
      <div className="topStaticOne">
        <img src="https://cdn.careers.tufts.edu/wp-content/uploads/sites/100/2020/07/Students.png?v=3280"></img>
      </div>
      <header className="header">Explore</header>
      {!displayLogin && !displayUnderStand && (
        <div className="topStaticTwo">
          {[0, 1, 2, 3].map((value, index) => (
            <Item
              key={index}
              head={staticOneData[value].head}
              subHead={staticOneData[value].subHeading}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeStaticOne;
