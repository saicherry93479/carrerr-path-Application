import React, { useLayoutEffect, useRef, useState } from "react";
import "./Auth.css";
import { useContext } from "react";
import { scrollContext } from "../../App";
import HeaderButton from "./HeaderButton";

import LoginPage from "./LoginPage";
import SignInPage from "./SignInPage";

const Auth = () => {
  const { displayLogin, setDisplayLogin } = useContext(scrollContext);

  const [current, setCurrent] = useState(0);
  const loginClicked = () => {
    setCurrent(0);
  };
  const signupClicked = () => {
    setCurrent(1);
  };
  const cancelHandler = () => {
    
    setDisplayLogin(false);
 
  };
  return (
    <div className="auth-Sec">
      <div className="loginPage">
        <div className="auth-HeaderOne">
          <header>Vikasz</header>
          <p onClick={cancelHandler}>skip</p>
        </div>
        <div className="auth-HeaderTwo">
          <HeaderButton current={current} method={loginClicked} index={0} />

          <HeaderButton current={current} method={signupClicked} index={1} />
        </div>
        <div className="auth-LoginForm">
          {current === 0 && <LoginPage />}
          {current === 1 && <SignInPage />}
        </div>
        <p className="login-End">
          By continuing, you agree to our User{" "}
          <span className="blue">Agreement</span> and
          <span className="blue"> Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
};

export default Auth;
