import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Rate } from "antd";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

import { appContext } from "../App";

const PersonalDetails = () => {
  let { setStepNumber, stepNumber } = useContext(appContext);

  let appId = localStorage.getItem("applicationId");
  let MobileNo = localStorage.getItem("savedMobile_No");

  let PersonalDetailsSchema = Yup.object().shape({
    firstName: Yup.string()
      .required("Required")
      .matches(/^[^\d]+$/, "Must not Contain Number"),

    lastName: Yup.string().required("Required"),

    applicationId: Yup.string()
      .required("Required")
      .oneOf([appId], "Must be same as before"),

    mobileNO: Yup.string()
      .required("Required")
      .matches(/^[0-9]{10}$/, "Enter correct Number"),

    rating: Yup.number().min(1, "Required"),

    salarySlip: Yup.string().required("Required"),

    appliedStatus: Yup.string().required("Required"),
  });
  let fetchData = JSON.parse(localStorage.getItem("submittedValues"));

  const formik = useFormik({
    initialValues: fetchData || {
      firstName: "",
      lastName: "",
      applicationId: appId || "",
      mobileNO: MobileNo || "",
      rating: 1,
      salarySlip: "",
      appliedStatus: "",
    },

    validationSchema: PersonalDetailsSchema,

    onSubmit: (values) => {
      console.log(values);
      setStepNumber(stepNumber + 1);
      localStorage.setItem("submittedValues", JSON.stringify(values));
    },
  });

  return (
    <>
      <form className="form flex-grow-1" onSubmit={formik.handleSubmit}>
        <h3 className="stepHeading mb-4 text-decoration-underline">
          Personal Details
        </h3>

        <div className="row ">
          <div className="col">
            <label for="inputEmail4 " className="form-label starIcon">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              className="form-control"
              placeholder="Enter your First name"
              aria-label="First name"
              value={formik.values.firstName}
              onChange={formik.handleChange}
            />
            {formik.touched.firstName && formik.errors.firstName && (
              <div className="text-danger fw-normal">
                {formik.errors.firstName}
              </div>
            )}
          </div>
          <div className="col">
            <label for="inputEmail4 " className="form-label starIcon">
              Last Name
            </label>

            <input
              name="lastName"
              type="text"
              className="form-control"
              placeholder="Enter your Last name"
              aria-label="Last name"
              onChange={formik.handleChange}
              value={formik.values.lastName}
            />
            {formik.touched.lastName && formik.errors.lastName && (
              <div className="text-danger fw-normal">
                {formik.errors.lastName}
              </div>
            )}
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <label for="inputEmail4 " className="form-label starIcon">
              Application Id
            </label>
            <input
              name="applicationId"
              type="text"
              className="form-control"
              placeholder="Enter Application ID (e.g - ZW00001)"
              aria-label="First name"
              onChange={formik.handleChange}
              value={formik.values.applicationId}
            />
            {formik.touched.applicationId && formik.errors.applicationId && (
              <div className="text-danger fw-normal">
                {formik.errors.applicationId}
              </div>
            )}
          </div>
          <div className="col">
            <label for="inputEmail4 " className="form-label starIcon">
              Mobile Number
            </label>

            <input
              name="mobileNO"
              type="text"
              className="form-control"
              onChange={formik.handleChange}
              placeholder="999-999-9999"
              aria-label="Last name"
              value={formik.values.mobileNO}
            />
            {formik.touched.mobileNO && formik.errors.mobileNO && (
              <div className="text-danger fw-normal">
                {formik.errors.mobileNO}
              </div>
            )}
          </div>
        </div>

        <div className="rating mt-3">
          <label htmlFor="rating " className="pe-5 starIcon">
            English Profieciency
          </label>
          <Rate
            defaultValue={1}
            name="rating"
            value={formik.values.rating}
            onChange={(value) => formik.setFieldValue("rating", value)}
          />
          {formik.touched.rating && formik.errors.rating && (
            <div className="text-danger fw-normal">{formik.errors.rating}</div>
          )}
        </div>

        <div className="radioBtn pt-3">
          <p className="starIcon">
            Able to present Current or Last Company Salary Slip ?
          </p>
          <div className="form-check d-inline-block pe-5">
            <input
              className="form-check-input"
              type="radio"
              name="salarySlip"
              id="salarySlip_Yes"
              onChange={() => formik.setFieldValue("salarySlip", "Yes")}
              onBlur={formik.handleBlur}
              value={"Yes"}
              checked={formik.values.salarySlip == "Yes"}
            />
            <label className="form-check-label" for="salarySlip_Yes">
              Yes
            </label>
          </div>
          <div className="form-check d-inline-block pe-5">
            <input
              className="form-check-input"
              type="radio"
              name="salarySlip"
              id="salarySlip_No"
              onChange={() => formik.setFieldValue("salarySlip", "No")}
              onBlur={formik.handleBlur}
              value={"No"}
              checked={formik.values.salarySlip == "No"}
            />
            <label className="form-check-label" for="salarySlip_No">
              No
            </label>
          </div>
          <div className="form-check d-inline-block     pe-5">
            <input
              className="form-check-input"
              type="radio"
              name="salarySlip"
              id="fresher"
              onChange={() => formik.setFieldValue("salarySlip", "fresher")}
              onBlur={formik.handleBlur}
              value={"fresher"}
              checked={formik.values.salarySlip == "fresher"}
            />
            <label className="form-check-label" for="fresher">
              I am Fresher
            </label>
          </div>
          {formik.touched.salarySlip && formik.errors.salarySlip ? (
            <div className="text-danger fw-normal">
              {formik.errors.salarySlip}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="radioBtn pt-3">
          <p className="starIcon">Have you applied before ?</p>
          <div className="form-check d-inline-block pe-5">
            <input
              className="form-check-input"
              type="radio"
              name="appliedStatus"
              id="appliedStatus_Yes"
              onChange={() => formik.setFieldValue("appliedStatus", "Yes")}
              value="Yes"
              checked={formik.values.appliedStatus == "Yes"}

              //   checked
            />
            <label className="form-check-label" for="appliedStatus_Yes">
              Yes
            </label>
          </div>
          <div className="form-check d-inline-block pe-5">
            <input
              className="form-check-input"
              type="radio"
              name="appliedStatus"
              id="appliedStatus_No"
              onChange={() => formik.setFieldValue("appliedStatus", "No")}
              value="No"
              checked={formik.values.appliedStatus == "No"}
            />
            <label className="form-check-label" for="appliedStatus_No">
              No
            </label>
          </div>
          {formik.touched.appliedStatus && formik.errors.appliedStatus ? (
            <div className="text-danger fw-normal">
              {formik.errors.appliedStatus}
            </div>
          ) : (
            ""
          )}
        </div>
        <div className="buttons w-100 mt-3 d-flex justify-content-between ">
          <button
            className=" backBtn"
            onClick={() => setStepNumber(stepNumber - 1)}
          >
            <MdOutlineKeyboardBackspace /> <label>Back </label>
          </button>
          <button className="btn  continue text-white " type="submit">
            Continue
          </button>
        </div>
      </form>
    </>
  );
};

export default PersonalDetails;
