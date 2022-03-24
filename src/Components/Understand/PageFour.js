import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import ContinueButton from "./ContinueButton";
import "./PageFour.css";
import PageHeader from "./PageHeader";
import { underStandContext } from "./UnderStand";

const pageFourColors = ["#ff5e97", "#5eff89", "#5edfff"];
const PageFour = ({ setCurrentPage }) => {
  const {
    pageTwoFinalData,
    courses,
    setCourses,
    setDepartments,
    departments,
    branches,
    setBranches,
    technos,
    setTechnos,
    techosF,
    setTechosF,
  } = useContext(underStandContext);

  useEffect(() => {
    if (departments.length > 0) {
      console.log("deparetments are in > 0 ", departments);

      var branch = [];
      branches.forEach((val) => {
        var branchOne = [];
        val.forEach((valu) => {
          if (departments.includes(valu.value)) {
            branchOne.push({ value: valu.value, colored: true, color: "red" });
          } else {
            branchOne.push(valu);
          }
        });
        branch.push(branchOne);
      });
      console.log("branches in >0 is ", branch);
      setBranches(branch);

      console.log("branches are ", branches);
    }
  }, [departments]);
  useEffect(() => {
    if (technos.length > 0) {
      console.log("technos are in > 0 ", technos);

      var techno = [];
      techosF.forEach((val) => {
        var technoOne = [];
        val.forEach((valu) => {
          var technoTwo = [];
          valu.forEach((valuT) => {
            if (technos.includes(valuT.value)) {
              technoTwo.push({
                value: valuT.value,
                colored: true,
                color: "red",
              });
            } else {
              technoTwo.push(valuT);
            }
          });
          technoOne.push(technoTwo);
        });

        techno.push(technoOne);
      });
      // console.log("branches in >0 is ", branch);
      setTechosF(techno);

      console.log("branches are ", branches);
    }
  }, [technos]);

  useLayoutEffect(() => {
    var course = [];

    pageTwoFinalData.forEach((val) => {
      if (course.includes(val.split("-")[0])) {
      } else {
        course.push(val.split("-")[0]);
      }
    });
    setCourses(course);
    var department = [];

    pageTwoFinalData.forEach((val) => {
      if (department.includes(val.split("-")[1])) {
      } else {
        department.push(val.split("-")[1]);
      }
    });
    setDepartments(department);

    console.log("branches are ", branches);
    var techno = [];

    pageTwoFinalData.forEach((val) => {
      if (techno.includes(val.split("-")[2])) {
      } else {
        techno.push(val.split("-")[2]);
      }
    });

    setTechnos(techno);
  }, []);
  return (
    <div>
      <PageHeader
        head={"Which Page four of the following best describes you?"}
        subhead={
          "Vikasz will never share this information and uses it to improve what content you see."
        }
      />
      <div style={{ overflow: "auto" }}>
        {courses.map((val, index) => (
          <div
            className="pageFourItem"
            style={{
              backgroundColor: pageFourColors[index],
            }}
          >
            <p>{val}</p>
          </div>
        ))}
      </div>
      <ContinueButton setCurrentPage={setCurrentPage} marg="30px" />
    </div>
  );
};

export default PageFour;
