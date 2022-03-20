import React from "react";

const HeaderButton = ({ current, method, index }) => {
  return (
    <div
      onClick={method}
      style={
        current === index
          ? {
              borderBottom: "2px solid var(--secondaryColor--)",
              backgroundColor: "#fff6cc",
            }
          : null
      }
    >
      <p
        style={current === index ? { color: "var(--secondaryColor--)" } : null}
      >
        {index === 0 && "Login"}
        {index === 1 && "SignUp"}
      </p>
    </div>
  );
};

export default HeaderButton;
