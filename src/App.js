import React, { useState, createContext } from "react";
import "./App.css";
import LeftSideRadio from "./components/LeftSideRadio";
import InterviewForm from "./components/InterviewForm";
import logo from "./logo.png";
import JobDetails from "./components/JobDetails";
import PersonalDetails from "./components/PersonalDetails";
import EmploymentHistory from "./components/EmploymentHistory";
import ReferralDetails from "./components/ReferralDetails";
import FillUpAnswers from "./components/FillUpAnswers";
import References_Details from "./components/References_Details";
import { Reference } from "yup";
import WellDone from "./components/WellDone";

export const appContext = createContext();

function App() {
  let fetchStep = JSON.parse(localStorage.getItem("saveStep"));

  const [stepNumber, setStepNumber] = useState(fetchStep || 1);

  localStorage.setItem("saveStep", JSON.stringify(stepNumber));

  return (
    <>
      <appContext.Provider value={{ setStepNumber, stepNumber }}>
        <div className="logo d-flex justify-content-center">
          <img src={logo} alt="" className="h-75  pt-4" />
        </div>
        <div className="d-flex justify-content-between">
          <LeftSideRadio />
          {stepNumber === 1 && <InterviewForm />}
          {stepNumber === 2 && <JobDetails />}
          {stepNumber === 3 && <PersonalDetails />}
          {stepNumber === 4 && <EmploymentHistory />}
          {stepNumber === 5 && <ReferralDetails />}
          {stepNumber === 6 && <FillUpAnswers />}
          {stepNumber === 7 && <References_Details />}
          {stepNumber === 8 && <WellDone />}
        </div>
      </appContext.Provider>
    </>
  );
}

export default App;
