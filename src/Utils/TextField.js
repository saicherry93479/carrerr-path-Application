import React, { useState } from "react";
import PasswordIcon from "./PasswordIcon";
import "./TextField.css";
const TextField = ({
  width = "250px",
  icon,
  tex,
  placeholder,
  setDat,
  val,
}) => {
  const [lock, setLock] = useState(false);
  const [data, setData] = useState("");
  return (
    <div style={{ width: width }} className="custom-TextField">
      {icon}
      <input
        type={tex === "password" ? "password" : "text"}
        placeholder={placeholder}
        value={val}
        onChange={(e) => {
          setDat(e.target.value);
        }}
      />
      {/* {tex === "password" ? (
        data.length > 0 ? (
          lock ? (
            <i
              class="fa-solid fa-eye password lock"
              onClick={() => setLock(!lock)}
            ></i>
          ) : (
            <i
              class="fa-solid fa-eye-slash password unlock"
              onClick={() => setLock(!lock)}
            ></i>
          )
        ) : null
      ) : null} */}
    </div>
  );
};

export default TextField;
