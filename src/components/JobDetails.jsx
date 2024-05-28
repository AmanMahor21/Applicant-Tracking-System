import React, { useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { appContext } from "../App";

const jobPositionSchema = Yup.object().shape({
  jobPosition: Yup.string()
  .required("Required")
  .oneOf(
    [
      "Software Developer",
      "Web Developer",
      "Mobile App Developer",
      "Systems Administrator",
    ],
    "Select Job Position"
  ),
});
const JobDetails = () => {
  const { setStepNumber, stepNumber } = useContext(appContext);
  const formik = useFormik({
    initialValues: {
      jobPosition: localStorage.getItem("jobPosition") || "",
    },

    validationSchema: jobPositionSchema,
    onSubmit: (values) => {
      console.log(values);
      setStepNumber(stepNumber + 1);
      localStorage.setItem("jobPosition", values.jobPosition);
      console.log(stepNumber);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className="form flex-grow-1">
      <div className="mb-3 col">
        <h3 className="stepHeading mb-4 text-decoration-underline">Job details</h3>
        <div className="  inputCon">
          <div className="appId w-100">
            <label for="jobPosition" className="form-label starIcon">
              Job Position
            </label>
            <select
              name="jobPosition"
              id="jobPosition"
              className="rounded h-75 pb-1 pt-1 form-select"
              value={formik.values.jobPosition}
              onChange={formik.handleChange}
            >
              <option value="Select Position">Select Position</option>
              <option value="Software Developer">Software Developer</option>
              <option value="Web Developer">Web Developer</option>
              <option value="Mobile App Developer">Mobile App Developer</option>
              <option value="Systems Administrator">
                Systems Administrator
              </option>
            </select>
            {formik.touched.jobPosition && formik.errors.jobPosition ? (
              <div className="errorMsg text-danger fw-norma mt-2">
                {formik.errors.jobPosition}
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="sendOtpDiv w-100 text-end mt-5">
          <button className="btn text-white" type="submit" style={{width:"124px"}}>
            Continue
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobDetails;
