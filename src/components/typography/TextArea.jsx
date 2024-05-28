import React from "react";

const TextArea = ({ formik, placeholder, ...rest }) => {
  // console.log(rest)

  return (
    <>
      <div className="mb-3">
        <label
          for="exampleFormControlTextarea1"
          className="form-label starIcon"
        >
          {rest.labelName}
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={rest.row}
          placeholder={placeholder}
          name={rest.nameAttribute}
          onChange={formik?.handleChange}
          value={formik.values[rest.nameAttribute]}
        ></textarea>
        {formik?.touched?.[rest.nameAttribute] &&
          formik?.errors?.[rest.nameAttribute] && (
            <div className="text-danger fw-normal">
              {formik?.errors?.[rest.nameAttribute]}
            </div>
          )}
      </div>
    </>
  );
};

export default TextArea;
