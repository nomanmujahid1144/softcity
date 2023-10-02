import React from 'react'
import { Link } from 'react-router-dom'
import '../userauthentication.css'
import { ImFacebook } from 'react-icons/im'
import { TiSocialGooglePlus } from 'react-icons/ti'
import LoginImg from '../../../assets/images/login_image1.png';

const CreateUser = () => {
  return (
    <>
      <section className="container-fluid bg-dark login-section">
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
            <div className="login-left">
            <div className="d-flex flex-column px-5 py-3 bg-white rounded-5 border translate-form login-left-inner align-items-center gap-4 ">
              <h6 className="mt-4 fs-2 signin-header">Create</h6>
              <input
                type="email"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <input
                type="password"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <input
                type="email"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <input
                type="password"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <input
                type="email"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <input
                type="password"
                class="form-control border border-secondary bg-white text-secondary"
                aria-label="Example text with button addon"
                aria-describedby="button-addon1"
              />
              <button className="btn btn-primary align-self-stretch rounded-3 create-btn">
                Create
              </button>
              <div className="d-flex flex-row align-self-stretch justify-content-between">
                <Link to="/accounts/reset-password" className=" signin-links">
                  Forget Password?
                </Link>
                <Link to="/" className=" signin-links">
                  Login to Account
                </Link>
              </div>
              <div className="mt-2 mb-4 pb-5 d-flex flex-row align-self-stretch justify-content-between ">
                <Link className="btn btn-sm btn-primary  signin_facebook fb-btn">
                  <ImFacebook className="fs-6" />
                  <span className="fs-9 ms-2">Login with Facebook</span>
                </Link>
                <Link className="btn btn-sm btn-danger py-1 signin_facebook signin_google google-btn">
                  <TiSocialGooglePlus className="fs-5" />
                  <span className="fs-9 ms-2">Login with Google+</span>
                </Link>
              </div>
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
    </>
  )
}

export default CreateUser
