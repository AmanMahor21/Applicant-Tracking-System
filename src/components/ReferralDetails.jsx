import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useContext } from "react";
import DropDown from "./typography/DropDown";
import TextArea from "./typography/TextArea";
import Back_Cont_btn from "./typography/Back_Cont_btn";
import { appContext } from "../App";


const ReferralDetails = () => {
  let {stepNumber, setStepNumber} = useContext(appContext)
     let referredSchema = Yup.object().shape({
        ReferredBy: Yup.string()
        .required("Required")
        .oneOf(['Current or former colleagues' , 'Friends and family', 'Alumni networks' , 'Recruiters', 'Online communities'] , "Select One"),
     Others:Yup.string()
     .required("Required")
     .min(10 , "Too Short")
     
      })
    let fetchReferred = JSON.parse(localStorage.getItem("ReferredSaved"))
  let formik = useFormik({
    initialValues: fetchReferred || {
      ReferredBy: "",
      Others: "",
    },
    validationSchema : referredSchema,
    onSubmit:(values) =>{
      console.log(values)
      localStorage.setItem("ReferredSaved" , JSON.stringify(values))
      console.log(stepNumber)
      setStepNumber(stepNumber + 1)
    },
  });
  const referredByOptions = [
    "Current or former colleagues",
    "Friends and family",
    "Alumni networks",
    "Recruiters",
    "Online communities"
  ];
  return (
    <>
      <form onSubmit={formik.handleSubmit} className="asddas form flex-grow-1 pt-3 ">
     <h3 className="stepHeading mb-4 text-decoration-underline ">
          Referral Details
        </h3>
        
      <DropDown name="ReferredBy" formik={formik} options={referredByOptions } />
      <TextArea nameAttribute="Others" formik={formik} placeholder="Desciption" labelName={"Others"}/>
     <Back_Cont_btn formik={formik}/>
      </form>
    </>
  );
};

export default ReferralDetails;
