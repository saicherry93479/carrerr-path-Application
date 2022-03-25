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
import useWindowDimensions from "./Utils/useWindowDimensions";

export const scrollContext = createContext();
const App = () => {
  const [displayUnderStand, setDisplayUnderStand] = useState(false);
  const [displayLogin, setDisplayLogin] = useState(false);
  const [headeDisplay, setHeaderDisplay] = useState(true);
  const [footerDisplay, setFooterDisplay] = useState(true);
  const loginRef = useRef();
  const [user, setUser] = useState(null);
  const [underStandCompleted, setUnderStandCompleted] = useState(false);
  const [loading, setLoading] = useState(false);
  const { height, width } = useWindowDimensions();
  useLayoutEffect(() => {
    console.log("height is ", height, "  width is ", width);
    if (user) {
      if (underStandDone() === "true") {
        console.log("user is there and understand is there ");
        setUnderStandCompleted(true);
      } else {
        console.log("user is not  there and understand is not there ");
        setUnderStandCompleted(false);
      }
    }
  }, [user]);
  useLayoutEffect(() => {
    setLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser({
          uid: user.uid,
          email: user.email,
        });
        setLoading(false);
      } else {
        setLoading(false);
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
      {loading ? (
        <div className="loading"><p>Loading</p> </div>
      ) : (
        <Router>
          {headeDisplay ? width > 1200 ? <HeaderBar /> : null : null}
          <Routes>
            <Route
              element={width < 1200 ? <SmallScree /> : <Home />}
              path="/"
            ></Route>
            <Route
              element={width < 1200 ? <SmallScree /> : <HomeStaticOne />}
              path="peopleServe"
            ></Route>
            <Route
              element={width < 1200 ? <SmallScree /> : <Protifolio />}
              path="protofolio"
            ></Route>
            <Route
              element={width < 1200 ? <SmallScree /> : <Report />}
              path="protofolio/myReport"
            />
            <Route
              element={width < 1200 ? <SmallScree /> : <Community />}
              path="community"
            />
          </Routes>
          {!displayLogin &&
            !displayUnderStand &&
            footerDisplay &&
            width > 1200 && <Footer />}
        </Router>
      )}
    </scrollContext.Provider>
  );
};

const SmallScree = () => {
  return (
    <div className="smallScreens">
      <p>
        Website For Small Screens is still in Progress.Enjoy the website in
        Desktops 😁😁😁
      </p>
    </div>
  );
};

export default App;
