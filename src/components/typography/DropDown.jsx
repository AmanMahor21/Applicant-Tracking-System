import React from 'react'

const DropDown = ({name , ...rest}) => {
  // console.log(rest)
  return (
    
<>

       
        <div className="appId mb-3">
          <label htmlFor="ReferredBy" className="form-label starIcon">
            Referred By
          </label>
          <select
            name={name}
            id={name}
            className="rounded h-75 pb-1 pt-1 form-select"
            value={rest.formik.values.ReferredBy}
            onChange={rest.formik.handleChange}
          >
            <option value="Select Position">Select Position</option>
            {rest?.options?.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
          {rest.formik.touched.ReferredBy && rest.formik.errors.ReferredBy && (
            <div className="errorMsg text-danger fw-normal mt-2">
              {rest.formik.errors.ReferredBy}
            </div>
          )}
        </div>
    
</>
    
  )
}

export default DropDown