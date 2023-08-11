import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../userauthentication.css'

import { IoLogoPinterest } from 'react-icons/io'
import { SiUbisoft } from 'react-icons/si'
import { SiBmcsoftware } from 'react-icons/si'
const CompanySelect = () => {
  return (
    <>
      <section className="container-fluid bg-dark">
        <div className="row align-items-center">
          <div className="col-lg-3 ">
            <div className="d-flex flex-column px-5 py-3 bg-white rounded-5 border translate-form gap-4 ">
              <div className="mt-4 py-3 ">
                <h6 className="fs-3 ">LOGIN SUCCESSFUL</h6>
                <h6 className="signin-header">Choose tenant</h6>
              </div>
              <label
                htmlFor="flexRadioDisabled"
                className="border border-secondary rounded-3 p-3"
              >
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input select-radio "
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadioDisabled"
                  />
                  <IoLogoPinterest className="fs-2 ms-3" />
                  <span class="form-check-label">
                    <span className="ms-2 font-company">Triconv Limited</span>
                  </span>
                </div>
              </label>
              <label
                htmlFor="flexRadio"
                className="border border-secondary rounded-3 p-3 "
              >
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input select-radio "
                    type="radio"
                    name="flexRadioDisabled"
                    id="flexRadio"
                  />
                  <SiUbisoft className="fs-2 ms-3" />
                  <span class="form-check-label">
                    <span className="ms-2 font-company">Triconv Limited</span>
                  </span>
                </div>
              </label>
              <label
                htmlFor="RadioDisabled"
                className="border border-secondary rounded-3 p-3"
              >
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input select-radio "
                    type="radio"
                    name="flexRadioDisabled"
                    id="RadioDisabled"
                  />
                  <SiBmcsoftware className="fs-2 ms-3" />
                  <span class="form-check-label">
                    <span className="ms-2 font-company">Softcity Group</span>
                  </span>
                </div>
              </label>

              <button className="btn btn-primary align-self-start btn-padding rounded-3">
                Continue
              </button>
            </div>
          </div>
          <div className="col img-col">
            <img
              src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
              class="img-fluid"
              alt=""
              style={{ width: '100vw', height: '100vh' }}
            />
          </div>
        </div>
      </section>
      <Outlet />
    </>
  )
}

export default CompanySelect
