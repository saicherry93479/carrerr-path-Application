import React, { useContext, useEffect } from "react";
import PageHeader from "./PageHeader";
import "./PageSix.css";
import ContinueButton from "./ContinueButton";
import SelectTechoButton from "./SelectTechoButton";
import { underStandContext } from "./UnderStand";
const PageSix = ({ setCurrentPage }) => {
  const {
    techosF,
    setTechosF,
    courses,
    branches,
    allCourses,
    finalSubBranches,
    setFinalSubBranches,
  } = useContext(underStandContext);
  useEffect(() => {
    console.log("tecjos is ", techosF);
  }, []);
  const clickHandler = (index, val) => {
    if (techosF[index.index][index.indexOne][index.indexTwo].colored) {
      console.log("Index is ", index, " val is ", val);
      setTechosF(
        techosF.map((valS, indexS) =>
          indexS === index.index
            ? valS.map((valL, indexL) =>
                indexL === index.indexOne
                  ? valL.map((valLL, indexLL) =>
                      indexLL === index.indexTwo
                        ? { value: valLL.value, colored: false, color: null }
                        : valLL
                    )
                  : valL
              )
            : valS
        )
      );
    //   setFinalSubBranches((p) => p.splice(p.indexOf(val.value), 1));
    } else {
      setTechosF(
        techosF.map((valS, indexS) =>
          indexS === index.index
            ? valS.map((valL, indexL) =>
                indexL === index.indexOne
                  ? valL.map((valLL, indexLL) =>
                      indexLL === index.indexTwo
                        ? { value: valLL.value, colored: true, color: "red" }
                        : valLL
                    )
                  : valL
              )
            : valS
        )
      );
    //   setFinalSubBranches((p) => {
    //     if (p.includes(val)) {
    //       return p;
    //     } else {
    //       return [...p, val.value];
    //     }
    //   });
    }
  };
  return (
    <div>
      <PageHeader
        head={"Which of the following six best describes you?"}
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
            <div className="pageSixElment">
              {branches[index].map((valu, indexOne) => (
                <div style={{ margin: "20px 0px" }}>
                  <div className="pageSixElmentHeader">
                    <p>{valu.value}</p>
                  </div>
                  <div className="pageSixBottomElment">
                    {techosF[index][indexOne].map((valueT, indexTwo) => (
                      <SelectTechoButton
                        val={valueT}
                        index={{ index, indexOne, indexTwo }}
                        clickHandler={clickHandler}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <ContinueButton setCurrentPage={setCurrentPage} marg={"30px"} />
    </div>
  );
};

export default PageSix;

// {branches[index].map((valu, indexOne) => (
