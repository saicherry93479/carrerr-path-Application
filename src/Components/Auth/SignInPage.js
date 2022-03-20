import React, { useContext, useState } from "react";
import TextField from "../../Utils/TextField";
import UserIcons from "../../Utils/UserIcons";
import PasswordIcon from "../../Utils/PasswordIcon";
import Or from "../../Utils/Or";
import Button from "../../Utils/Button";
import GoogleButtonF from "../../Utils/GoogleButtonF";
import { SignUp } from "../../Firebase/FirebaseMethods";
import { useNavigate } from "react-router-dom";
import { scrollContext } from "../../App";
import { auth } from "../../Firebase/Firebase";
const SignInPage = () => {
  const { displayLogin, setDisplayLogin, user, setUser } =
    useContext(scrollContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conPassword, setConPasssword] = useState("");
  const [errors, setErrors] = useState([]);
  const signUpHandler = async () => {
    setErrors([]);
    console.log("in dvcd first");
    if (
      email.length === 0 ||
      password.length === 0 ||
      conPassword.length === 0
    ) {
      if (!errors.includes("please enter all details")) {
        setErrors((p) => [...p, "please enter all details"]);
        return;
      }
    }

    if (password.length < 6 || conPassword.length < 6) {
      if (!errors.includes("please enter password more than 6 chars")) {
        setErrors((p) => [...p, "please enter password more than 6 chars"]);
        return;
      }
    }

    if (password.length !== conPassword.length) {
      if (!errors.includes("please enter both passwords correctly")) {
        setErrors((p) => [...p, "please enter both passwords correctly"]);
        setConPasssword("");
        return;
      }
    }

    console.log("in dvcd last");
    var a = await SignUp(email, password);
    if (a === "sucess") {
      console.log("yes sucess");
      setDisplayLogin(false);
      setUser({ uid: auth.currentUser.uid, email: auth.currentUser.email });
    } else {
      if (!errors.includes(a)) {
        setErrors((p) => [...p, a]);
        setConPasssword("");
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
      <TextField
        setDat={setConPasssword}
        icon={<PasswordIcon />}
        placeholder="confirm-password"
        tex={"password"}
        val={conPassword}
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
      <Button tex={"Sign Up"} handler={signUpHandler} />
      <Or />
      <GoogleButtonF tex={"SignUp With Google"} />
    </div>
  );
};

export default SignInPage;
