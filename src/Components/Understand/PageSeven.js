import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { scrollContext } from "../../App";
import { addUnderstand } from "../../Firebase/FirebaseMethods";
import "./PageSeven.css";
import { underStandContext } from "./UnderStand";
const PageSeven = () => {
  const navigat = useNavigate();
  const { displayUnderStand, setDisplayUnderStand } = useContext(scrollContext);
  const {
    branches,
    departments,
    pageTwoFinalData,
    finalTechos,
    setFinalTechos,
    finalSubBranches,
    setFinalSubBranches,
    techosF,
    setTechosF,
  } = useContext(underStandContext);
  useEffect(() => {
    var tech = [];
    techosF.forEach((val) => {
      val.forEach((valu) => {
        valu.forEach((valuu) => {
          if (valuu.colored) {
            if (tech.includes(valuu.value)) {
            } else {
              tech.push(valuu.value);
            }
          }
        });
      });
    });
    setFinalSubBranches(tech);
    console.log("departmets are ", departments);

    console.log("final techos are ", finalTechos);
    console.log("branches are ", finalSubBranches);
  }, []);
  const clickHandler = async () => {
    var a = await addUnderstand({
      departments: departments,
      technologies: finalTechos,
      branches: finalSubBranches,
    });
    if (a === "sucess") {
      console.log("sucessfully understand done");
      navigat("/protofolio");
      setDisplayUnderStand(!displayUnderStand);
    } else {
      console.log("unsucessful under stand");
    }
  };
  return (
    <div className="pageSeven">
      <p>Have a Great Days Ahead</p>
      <p className="like">👍</p>
      <div className="pageSevenContinue" onClick={clickHandler}>
        <p>Continue To protofolio</p>
      </div>
    </div>
  );
};

export default PageSeven;
