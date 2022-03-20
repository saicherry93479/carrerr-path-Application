import React from "react";
import ThirdPageItem from "./ThirdPageItem";
import "./ThirdPage.css";
const ThirdPage = () => {
  const explore = [
    "Skills",
    "Intersts",
    "Values",
    "Personality",
    "Competencies & Career ",
    "Addition Carrer",
  ];
  return (
    <div className="thirdPage">
      <header>Exploraation</header>
      <div className="thirdPage-Flex">
        {[0, 1, 2, 3, 4, 5].map((value, index) => (
          <ThirdPageItem key={index} head={explore[index]} />
        ))}
      </div>
    </div>
  );
};

export default ThirdPage;
