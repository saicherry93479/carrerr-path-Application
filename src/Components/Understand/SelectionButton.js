import React, { useContext } from "react";
import "./selectionButton.css";
import { underStandContext } from "./UnderStand";
const SelectionButton = ({ tex, index, clickHandler }) => {
  const { pageOneCurrent, setPageOneCurrent, } =
    useContext(underStandContext);

  return (
    <div
      className="selectionButton"
      onClick={clickHandler}
      style={pageOneCurrent === index ? { backgroundColor: "blue" } : null}
    >
      <p style={pageOneCurrent === index ? { color: "white" } : null}>{tex}</p>
    </div>
  );
};

export default SelectionButton;
