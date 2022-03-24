import React, { useContext, useEffect } from "react";
import "./SelectTechoButton.css";
import { underStandContext } from "./UnderStand";
const SelectTechoButton = ({ val, index, clickHandler }) => {
  const { pageTwoData, setPageDataTwo } = useContext(underStandContext);

  return (
    <div
      className="selectionTechoButton"
      onClick={() => {
        clickHandler(index, val);
      }}
      style={val.color ? { backgroundColor: val.color } : null}
    >
      <p>{val.value}</p>
    </div>
  );
};

export default SelectTechoButton;
