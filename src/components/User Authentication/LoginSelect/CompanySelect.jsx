import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../userauthentication.css'

import { IoLogoPinterest } from 'react-icons/io'
import { SiUbisoft } from 'react-icons/si'
import { SiBmcsoftware } from 'react-icons/si'
import LoginImg from '../../../assets/images/login_image1.png';
const CompanySelect = () => {
  return (
    <>
      <section className="container-fluid bg-dark login-section">
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
          <div className="login-left">
            <div className="d-flex flex-column px-5 py-3 bg-white rounded-5 border login-left-inner translate-form gap-4 ">
              <div className="mt-4 py-3 ">
                <h6 className="fs-3 login-success-txt">LOGIN SUCCESSFUL</h6>
                <h6 className="signin-header login-subheading">Choose tenant</h6>
              </div>
              <label
                htmlFor="flexRadioDisabled"
                className="border border-secondary rounded-3 p-3"
              >
                <div class="form-check d-flex align-items-center">
                  <input
                    class="form-check-input select-radio select-checkbox"
                    type="checkbox"
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
                    class="form-check-input select-radio select-checkbox"
                    type="checkbox"
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
                    class="form-check-input select-radio select-checkbox"
                    type="checkbox"
                    name="flexRadioDisabled"
                    id="RadioDisabled"
                  />
                  <SiBmcsoftware className="fs-2 ms-3" />
                  <span class="form-check-label">
                    <span className="ms-2 font-company">Softcity Group</span>
                  </span>
                </div>
              </label>

              <button className="btn btn-primary align-self-start btn-padding rounded-3 continue-btn">
                Continue
              </button>
            </div>
          </div>
          </div>
          <div className="col img-col p-0">
            <img
              src={LoginImg}
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
