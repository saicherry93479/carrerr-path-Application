import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { scrollContext } from "../App";

const LinkItem = ({ colorLight, color, tex, navigat, communi = false }) => {
  const { user,displayLogin,setDisplayLogin } = useContext(scrollContext);
  const clickHandler = () => {
    if (communi) {
      if (user) {
        navigate(navigat);
      } else {
        setDisplayLogin(!displayLogin);
      }
    } else {
      navigate(navigat);
    }
  };
  const navigate = useNavigate();
  return (
    <div onClick={clickHandler} className="linkItem">
      <div style={{ backgroundColor: colorLight }}>
        <i class="fa-solid fa-plus" style={{ color: color }}></i>
      </div>
      <p>{tex}</p>
      <i
        class="fa-solid fa-arrow-right link-item-right"
        style={{ color: color }}
      ></i>
    </div>
  );
};

export default LinkItem;
