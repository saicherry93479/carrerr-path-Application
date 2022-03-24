import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { allBranches } from "../../Utils/utilsOne";
import ContinueButton from "./ContinueButton";
import "./PageFive.css";
import PageHeader from "./PageHeader";
import SelectTechoButton from "./SelectTechoButton";
import { underStandContext } from "./UnderStand";
const PageFive = ({ setCurrentPage }) => {
  const {
    departments,
    courses,
    branches,
    setBranches,
    technos,
    allCourses,
    setAllCourses,
  } = useContext(underStandContext);
  useEffect(() => {
    console.log("technos ", technos);
    console.log("technos ", allCourses);
  }, []);

  const clickHandler = (index, val) => {
    if (branches[index.index][index.indexOne].colored) {
      console.log("Index is ", index, " val is ", val);
      setBranches(
        branches.map((valS, indexS) =>
          indexS === index.index
            ? valS.map((valL, indexL) =>
                indexL === index.indexOne
                  ? { value: valL.value, colored: false, color: null }
                  : valL
              )
            : valS
        )
      );
    } else {
      setBranches(
        branches.map((valS, indexS) =>
          indexS === index.index
            ? valS.map((valL, indexL) =>
                indexL === index.indexOne
                  ? { value: valL.value, colored: true, color: "red" }
                  : valL
              )
            : valS
        )
      );
    }
  };
  return (
    <div>
      <PageHeader
        head={"Which of the following five best describes you?"}
        subhead={
          "Vikasz will never share this information and uses it to improve what content you see."
        }
      />
      <div className="pageFiveTop">
        {allCourses.map((val, index) => (
          <div>
            <div className="pageFiveElmentHeader">
              <p>{val}</p>
            </div>
            <div className="pageFiveElment">
              {branches[index].map((valu, indexOne) => (
                <SelectTechoButton
                  val={valu}
                  index={{ index, indexOne }}
                  clickHandler={clickHandler}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
      <ContinueButton setCurrentPage={setCurrentPage} marg={"30px"} />
    </div>
  );
};

export default PageFive;
