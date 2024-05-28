import { useFormik } from "formik";
import React, { useContext, useState } from "react";
import { appContext } from "../App";
import Swal from "sweetalert2";
import * as Yup from "yup";

// Form will validate on the basis of condition
const SignupSchema = Yup.object().shape({
  applicantId: Yup.string()
    .required("Required")
    .matches(/^[A-Z]{2}[0-9]{5}$/, "Enter Correct ID"),

  phoneNo: Yup.string()
    .required("Required")
    .matches(/^[0-9]{10}$/, "Enter correct Number"),
});
const InterviewForm = () => {
  const { stepNumber, setStepNumber } = useContext(appContext);
  const formik = useFormik({
    initialValues: {
      applicantId: "",
      phoneNo: "",
    },
    // form will only submit when there is no error && calling sweetAlert
    onSubmit: (values, { setSubmitting }) => {
      if (Object.keys(formik.errors).length == 0) {
        setSubmitting(false);
        setTimeout(() => {
          sweetAlert();
        }, 500);
      }
      localStorage.setItem("applicationId", values.applicantId);
      localStorage.setItem("savedMobile_No", values.phoneNo);
    },

    validationSchema: SignupSchema,
  });
  console.log(formik);
  let p = localStorage.getItem("savedMobile_No");
  console.log(p);
  // SweetaLert Fun that show random 4 Digit no.
  const sweetAlert = () => {
    let ran = Math.floor(Math.random() * (9999 - 1000) + 1000);
    console.log(ran);
    Swal.fire({
      title: "OTP Generated",
      text: ran.toString(),
      icon: "success",
    }).then((result) => {
      return result ? setStepNumber(stepNumber + 1) : stepNumber;
    });
  };

  return (
    <>
      {/* <div>InterviewForm</div> */}
      <form onSubmit={formik.handleSubmit} className="form flex-grow-1">
        <div className="mb-3 inputDiv">
          <h3 className="stepHeading mb-4 text-decoration-underline">
            Interview Form
          </h3>
          <div className="row">
            <div className=" col">
              <label
                for="exampleFormControlInput1"
                className="form-label starIcon"
              >
                Applicant ID
              </label>
              <input
                type="text"
                placeholder="Enter Application ID (e.g - ZW00001)"
                className="form-control w-100"
                name="applicantId"
                value={formik.firstName}
                onChange={formik.handleChange}
              />
              {formik.touched.applicantId && formik.errors.applicantId ? (
                <div className="text-danger fw-normal">
                  {formik.errors.applicantId}
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="col">
              <label htmlFor="phoneNo" className="form-label starIcon">
                Mobile Number
              </label>
              <input
                type="text"
                placeholder="999-999-9999"
                id="phoneNo"
                className="form-control"
                name="phoneNo"
                value={formik.phoneNo}
                onChange={formik.handleChange}
              />
              {formik.touched.phoneNo && formik.errors.phoneNo ? (
                <div className="text-danger fw-normal">
                  {formik.errors.phoneNo}
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="sendOtpDiv w-100 text-end mt-5">
            <button
              className="btn text-white"
              type="submit"
              style={{ width: "124px" }}
            >
              Send Otp
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default InterviewForm;
