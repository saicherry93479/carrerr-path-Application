import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import "./UnderStand.css";
import { useContext } from "react";
import { scrollContext } from "../../App";
import PageHeader from "./PageHeader";
import SelectionButton from "./SelectionButton";
import ContinueButton from "./ContinueButton";

import PageOne from "./PageOne";
import { selectData } from "../../Utils/utils";
import PageTwo from "./PageTwo";
import PageThree from "./PageThree";
import PageFour from "./PageFour";
import {
  allBranches,
  allCourse,
  allTechos,
  technologies,
} from "../../Utils/utilsOne";
import PageFive from "./PageFive";
import PageSix from "./PageSix";
import PageSeven from "./PageSeven";
import Completed from "./Completed";

export const underStandContext = createContext();
const UnderStand = () => {
  const [pageTwoData, setPageDataTwo] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [pageTwoFinalData, setPageTwoFinalData] = useState([]);
  const {
    displayUnderStand,
    setDisplayUnderStand,
    underStandCompleted,
    setUnderStandCompleted,
  } = useContext(scrollContext);
  const [departments, setDepartments] = useState([]);
  const [courses, setCourses] = useState([]);
  const [pageOneCurrent, setPageOneCurrent] = useState(null);
  const [byPass, setBypass] = useState(false);
  const [branches, setBranches] = useState([]);
  const [technos, setTechnos] = useState([]);
  const [techosF, setTechosF] = useState([]);
  const [allCourses, setAllCourses] = useState([]);
  const [finalTechos, setFinalTechos] = useState([]);
    const [finalSubBranches, setFinalSubBranches] = useState([]);
  useEffect(() => {
    setPageDataTwo(technologies.map((val) => val));

    setTechosF(allTechos.map((val) => val));
    setAllCourses(allCourse);
    return () => {
      setPageDataTwo([]);
      setTechosF([]);
      setAllCourses([]);
    };
  }, []);
  useEffect(() => {
    setBranches(allBranches.map((val) => val));
    console.log(branches);
  }, []);
  useEffect(() => {
    console.log("current page is ", currentPage);
  }, [currentPage]);
  const navigate = useNavigate();
  const cancelHandler = () => {
    setDisplayUnderStand(false);
  };

  const pageData = [
    <PageOne key={0} setCurrentPage={setCurrentPage} />,
    <PageTwo key={1} setCurrentPage={setCurrentPage} />,
    <PageThree key={3} setCurrentPage={setCurrentPage} />,
    <PageFour key={4} setCurrentPage={setCurrentPage} />,
    <PageFive key={5} setCurrentPage={setCurrentPage} />,
    <PageSix key={6} setCurrentPage={setCurrentPage} />,
    <PageSeven key={6} setCurrentPage={setCurrentPage} />,
  ];
  return (
    <underStandContext.Provider
      value={{
        pageOneCurrent,
        setPageOneCurrent,
        setBypass,
        byPass,
        pageTwoData,
        setPageDataTwo,
        courses,
        setCourses,
        departments,
        setCurrentPage,
        pageTwoFinalData,
        setPageTwoFinalData,
        setDepartments,
        branches,
        setBranches,
        technos,
        setTechnos,
        techosF,
        setTechosF,
        allCourses,
        setAllCourses,
        finalTechos,
        setFinalTechos,
        finalSubBranches,
        setFinalSubBranches,
      }}
    >
      <div className="understand-Sec">
        <div className="underStandPage">
          <div className="underStand-Header">
            <i
              class="fa-solid fa-arrow-left understand-back"
              onClick={() => {
                // if (byPass && currentPage === 3) {
                //   setCurrentPage((p) => p - 2);
                // } else {
                setCurrentPage((p) => p - 1);
                // }
              }}
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
          {underStandCompleted === false ? (
            pageData.map((value, index) =>
              currentPage === index ? value : null
            )
          ) : (
            <Completed />
          )}
        </div>
      </div>
    </underStandContext.Provider>
  );
};

export default UnderStand;
