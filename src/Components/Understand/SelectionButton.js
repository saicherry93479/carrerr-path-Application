import React, { useContext } from "react";
import "./selectionButton.css";
import { underStandContext } from "./UnderStand";
const SelectionButton = ({ tex, index }) => {
  const { pageOneCurrent, setPageOneCurrent } = useContext(underStandContext);
  const clickHandler = () => {
    setPageOneCurrent(index);
  };
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
