import React, { useContext } from "react";
import "./ContinueButton.css";
import { underStandContext } from "./UnderStand";
const ContinueButton = ({ marg, setCurrentPage, tex }) => {
  const { pageOneCurrent, pageTwoCurrent, pageThreeCurrent } =
    useContext(underStandContext);
  const continueHandler = () =>
    setCurrentPage((p) => {
      if (tex === "pageOne") {
        if (pageOneCurrent !== null) {
          return p < 2 ? p + 1 : p;
        } else {
          return p;
        }
      }
      if ((tex = "page2")) {
        if (pageTwoCurrent.length > 2) {
          return p < 2 ? p + 1 : p;
        } else {
          return p;
        }
      }
      if ((tex = "page3")) {
        if (pageThreeCurrent.length > 2) {
          return p < 2 ? p + 1 : p;
        } else {
          return p;
        }
      }
    });
  return (
    <div
      className="continueButton"
      onClick={continueHandler}
      style={marg ? { marginTop: marg } : null}
    >
      <p>Continue</p>
    </div>
  );
};

export default ContinueButton;
