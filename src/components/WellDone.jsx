import React from "react";
import { GrCheckmark } from "react-icons/gr";

const WellDone = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center w-100">
        <h2 className="pb-3 WellText">Well Done</h2>
        <GrCheckmark className="tick-icon doneSvg p-3 fs-3" />
        <p className=" fs-2 completed_text  pt-1">Completed</p>
      </div>
    </>
  );
};

export default WellDone;
