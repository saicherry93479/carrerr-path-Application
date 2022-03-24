import React, { useContext } from "react";
import "./ContinueButton.css";
import { underStandContext } from "./UnderStand";
const ContinueButton = ({ marg, byPass = false, tex }) => {
  const { setCurrentPage, pageOneCurrent, pageTwoFinalData } =
    useContext(underStandContext);
  const continueHandler = () =>
    setCurrentPage((p) => {
      if (tex === "pageOne") {
        if (pageOneCurrent) {
          return p + 1;
        } else {
          return p;
        }
      }
      if (tex === "pageTwo") {
        if (!byPass && pageTwoFinalData.length > 0) {
          return p + 2;
        } else if (pageTwoFinalData.length > 0) {
          return p + 1;
        } else {
          return p;
        }
      }
      return p + 1;
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
