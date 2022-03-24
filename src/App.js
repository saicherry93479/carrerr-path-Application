import React, { useLayoutEffect, useRef, useState } from "react";
import "./App.css";
import HeaderBar from "./Components/HeaderBar";
import Home from "./Components/HomePage/Home";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import HomeStaticOne from "./Components/StaticOne/HomeStaticOne";
import Auth from "./Components/Auth/Auth";
import { createContext } from "react";
import Footer from "./Components/HomePage/Footer";
import Protifolio from "./Components/Protofolio/Protifolio";
import Report from "./Components/Report/Report";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Firebase";
import Community from "./Components/Community/Community";
import { underStandDone } from "./Firebase/FirebaseMethods";

export const scrollContext = createContext();
const App = () => {
  const [displayUnderStand, setDisplayUnderStand] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [headeDisplay, setHeaderDisplay] = useState(true);
  const [footerDisplay, setFooterDisplay] = useState(true);
  const loginRef = useRef();
  const [user, setUser] = useState(null);
  const [underStandCompleted, setUnderStandCompleted] = useState(false);
  useLayoutEffect(() => {
    if (user) {
      if (underStandDone() === true) {
        setUnderStandCompleted(true);
      } else {
        setUnderStandCompleted(false);
      }
    }
  }, [user]);
  useLayoutEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
      }
    });
  }, []);
  return (
    <scrollContext.Provider
      value={{
        displayLogin,
        setDisplayLogin,
        displayUnderStand,
        setDisplayUnderStand,
        headeDisplay,
        setHeaderDisplay,
        footerDisplay,
        setFooterDisplay,
        user,
        setUser,
        loginRef,
        underStandCompleted,
        setUnderStandCompleted,
      }}
    >
      <Router>
        {headeDisplay ? <HeaderBar /> : null}
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<HomeStaticOne />} path="peopleServe"></Route>
          <Route element={<Protifolio />} path="protofolio"></Route>
          <Route element={<Report />} path="protofolio/myReport" />
          <Route element={<Community />} path="community" />
        </Routes>
        {!displayLogin && !displayUnderStand && footerDisplay && <Footer />}
      </Router>
    </scrollContext.Provider>
  );
};

export default App;
