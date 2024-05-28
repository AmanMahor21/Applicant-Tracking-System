import React from "react";
import { GrCheckmark } from "react-icons/gr";

const WellDone = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <h2>Well Done</h2>
        <GrCheckmark
          className="tick-icon p-1 fs-3 pt-3 pb-3 ps-3 pe-3 h-25 "
          style={{ width: "132px" }}
        />
        <p className="fs-5 pt-1">Completed</p>
      </div>
    </>
  );
};

export default WellDone;
