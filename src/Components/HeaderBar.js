import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "./Auth/Auth";
import "./HeaderBar.css";
import { useContext } from "react";
import { scrollContext } from "../App";
import UnderStand from "./Understand/UnderStand";
import CommunityDropDown from "./CommunityDropDown";
import {
  carrerCommunity,
  communityLinkItems,
  peopleServerLinkItems,
} from "../Utils/utils";
import { LogOut, underStandDone } from "../Firebase/FirebaseMethods";
const HeaderBar = () => {
  const navigate = useNavigate();
  const {
    displayLogin,
    setDisplayLogin,
    displayUnderStand,
    setDisplayUnderStand,
    user,
    setUser,
    loginRef,
    underStandCompleted,
    setUnderStandCompleted,
  } = useContext(scrollContext);

  const loginHandler = () => {
    console.log("buttonClicked ", displayLogin);
    setDisplayLogin(!displayLogin);
  };
  // const underDone=async ()=>{
  //   return await underStandDone();
  // }
  const underStandHandler = async () => {
    if (user) {
     

      console.log("understand done in header  ", underStandDone());
      if ((await underStandDone()) === "true") {
        console.log("user is there and understand is there in hedaer ");
        setUnderStandCompleted(true);
         setDisplayUnderStand(!displayUnderStand);
      } else {
         setDisplayUnderStand(!displayUnderStand);
        console.log("user is there and not understand is there in hedaer ");
      }
    } else {
      setDisplayLogin(!displayLogin);
    }
  };
  const protoHandler = () => {
    if (user) {
      navigate("/protofolio");
    } else {
      setDisplayLogin(!displayLogin);
    }
  };
  return (
    <section className="header-Section">
      <nav>
        <Link
          to="/"
          className="link"
          style={{ fontFamily: '"EB Garamond", serif' }}
        >
          VIKASZ
        </Link>
        <div>
          <div className="community">
            <p>People We Serve</p>
            <CommunityDropDown linkItems={peopleServerLinkItems} key={0} />
          </div>
          {/* <Link to="peopleServe" className="link">
            Career Comunity
          </Link> */}
          <div className="community">
            <p>Carrer Community</p>
            <CommunityDropDown
              linkItems={carrerCommunity}
              key={1}
              width="350px"
            />
          </div>
          <p className="link" onClick={underStandHandler}>
            UnderStand
          </p>
          <p
            style={{ cursor: "pointer" }}
            className="link"
            onClick={protoHandler}
          >
            Portfolio
          </p>
          <div className="community">
            <p>Community</p>
            <CommunityDropDown
              linkItems={communityLinkItems}
              key={2}
              communi={true}
            />
          </div>
        </div>
      </nav>
      {user == null ? (
        <p className="signup-Button" onClick={loginHandler}>
          Singup/Login
        </p>
      ) : (
        <div className="emailLogout">
          <p className="emailId">{user.email.substring(0, 10) + "..."}</p>
          <div
            className="logout-dropDown"
            onClick={() => {
              LogOut();
              navigate("/");
              setUser(null);
            }}
          >
            <i class="fa-solid fa-right-from-bracket"></i>
            <p>Logout</p>
          </div>
        </div>
      )}
      {displayLogin === true ? <Auth /> : null}
      {displayUnderStand === true ? <UnderStand /> : null}
    </section>
  );
};

export default HeaderBar;
