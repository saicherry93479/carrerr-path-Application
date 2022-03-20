import React from "react";
import PageHeader from "./PageHeader";
import SelectItem from "./SelectItem";
import { Colors, selectData } from "../../Utils/utils";

import "./PageTwo.css";
import ContinueButton from "./ContinueButton";
const PageTwo = ({ setCurrentPage, selectData, sdata, head, subhead, tex }) => {
  return (
    <div>
      <PageHeader head={head} subhead={subhead} />
      <div className="understand-Pagetwo-Selection">
        {sdata.map((value, index) => (
          <SelectItem value={value} key={index} index={index} tex={tex} />
        ))}
      </div>
      <ContinueButton marg="30px" setCurrentPage={setCurrentPage} tex={tex} />
    </div>
  );
};

export default PageTwo;
