import React from "react";
import { eventsData } from "../../Utils/utils";
import "./EventC.css";
const Event = () => {
  return (
    <div className="event-Sec">
      {eventsData.map((val, index) => (
        <div className="eventItem" style={{}}>
          <div>
            <p>{val.name}</p>
            <p>{val.time}</p>
          </div>
          <p>{val.happening}</p>
          <div className="div">
            <p>participate</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Event;
