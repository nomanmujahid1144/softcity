import Alert from "react-bootstrap/Alert";

import { BsX } from "react-icons/bs";
import React from "react";
import "./BarChartModal.css";
export default function AlertEditDataPoint({ show, setShow }) {
  return (
    <>
      <Alert
        className="position-fixed w-100 h-75 d-flex justify-content-center align-items-center"
        show={show}
        variant="light"
      >
        <div className="w-25 bs bg-white rounded-4 p-3 pb-5">
          <div>
            <div>
              <div className="d-flex justify-content-end">
                <button
                  className="rounded border-0 fs-5"
                  onClick={() => setShow(false)}
                >
                  <BsX />
                </button>
              </div>

              <p className="mt-3 fs-4 fw-bold text-center">
                What would you <br /> like to do ?
              </p>

              <div className="col-12 mb-4 d-flex justify-content-center ">
                <div className="blue-line"></div>
              </div>

              <div className="d-flex justify-content-center gap-2">
                <button className="btn btn-primary btn-blue btn-blue rounded-2 border-0 ">
                  Edit Data Point
                </button>
                <button
                  className="btn btn-dark btn-black rounded-2 fs-9 border-0"
                  onClick={() => setShow(false)}
                >
                  Delete Data Point
                </button>
              </div>
            </div>
          </div>
        </div>
      </Alert>
    </>
  );
}
