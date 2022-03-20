import React from "react";
import "./HomeP.css";
import HomePItem from "./HomePItem";
const HomeP = () => {
  return (
    <div>
      <HomePItem
        index={0}
        head={"Your results for ESAT Round 2 are out!"}
        subHeader={
          "You will see detailed breakdown of your performance during this round. You will also be able to see for if you’re selected for next round"
        }
        tex={"View My Result"}
        key={0}
      />
      <HomePItem
        index={1}
        head={
          "Live Noticeboard - Get answers to all your queries related to ESAT"
        }
        subHeader={
          "You will find the most updated information about ESAT on the noticeboard. Please check it for the latest announcements and updates. You can find resolutions for all the other technical issues as well."
        }
        tex={"Check  Noticeboard"}
        key={1}
      />
    </div>
  );
};

export default HomeP;
