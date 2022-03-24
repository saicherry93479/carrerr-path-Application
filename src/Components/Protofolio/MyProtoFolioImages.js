import React, { useEffect, useLayoutEffect, useState } from "react";
import "./MyProtofolioImages.css";
import CYBERSECURITY from "../../Images/CYBERSECURITY.jpeg";
import COLUDCOMPUTING from "../../Images/COLUDCOMUPUTING.jpeg";
import MECTRONICS from "../../Images/MECTRONICS.jpeg";
import CHARTEDFINANCE from "../../Images/CHARTED ACCOUNTANCE.jpeg";
import PHARMD from "../../Images/PHARM D.jpeg";
const dataImages = [
  "CYBERSECURITY",
  "COLUDCOMPUTING",
  "MECTRONICS",
  "CHARTED FINANCE",
  "PHARM D",
];
const MyProtoFolioImages = ({ data }) => {
  const [images, setImages] = useState(["CYBERSECURITY", "MECTRONICS"]);
  const [finalImages, setFinalImages] = useState([]);
  useEffect(() => {
    if (images.length > 0) {
      if (images.includes("CYBERSECURITY")) {
        setFinalImages((p) =>
          p.includes(CYBERSECURITY) ? p : [...p, CYBERSECURITY]
        );
      }
      if (images.includes("COLUDCOMPUTING")) {
        setFinalImages((p) =>
          p.includes(COLUDCOMPUTING) ? p : [...p, COLUDCOMPUTING]
        );
      }
      if (images.includes("MECTRONICS")) {
        setFinalImages((p) =>
          p.includes(MECTRONICS) ? p : [...p, MECTRONICS]
        );
      }
      if (images.includes("CHARTED FINANCE")) {
        setFinalImages((p) =>
          p.includes(CHARTEDFINANCE) ? p : [...p, CHARTEDFINANCE]
        );
      }
      if (images.includes("PHARM D")) {
        setFinalImages((p) => (p.includes(PHARMD) ? p : [...p, PHARMD]));
      }
    }
  }, [images]);
  useLayoutEffect(() => {
    var im = [];
    dataImages.forEach((val) => {
      if (data.branches.includes(val)) {
        if (images.includes(val)) {
          console.log("in cludes ", val);
        } else {
          console.log("not includes ", val);
          im.push(val);
        }
      }
    });
    console.log("im is ", im);
    setImages((p) => [...p, ...im]);
  }, []);

  return (
    <div>
      {finalImages.map((val) => (
        <div className="protofolioImages">
          <img src={val} />
        </div>
      ))}
    </div>
  );
};

export default MyProtoFolioImages;
