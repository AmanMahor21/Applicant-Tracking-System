import React from 'react'
import { Formik , Form, Field } from 'formik'
import * as yup from "yup"


const page1 = () => {
  let initailValue = {
    AppId :"",
    otp:""
  }

  let validation = yup.object().shape({
    AppId :yup.string().required("Enter Correct Id"),
    otp: yup.string().match
  })
  return (
    <div>
        <Formik>
            <Form>
                <Field type="text" name="AppId" placeholder="Enter Applicant Id (e.g. ZW000001)" className="w-25"/>
                <Field type="text" name="otp" placeholder="999-999-9999" className="w-25" />
            </Form>
        </Formik>
    </div>
  )
}

export default page1