// import React from 'react'

// const Small_InputBox = ({formik  , placeHolder , ReferenceData}) => {
//   return (
//     <>
//     <div className="row ">
//           <div className="col">
//             <label for="inputEmail4" className="form-label">
//               First Name
//             </label>
//             <input
//               type="text"
//               name={`ReferenceData[${index}].FirstName`}
//               className="form-control"
//               placeholder={placeHolder}
//               aria-label="First name"
//               value={formik.values.ReferenceData[index].FirstName}
//               onChange={formik.handleChange}
//             />
//             {formik.touched.ReferenceData && formik.errors.ReferenceData.[index].FirstName (
//               <div className="text-danger fw-normal">
//                 {formik.errors.firstName}
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//           <div className="col">
//             <label for="inputEmail4" className="form-label">
//               Mobile Number
//             </label>

//             <input
//               name="mobileNO"
//               type="text"
//               className="form-control"
//               onChange={formik.handleChange}
//               placeholder="999-999-9999"
//               aria-label="Last name"
//               value={formik.values.mobileNO}

//             />
//             {formik.touched.mobileNO && formik.errors.mobileNO ? (
//               <div className="text-danger fw-normal">
//                 {formik.errors.mobileNO}
//               </div>
//             ) : (
//               ""
//             )}
//           </div>
//         </div>
//     </>
//   )
// }

// export default Small_InputBox
