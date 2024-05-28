import React from "react";
import FormStepTitle from "./FormStepTitle.jsx";

const LeftSideRadio = () => {
  return (
    <>
      <div className="box h-100">
        <div className="tickDiv h-100">
          <FormStepTitle page={1} textTitle={"Setup your Interview Details"}/>
          <FormStepTitle page={2} textTitle={"Setup your Job Details"} />
          <FormStepTitle page={3} textTitle={"Applicant Details"} />
          <FormStepTitle page={4} textTitle={"Employment History"} />
          <FormStepTitle page={5} textTitle={"Referral Details"} />
          <FormStepTitle page={6} textTitle={"Fill up the Answers"} />
          <FormStepTitle page={7} textTitle={"References Details"} />
          <FormStepTitle page={8} textTitle={"Completed"} />
        </div>
      </div>
    </>
  );
};

export default LeftSideRadio;
