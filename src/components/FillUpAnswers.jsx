import { useFormik } from "formik";
import React, { useContext } from "react";
import * as Yup from "yup";
import BigNameInput from "./typography/BigNameInput";
import TextArea from "./typography/TextArea";
import Back_Cont_btn from "./typography/Back_Cont_btn";
import Checkbox from "./typography/Checkbox";
import { appContext } from "../App";

const FillUpAnswers = () => {
  const { setStepNumber, stepNumber } = useContext(appContext);

  let fetchLastName = JSON.parse(localStorage.getItem("submittedValues"));
  let fetchfillUpSave = JSON.parse(localStorage.getItem("fillUpSave"));

  let FillUpSchema = Yup.object().shape({
    lastName: Yup.string()
      .required("Required")
      .oneOf([fetchLastName.lastName], "Must be Same as before"),

    checkBox: Yup.array()
      .min(1, "At least one Required")
      .max(1, "Select only one"),

    managementPerformance: Yup.string()
      .required("Required")
      .min(30, " Explain in Detail"),
    othersComments: Yup.string().required("Required").min(10, " Too short"),
  });

  let formik = useFormik({
    initialValues: fetchfillUpSave || {
      lastName: "",
      managementPerformance: "",
      othersComments: "",
      checkBox: [],
    },
    validationSchema: FillUpSchema,
    onSubmit: (values) => {
      localStorage.setItem("fillUpSave", JSON.stringify(values));
      setStepNumber(stepNumber + 1);
    },
  });

  let labelName =
    "What can the top management do to help improve work performance? Comment Breifely below";
  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="asddas form flex-grow-1 pt-3"
      >
        <h3 className="stepHeading mb-4 text-decoration-underline ">
          Fill up answers
        </h3>
        <BigNameInput
          labelName="Last Name"
          nameAttribute="lastName"
          formik={formik}
          placeholder="lastName"
        />
        <label
          for="exampleFormControlTextarea1"
          className="form-label starIcon"
        >
          How well do you work with your colleagues?
        </label>
        <Checkbox
          labelName="Unsatisfactory"
          nameAttribute="checkBox"
          value="Unsatisfactory"
          formik={formik}
        />
        <Checkbox
          labelName="Poor"
          nameAttribute="checkBox"
          value="Poor"
          formik={formik}
        />
        <Checkbox
          labelName="Fair"
          nameAttribute="checkBox"
          value="Fair"
          formik={formik}
        />
        <Checkbox
          labelName="Good"
          value="Good"
          nameAttribute="checkBox"
          formik={formik}
        />
        <Checkbox
          labelName="Excellent"
          value="Excellent"
          nameAttribute="checkBox"
          formik={formik}
        />
        <Checkbox
          labelName="Not Applicable"
          nameAttribute="checkBox"
          value="Not Applicable"
          formik={formik}
        />
        {formik?.touched?.checkBox && formik?.errors?.checkBox && (
          <div className="text-danger fw-normal mb-3 mt-0">
            {formik?.errors?.checkBox}
          </div>
        )}

        <TextArea
          labelName={labelName}
          row="3"
          nameAttribute="managementPerformance"
          formik={formik}
          placeholder="Desciption"
        />
        <TextArea
          labelName="Other Comments"
          row="2"
          nameAttribute="othersComments"
          formik={formik}
          placeholder="Desciption"
        />
        <Back_Cont_btn formik={formik} />
        <br />
        <br />
        <br />
        <br />
        <br />
      </form>
    </>
  );
};

export default FillUpAnswers;
