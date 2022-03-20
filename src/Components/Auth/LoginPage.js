import React, { useContext, useState } from "react";
import TextField from "../../Utils/TextField";
import UserIcons from "../../Utils/UserIcons";
import PasswordIcon from "../../Utils/PasswordIcon";
import Or from "../../Utils/Or";
import Button from "../../Utils/Button";
import GoogleButtonF from "../../Utils/GoogleButtonF";
import { SignIn } from "../../Firebase/FirebaseMethods";
import { auth } from "../../Firebase/Firebase";
import { scrollContext } from "../../App";
const LoginPage = () => {
  const { setDisplayLogin, setUser } = useContext(scrollContext);
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async () => {
    setErrors([]);
    if (email.length === 0 || password.length === 0) {
      if (!errors.includes("please enter all details")) {
        setErrors((p) => [...p, "please enter all details"]);
        return;
      }
    }
    if (password.length < 6) {
      if (!errors.includes("please enter password more than 6 chars")) {
        setErrors((p) => [...p, "please enter password more than 6 chars"]);
        return;
      }
    }
    console.log("passed all ddjkds");
    var a = await SignIn(email, password);
    if (a === "sucess") {
      console.log("yes sucess");
      setDisplayLogin(false);
      setUser({ uid: auth.currentUser.uid, email: auth.currentUser.email });
    } else {
      if (!errors.includes(a)) {
        setErrors((p) => [...p, a]);

        return;
      }
    }
  };
  return (
    <div>
      <TextField
        icon={<UserIcons />}
        placeholder="email"
        setDat={setEmail}
        val={email}
      />
      <TextField
        icon={<PasswordIcon />}
        placeholder="password"
        tex={"password"}
        setDat={setPassword}
        val={password}
      />
      {errors.map((val) => (
        <div className="errorSignup">
          <i
            class="fa-solid fa-xmark"
            style={{ color: "red", marginRight: "10px" }}
          ></i>
          <p>{val}</p>
        </div>
      ))}
      <Button tex={"Log In"} handler={loginHandler} />
      <Or />
      <GoogleButtonF tex={"Login With Google"} />
    </div>
  );
};

export default LoginPage;
