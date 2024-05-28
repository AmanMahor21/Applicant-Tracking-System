import React from 'react'

const BigNameInput = ({formik ,  lastName , ...rest}) => {
    // console.log(rest)

  return (
   <>
       <div className="mb-3">
              <label for="formGroupExampleInput" className="form-label starIcon">
                {rest.labelName}
              </label>
              <input
                name={rest.nameAttribute}
                type="text"
                value={formik.values[rest.nameAttribute] }
                className="form-control"
                id="formGroupExampleInput"
                placeholder={rest.labelName}
                onChange={formik.handleChange}
              />

              {formik?.touched?.[rest.nameAttribute] &&
                formik?.errors?.[rest.nameAttribute] && (
                  <div className="text-danger fw-normal">
                    {formik?.errors?.[rest.nameAttribute]}
                  </div>
                )}
            </div>
   </>
  )
}

export default BigNameInput 