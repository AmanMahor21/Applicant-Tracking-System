import React, { createContext, useContext, useState } from "react";
import EmploymentPage from "./typography/EmploymentPage";
import { appContext } from "../App";
import Back_Cont_btn from "./typography/Back_Cont_btn";
import { useFormik } from "formik";
import * as Yup from "yup";

export let empContext = createContext();
const EmploymentHistory = () => {
  const { setStepNumber, stepNumber } = useContext(appContext);

  const EmployHistorySchema = Yup.object().shape({
    companyDetails: Yup.array().of(
      Yup.object().shape({
        companyName: Yup.string().required("Company is required"),
        durationFrom: Yup.number()
          .required("Required")
          .min(1000, "Invalid Duration from")
          .max(9999, "Invalid Duration from"),
        durationTo: Yup.number()
          .required("Required")
          .min(1000, "Invalid Duration from")
          .max(9999, "Invalid Duration from"),
        salaryPerMonth: Yup.number()
          .required("Salary is required")
          .typeError("Salary must be a number"),
        reasonToChange: Yup.string().required("Required"),
      })
    ),
  });
  let experienceData_fetch = JSON.parse(localStorage.getItem("EmploymentData"));

  const formik = useFormik({
    initialValues: experienceData_fetch || {
      companyDetails: [
        {
          companyName: "",
          durationFrom: "",
          durationTo: "",
          salaryPerMonth: "",
          reasonToChange: "",
        },
        {
          companyName: "",
          durationFrom: "",
          durationTo: "",
          salaryPerMonth: "",
          reasonToChange: "",
        },
      ],
    },
    validationSchema: EmployHistorySchema,
    onSubmit: (values) => {
      localStorage.setItem("EmploymentData", JSON.stringify(formik.values));
      setStepNumber(stepNumber + 1);
    },
  });

  return (
    <>
      <div className="d-flex flex-column w-100">
        <EmploymentPage formik={formik} />
      </div>
    </>
  );
};

export default EmploymentHistory;
