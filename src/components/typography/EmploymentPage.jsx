import React, { useContext } from "react";
import { appContext } from "../../App";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { FaPlus } from "react-icons/fa6";
import Back_Cont_btn from "./Back_Cont_btn";

const EmploymentPage = ({ formik }) => {
  // const { stepNumber, setStepNumber, addMore, setAddMore } =
  //   useContext(appContext);

  function handleAddMore(e, index) {
    e.preventDefault();
    formik.setFieldValue("companyDetails", [
      ...formik.values.companyDetails,
      {},
    ]);
  }
  const handleRemoveBtn = (e, index) => {
    e.preventDefault();
    formik.setFieldValue(
      "companyDetails",
      formik.values.companyDetails.filter((_, i) => i !== index)
    );
  };

  return (
    <>
      <form
        onSubmit={formik?.handleSubmit}
        className="asddas form flex-grow-1 pt-3"
      >
        <h3 className="stepHeading mb-4 text-decoration-underline ">
          Employment History
        </h3>

        {formik?.values?.companyDetails.map((key, index) => (
          <div key={index}>
            <div className="mb-3">
              <label
                for="formGroupExampleInput"
                className="form-label starIcon"
              >
                Company Name
              </label>
              <input
                name={`companyDetails[${index}].companyName`}
                type="text"
                value={formik.values.companyDetails[index].companyName}
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Company Name"
                onChange={formik.handleChange}
              />

              {formik?.touched?.companyDetails &&
                formik?.errors?.companyDetails?.[index]?.companyName && (
                  <div className="text-danger fw-normal">
                    {formik?.errors?.companyDetails[index]?.companyName}
                  </div>
                )}
            </div>

            <div className="row mb-3">
              <div className="col">
                <label for="inputEmail4" className="form-label starIcon">
                  Duration (From)
                </label>
                <input
                  type="number"
                  name={`companyDetails[${index}].durationFrom`}
                  className="form-control"
                  placeholder="from year"
                  aria-label="duration From"
                  value={formik.values.companyDetails[index].durationFrom}
                  onChange={formik?.handleChange}
                />
                {formik?.touched?.companyDetails &&
                  formik?.errors?.companyDetails?.[index]?.durationFrom && (
                    <div className="text-danger fw-normal">
                      {formik?.errors?.companyDetails[index]?.durationFrom}
                    </div>
                  )}
              </div>
              <div className="col">
                <label for="inputEmail4" className="form-label starIcon">
                  Duration (To)
                </label>

                <input
                  name={`companyDetails[${index}].durationTo`}
                  type="number"
                  className="form-control"
                  placeholder="to year"
                  aria-label="duration To"
                  onChange={formik?.handleChange}
                  value={formik.values.companyDetails[index].durationTo}
                />
                {formik?.touched?.companyDetails &&
                  formik?.errors?.companyDetails?.[index]?.durationTo && (
                    <div className="text-danger fw-normal">
                      {formik?.errors?.companyDetails[index]?.durationTo}
                    </div>
                  )}
              </div>
            </div>

            <div className="mb-3">
              <label
                for="formGroupExampleInput"
                className="form-label starIcon"
              >
                Salary (per Month)
              </label>
              <input
                type="text"
                className="form-control"
                id="formGroupExampleInput"
                placeholder="Per Month salary Amount"
                name={`companyDetails[${index}].salaryPerMonth`}
                onChange={formik?.handleChange}
                value={formik.values.companyDetails[index].salaryPerMonth}
              />
              {formik?.touched?.companyDetails &&
                formik?.errors?.companyDetails?.[index]?.salaryPerMonth && (
                  <div className="text-danger fw-normal">
                    {formik?.errors?.companyDetails[index]?.salaryPerMonth}
                  </div>
                )}
            </div>

            <div className="mb-3">
              <label for="exampleFormControlTextarea1" className="form-label">
                Reason to Change
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Enter your reason to change your last job..."
                name={`companyDetails[${index}].reasonToChange`}
                onChange={formik?.handleChange}
                value={formik.values.companyDetails[index].reasonToChange}
              ></textarea>
              {formik?.touched?.companyDetails &&
                formik?.errors?.companyDetails?.[index]?.reasonToChange && (
                  <div className="text-danger fw-normal">
                    {formik?.errors?.companyDetails[index]?.reasonToChange}
                  </div>
                )}
            </div>
            {index > 1 && (
              <button
                className="btn-danger mt-3 rounded-2 p-2 border-0 bg-danger text-white"
                onClick={(e) => handleRemoveBtn(e, index)}
              >
                Remove
              </button>
            )}
            {<div className="x_axisLine pb-2"></div>}
          </div>
        ))}

        <Back_Cont_btn formik={formik} handleAddMore={handleAddMore} />
      </form>
      <br />
      <br />
      <br />
      <br />
    </>
  );
};

export default EmploymentPage;
