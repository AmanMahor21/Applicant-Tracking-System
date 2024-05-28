import React, { useContext, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { appContext } from "../App";

import Back_Cont_btn from "./typography/Back_Cont_btn";

const References_Details = () => {
  let { stepNumber, setStepNumber } = useContext(appContext);

  let YearList = Array.from(
    new Array(10),
    (_, index) => String(new Date().getFullYear() - index)
  );
 
  let MonthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let references_schema = Yup.object().shape({
    ReferenceData: Yup.array().of(
      Yup.object().shape({
        FirstName: Yup.string()
        .required("Required")
        .matches(/^[^\d]+$/, "Must not Contain Number"),

        PhoneNo: Yup.string()
          .required("Required")
          .matches(/^[0-9]{10}$/, "Enter correct Phone Number"),
        CurrentDesignation: Yup.string()
          .required("Required")
          .oneOf(
            ["Testing Job opening", "Academic Research Analyst"],
            "select one"
          ),

        Exp_Year: Yup.string()
          .required("Required")
          .oneOf(YearList, "Select Year"),
        Exp_Month: Yup.string()
          .required("Required")
          .oneOf(MonthList, "Select Month"),
      })
    ),
  });

  let fetchReferenced_data = JSON.parse(
    localStorage.getItem("ReferencedSaved")
  );
  const formik = useFormik({
    initialValues: fetchReferenced_data || {
      ReferenceData: [
        {
          FirstName: "",
          PhoneNo: "",
          CurrentDesignation: "",
          Exp_Year: "",
          Exp_Month: "",
        },
        {
          FirstName: "",
          PhoneNo: "",
          CurrentDesignation: "",
          Exp_Year: "",
          Exp_Month: "",
        },
      ],
    },

    validationSchema: references_schema,

    onSubmit: (values) => {
      localStorage.setItem("ReferencedSaved", JSON.stringify(values));
      setStepNumber(stepNumber + 1);
    },
  });

  const options = ["Testing Job opening", "Academic Research Analyst"];
  function handleYear(e, index) {
  console.log(e.target.value)
    e.preventDefault();
    formik.setFieldValue(`ReferenceData[${index}].Exp_Year`, e.target.value);
  }
  function handleMonth(e, index) {
    e.preventDefault();
    formik.setFieldValue(`ReferenceData[${index}].Exp_Month`, e.target.value);
  }
  function handleAddMore(e) {
    e.preventDefault();
    formik.setFieldValue("ReferenceData", [
      ...formik.values.ReferenceData,
      {
        FirstName: "",
        PhoneNo: "",
        CurrentDesignation: "",
        Exp_Year: "",
        Exp_Month: "",
      },
    ]);
  }
  function handleRemoveBtn(e, index) {
    e.preventDefault();
    let newData = formik.values.ReferenceData.filter((key, i) => i !== index);
    formik.setFieldValue("ReferenceData", newData);
  }
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="asddas form flex-grow-1 pt-3"
      >
        <h3 className="stepHeading mb-4 text-decoration-underline ">
          Reeferences Details
        </h3>

        {formik?.values?.ReferenceData.map((key, index) => (
          <div key={index}>
            <div className="row mb-3">
              <div className="col">
                <label for="inputEmail4" className="form-label starIcon">
                  First Name
                </label>
                <input
                  type="text"
                  name={`ReferenceData[${index}].FirstName`}
                  className="form-control"
                  placeholder="Reference Name"
                  aria-label="First name"
                  value={formik?.values?.ReferenceData[index]?.FirstName}
                  onChange={formik.handleChange}
                />
                {formik?.touched?.ReferenceData &&
                formik?.errors?.ReferenceData?.[index]?.FirstName ? (
                  <div className="text-danger fw-normal">
                    {formik.errors.ReferenceData[index]?.FirstName}
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="col">
                <label for="inputEmail4" className="form-label starIcon">
                  Phone Number
                </label>

                <input
                  name={`ReferenceData[${index}].PhoneNo`}
                  type="text"
                  className="form-control"
                  onChange={formik.handleChange}
                  placeholder="999-999-9999"
                  // aria-label="Phone-No"
                  value={formik?.values?.ReferenceData[index]?.PhoneNo}
                />
                {formik?.touched?.ReferenceData &&
                formik?.errors?.ReferenceData?.[index]?.PhoneNo ? (
                  <div className="text-danger fw-normal">
                    {formik?.errors?.ReferenceData?.[index]?.PhoneNo}
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
            <div className="appId mb-3 w-100">
              <label htmlFor="CurrentDesignation" className="form-label starIcon">
                Current Designation
              </label>
              <select
                name={`ReferenceData[${index}].CurrentDesignation`}
                id="CurrentDesignation"
                className="rounded h-75 pb-1 pt-1 form-select"
                value={formik?.values?.ReferenceData[index]?.CurrentDesignation}
                onChange={formik.handleChange}
              >
                <option value="Select Position">Select Position</option>
                {options?.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              {formik?.touched?.ReferenceData &&
                formik?.errors?.ReferenceData?.[index]?.CurrentDesignation && (
                  <div className="errorMsg text-danger fw-normal mt-2">
                    {formik?.errors?.ReferenceData?.[index]?.CurrentDesignation}
                  </div>
                )}
            </div>
            <div className="row ">
              <div className="appId mb-3 col">
                <label htmlFor="Exp_Year" className="form-label starIcon">
                  Experienced
                </label>
                <select
                  name={`ReferenceData[${index}].Exp_Year`}
                  id="Exp_Year"
                  className="rounded form-select"
                  value={formik?.values?.ReferenceData[index]?.Exp_Year}
                  onChange={(e) => handleYear(e, index)}
                >
                  <option value="Select Position">Year</option>
                  {YearList?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.ReferenceData &&
                  formik?.errors?.ReferenceData?.[index]?.Exp_Year && (
                    <div className="errorMsg text-danger fw-normal mt-2">
                      {formik?.errors?.ReferenceData?.[index]?.Exp_Year}
                    </div>
                  )}
              </div>
              <div className="appId mb-3 col">
              {/* <div className="appId mb-3 col" style={{paddingTop:"36px"}}> */}
                <label htmlFor="Exp_Month" className="form-label starIcon opacity-0" >
                Experienced
                </label>
                <select
                  name={`ReferenceData[${index}].Exp_Month`}
                  id="Exp_Month"
                  className="rounded form-select"
                  // style={{flexGrow:"1"}}
                  value={formik?.values?.ReferenceData[index]?.Exp_Month}
                  onChange={(e) => handleMonth(e, index)} // Update this line
                  // onChange={formik.handleChange}
                >
                  <option value="Select Position">Month</option>
                  {MonthList?.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                {formik.touched.ReferenceData &&
                  formik?.errors?.ReferenceData?.[index]?.Exp_Month && (
                    <div className="errorMsg text-danger fw-normal mt-2">
                      {formik?.errors?.ReferenceData?.[index]?.Exp_Month}
                    </div>
                  )}
              </div>
            </div>
            {index > 1 && (
              <button
                className="btn-danger mt-3 rounded-2 p-2 border-0 bg-danger text-white"
                onClick={(e) => handleRemoveBtn(e, index)}
              >
                Remove
              </button>
            )}
            {<div className="x_axisLine  mb-3"></div>}
          </div>
        ))}
        <Back_Cont_btn formik={formik} handleAddMore={handleAddMore} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </>
  );
};

export default References_Details;
