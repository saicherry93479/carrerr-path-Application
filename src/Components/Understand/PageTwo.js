import React, { useContext, useEffect, useState } from "react";
import { technologies } from "../../Utils/utilsOne";
import ContinueButton from "./ContinueButton";
import PageHeader from "./PageHeader";
import "./PageTwo.css";
import SelectTechoButton from "./SelectTechoButton";
import { underStandContext } from "./UnderStand";

const PageTwo = ({ setCurrentPage }) => {
  const {
    setBypass,
    byPass,
    pageTwoData,
    pageTwoFinalData,
    setPageDataTwo,
    setPageTwoFinalData,
    finalTechos,
    setFinalTechos,
  } = useContext(underStandContext);
  useEffect(() => {}, [pageTwoData]);

  useEffect(() => {
    if (pageTwoFinalData.length > 0) {
      setBypass(false);
    }
  }, [pageTwoFinalData]);

  const changeHandler = (e) => {
    if (e.target.checked) {
      setBypass(true);

      setPageDataTwo(technologies.map((val) => val));
    } else {
      setBypass(false);
    }
  };
  const clickHandler = (index, val) => {
    if (pageTwoData[index].selected) {
      setPageDataTwo(
        pageTwoData.map((value) =>
          value.id === index
            ? {
                value: val.value,
                selected: false,
                color: null,
                depart: val.depart,
                id: val.id,
              }
            : value
        )
      );

      setPageTwoFinalData((p) => p.splice(p.indexOf(val.depart), 1));
      setFinalTechos((p) => p.splice(p.indexOf(val.value), 1));
      console.log(pageTwoFinalData);
      //   setCourses();
    } else {
      setPageDataTwo(
        pageTwoData.map((value) =>
          value.id === index
            ? {
                value: val.value,
                selected: true,
                color: "red",
                depart: val.depart,
                id: val.id,
              }
            : value
        )
      );
      setPageTwoFinalData((p) => {
        if (p.includes(val.depart)) {
          return p;
        } else {
          return [...p, val.depart];
        }
      });
      setFinalTechos((p) => {
        if (p.includes(val.value)) {
          return p;
        } else {
          return [...p, val.value];
        }
      });
    }
  };
  return (
    <div className="pageTwo">
      <PageHeader
        head={"Which of the following best describes you?"}
        subhead={
          "Vikasz will never share this information and uses it to improve what content you see."
        }
      />
      <div className="itemsSelectionPageUnderStand">
        {pageTwoData.map((val, index) => (
          <SelectTechoButton
            val={val}
            key={index}
            index={index}
            clickHandler={clickHandler}
          />
        ))}
      </div>
      <div className="checkBox">
        <input
          type={"checkbox"}
          className="check"
          onChange={changeHandler}
          checked={byPass}
        />
        <p>None of the Above</p>
      </div>
      <ContinueButton
        setCurrentPage={setCurrentPage}
        byPass={byPass}
        marg="10px"
        tex="pageTwo"
      />
    </div>
  );
};

export default PageTwo;
