import React, { createContext, useLayoutEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./UnderStand.css";
import { useContext } from "react";
import { scrollContext } from "../../App";
import PageHeader from "./PageHeader";
import SelectionButton from "./SelectionButton";
import ContinueButton from "./ContinueButton";

import PageTwo from "./PageTwo";
import PageOne from "./PageOne";
import { selectData } from "../../Utils/utils";

export const underStandContext = createContext();
const UnderStand = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const { displayUnderStand, setDisplayUnderStand } = useContext(scrollContext);

  const navigate = useNavigate();
  const cancelHandler = () => {
    setDisplayUnderStand(false);
  };
  const [pageOneCurrent, setPageOneCurrent] = useState(null);
  const [pageTwoCurrent, setPageTwoCurrent] = useState([]);
  const [pageThreeCurrent, setPageThreeCurrent] = useState([]);
  const [pageTwoColors, setPageTwoColors] = useState([]);
  const [pageThreeColors, setPageThreeColors] = useState([]);
  useLayoutEffect(() => {
    selectData.map(() =>
      setPageTwoColors((p) => [...p, { color: null, colored: false }])
    );
    selectData.map(() =>
      setPageThreeColors((p) => [...p, { color: null, colored: false }])
    );
  }, []);

  const pageData = [
    <PageOne setCurrentPage={setCurrentPage} key={0} />,
    <PageTwo
      setCurrentPage={setCurrentPage}
      key={1}
      tex={"page2"}
      sdata={selectData}
      head={"What are you into?"}
      subhead={"Select three topics of Your intreset to continue"}
    />,
    <PageTwo
      tex={"page3"}
      setCurrentPage={setCurrentPage}
      key={2}
      sdata={selectData}
      head={"What are you hobbies into?"}
      subhead={"Select three topics to of your hobbies to continue"}
    />,
  ];
  return (
    <underStandContext.Provider
      value={{
        pageOneCurrent,
        setPageOneCurrent,
        pageTwoCurrent,
        setPageTwoCurrent,
        pageThreeCurrent,
        setPageThreeCurrent,
        pageTwoColors,
        setPageTwoColors,
        pageThreeColors,
        setPageThreeColors,
      }}
    >
      <div className="understand-Sec">
        <div className="underStandPage">
          <div className="underStand-Header">
            <i
              class="fa-solid fa-arrow-left understand-back"
              onClick={() => setCurrentPage((p) => p - 1)}
              style={
                currentPage === 0 ? { opacity: 0, pointerEvents: "none" } : null
              }
            ></i>
            <header>Vikasz</header>
            <p
              onClick={cancelHandler}
              style={
                currentPage > 0 ? { opacity: 0, pointerEvents: "none" } : null
              }
            >
              Skip
            </p>
          </div>
          {pageData.map((value, index) =>
            currentPage === index ? value : null
          )}
        </div>
      </div>
    </underStandContext.Provider>
  );
};

export default UnderStand;
