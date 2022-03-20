import React, { useState } from "react";
import ContinueButton from "./ContinueButton";

import PageHeader from "./PageHeader";
import SelectionButton from "./SelectionButton";
const selectionButtonData = [
  "School-upto 10th",
  "High School",
  "College",
  "No Formal Education",
];

const PageOne = ({ setCurrentPage }) => {
  return (
    <div>
      <PageHeader
        head={"Which of the following best describes you?"}
        subhead={
          "Vikasz will never share this information and uses it to improve what content you see."
        }
      />
      {selectionButtonData.map((val, index) => (
        <SelectionButton tex={val} index={index} />
      ))}
      <ContinueButton setCurrentPage={setCurrentPage} tex={"pageOne"} />
    </div>
  );
};

export default PageOne;
