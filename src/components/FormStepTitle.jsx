import React, { useContext } from "react";
import Header from "../components/typography/Header.tsx";
import { GrCheckmark } from "react-icons/gr";
import { appContext } from "../App";

const FormStepTitle = ({ textTitle, textTitleClass, page }) => {
  const { setStepNumber, stepNumber } = useContext(appContext);

  return (
    <div className="step1 h-222">
      <Header title={textTitle} className={textTitleClass} />

      <div className="checkbox">
        {
          <div
            className={`numbering d-inline-block text-white h-22 w-33 ${
              stepNumber === page
                ? "blueStep"
                : stepNumber < page
                ? "bg-secondary"
                : ""
            }`}
          >
            {stepNumber > page && <GrCheckmark className="tick-icon p-1" />}
            {page}
          </div>
        }
      </div>
    </div>
  );
};

export default FormStepTitle;
