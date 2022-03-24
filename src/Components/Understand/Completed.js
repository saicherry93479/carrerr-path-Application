import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { scrollContext } from "../../App";
import "./Completed.css";
const Completed = () => {
  const { displayUnderStand, setDisplayUnderStand } = useContext(scrollContext);
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/protofolio");
    setDisplayUnderStand(!displayUnderStand);
  };
  return (
    <div className="pageSeven">
      <p>You Already Done !!!</p>
      <p className="like">👍</p>
      <div className="pageSevenContinue" onClick={clickHandler}>
        <p>Continue To protofolio</p>
      </div>
    </div>
  );
};

export default Completed;
