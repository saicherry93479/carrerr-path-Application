import React, { useContext, useEffect, useState } from "react";
import { Colors } from "../../Utils/utils";
import "./SelectItem.css";
import { underStandContext } from "./UnderStand";
const SelectItem = ({ value, index, tex }) => {
  const {
    pageTwoCurrent,
    setPageTwoCurrent,
    pageThreeCurrent,
    setPageThreeCurrent,
    pageTwoColors,
    setPageTwoColors,
    pageThreeColors,
    setPageThreeColors,
  } = useContext(underStandContext);
  useEffect(() => {}, [pageTwoColors]);
  // const [color, setColor] = useState(null);
  // const [colored, setColored] = useState(false);

  const randomNumberGen = () => {
    return Math.floor(Math.random() * Colors.length);
  };
  const colorHandler = async () => {
    if (tex === "page2") {
      if (pageTwoColors[index].colored) {
        var p = pageTwoColors;
        p[index] = { color: null, colored: false };
       

        setPageTwoColors(p);

        var c = pageTwoCurrent;
        c.slice(c.indexOf([value, index]), 1);
        setPageTwoCurrent(c);
        
      } else {
        const a = randomNumberGen();

        var pp = pageTwoColors;
        pp[index] = { color: Colors[a], colored: true };

        setPageTwoColors(pp);

        setPageTwoCurrent((p) => [...p, [value, index]]);
      }
    } else {
      if (pageThreeColors[index].colored) {
        var p = pageThreeColors;
        p[index] = { color: null, colored: false };

        setPageThreeColors(p);

        var c = pageThreeCurrent;
        c.slice(c.indexOf([value, index]), 1);
        setPageThreeCurrent(c);
      } else {
        const a = randomNumberGen();

        var pp = pageThreeColors;
        pp[index] = { color: Colors[a], colored: true };

        setPageThreeColors(pp);

        setPageThreeCurrent((p) => [...p, [value, index]]);
      }
    }
  };
  return (
    <div
      className="selectButton"
      onClick={colorHandler}
      style={
        tex == "page2"
          ? {
              backgroundColor: pageTwoColors[index].color,
            }
          : { backgroundColor: pageThreeColors[index].color }
      }
    >
      <p>{value}</p>
    </div>
  );
};

export default SelectItem;
