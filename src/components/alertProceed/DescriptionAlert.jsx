import Alert from "react-bootstrap/Alert";
import "./alertProceed.css";
import { BsX } from "react-icons/bs";
import React from "react";
export default function DescriptionAlert({ showDescription, setDescriptionShow, heading, description }) {

  return (
      <>
          <Alert
              show={showDescription}
              variant=""
              className="w-100 h-100 bg-0 d-flex justify-content-center align-items-center position-absolute z-1 top-0 left-0"
          >
            <div className="width-alert bs bg-white rounded-4 p-3 pb-4">
                <div>
                    <div className="d-flex justify-content-end">
                    <button
                        className="rounded border-0 fs-5"
                        onClick={() => setDescriptionShow(false)}
                    >
                        <BsX />
                    </button>
                    </div>

                    <p className="mt-3 fs-5 fw-bold text-start ">
                    {heading}
                    </p>
                            <textarea className="mt-3 fs-5 text-start w-100  text-area form-control"
                            cols="40"
                            rows="5">
                    {description}
                    </textarea>

                    {/* <div className="col-12 mb-4 d-flex justify-content-center ">
                    <div className="blue-line mt-3"></div>
                    </div> */}
                </div>
            </div>
        </Alert>
    </>
  );
}
