import React, { useContext, useLayoutEffect, useRef } from "react";
import Footer from "./Footer";
import HeroPage from "./HeroPage";
import ThirdPage from "./ThirdPage";
import SecondPage from "./SecondPage";
import Story from "./Story";
import { scrollContext } from "../../App";

const Home = () => {
  const scrollRef = useRef();
  const { displayLogin, displayUnderStand } = useContext(scrollContext);

  return (
    <div ref={scrollRef}>
      
      <HeroPage />
      {!displayLogin && !displayUnderStand && (
        <>
          <SecondPage></SecondPage>
          <ThirdPage />
          <Story />
        </>
      )}
    </div>
  );
};

export default Home;
