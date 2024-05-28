import React, { useContext } from "react";
import { MdOutlineKeyboardBackspace } from "react-icons/md";
import { appContext } from "../../App";
import { FaPlus } from "react-icons/fa6";

const Back_Cont_btn = ({ formik, handleAddMore }) => {
  const { stepNumber, setStepNumber } = useContext(appContext);

  return (
    <>
      <div>
        {(stepNumber == 7 || stepNumber == 4) && (
          <div className=" d-flex justify-content-end">
            <button
              className="addMoreBtn w-25"
              onClick={(e) => handleAddMore(e)}
            >
              <FaPlus /> <label className="text-md fw-bold">Add More</label>
            </button>
          </div>
        )}
        <div className="buttons w-100 mt-3 d-flex justify-content-between ">
          <button
            className=" backBtn"
            onClick={() => setStepNumber(stepNumber - 1)}
          >
            <MdOutlineKeyboardBackspace /> <label>Back</label>
          </button>
          <button
            className="btn btn-info w-25 text-white "
            type="submit"
            onClick={formik.handleSubmit}
          >
            Continue
          </button>
        </div>
      </div>
    </>
  );
};

export default Back_Cont_btn;
