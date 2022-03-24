import React, { useContext, useEffect, useState } from "react";
import ContinueButton from "./ContinueButton";

import PageHeader from "./PageHeader";
import SelectionButton from "./SelectionButton";
import { underStandContext } from "./UnderStand";
const selectionButtonD = [
  "School-upto 10th",
  "High School",
  "College",
  "No Formal Education",
];

const PageOne = ({ setCurrentPage }) => {
  const [selectionButtonData, setSelectionButtonData] = useState([]);
  useEffect(() => {
    setSelectionButtonData(selectionButtonD);
  });
  const { pageOneCurrent, setPageOneCurrent } = useContext(underStandContext);
  const clickHandler = (index) => {
    setPageOneCurrent(index);
  };

  return (
    <div>
      <PageHeader
        head={"Which of the following best describes you?"}
        subhead={
          "Vikasz will never share this information and uses it to improve what content you see."
        }
      />
      {selectionButtonData.map((val, index) => (
        <SelectionButton
          tex={val}
          index={index}
          clickHandler={() => clickHandler(index)}
        />
      ))}
      <ContinueButton tex={"pageOne"} />
    </div>
  );
};

export default PageOne;
