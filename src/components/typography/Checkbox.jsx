import React from "react";

const Checkbox = ({ formik, ...rest }) => {
  return (
    <>
      <div className="mb-3 ">
       
        <div class="form-check">
          <input
          name={rest.nameAttribute}
            className="form-check-input"
            type="checkbox"
            value={rest.value}
            id="flexCheckDefault"
            checked={formik.values.checkBox.includes(rest.value)}
            onChange={formik.handleChange}
          />
          <label
            class="form-check-label"
            for="flexCheckDefault"
            style={{ color: "#707070" }}
          >
            {rest.labelName}
          </label>
        </div>
    
      </div>
    </>
  );
};

export default Checkbox;
