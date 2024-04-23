import Alert from "react-bootstrap/Alert";
import "./alertProceed.css";
import { BsX } from "react-icons/bs";
import React from "react";
export default function DeleteAlert({ show, setShow, heading, deleteButton, id, getDeleteId }) {

    const handleDeleteClick = () => {
        getDeleteId(id);
    }

  return (
    <>
      <Alert
        show={show}
        variant=""
        className="w-100 h-100 bg-0 d-flex justify-content-center align-items-center position-absolute z-1 top-0 left-0"
      >
        <div className="width-alert bs bg-white rounded-4 p-3 pb-4">
          <div>
            <div className="d-flex justify-content-end">
              <button
                className="rounded border-0 fs-5"
                onClick={() => setShow(false)}
              >
                <BsX />
              </button>
            </div>

            <p className="mt-3 fs-5 fw-bold text-center ">
              {heading}
            </p>

            <div className="col-12 mb-4 d-flex justify-content-center ">
              <div className="blue-line mt-3"></div>
            </div>

            <div className="d-flex justify-content-center gap-2">
              <button className="btn-blue rounded-2 border-0 px-3" onClick={handleDeleteClick}>
                {deleteButton}
              </button>
              <button
                className="btn-black rounded-2 border-0 px-3"
                onClick={() => setShow(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </Alert>
    </>
  );
}
