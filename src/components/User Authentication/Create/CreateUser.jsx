import React from 'react'
import { Link } from 'react-router-dom'
import '../userauthentication.css'
import { ImFacebook } from 'react-icons/im'
import { TiSocialGooglePlus } from 'react-icons/ti'
import LoginImg from '../../../assets/images/login_image1.png';
import { AuthBackground } from '../AuthBackgruond/AuthBackground'
import { AuthCard } from '../AuthCard/AuthCard'
import InputField from '../../fields/InputField'
import { AuthBannerImage } from '../AuthBannerImage/AuthBannerImage'

const CreateUser = () => {
  return (
    <>
      <AuthBackground>
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
            <div className="login-left">
              <AuthCard>
                <h6 className="mt-4 fs-2 signin-header">Create</h6>
                <InputField
                  extra="w-100"
                  extraClasses="form-control border border-secondary bg-white text-secondary"
                  required={true}
                  placeholder="First Name"
                  id="firstName"
                  type="text"
                  // value={user.email}
                  // onChange={onChange}
                />
                <InputField
                  extra="w-100"
                  extraClasses="form-control border border-secondary bg-white text-secondary"
                  required={true}
                  placeholder="Last Name"
                  id="lastName"
                  type="text"
                  // value={user.email}
                  // onChange={onChange}
                />
                <InputField
                  extra="w-100"
                  extraClasses="form-control border border-secondary bg-white text-secondary"
                  required={true}
                  placeholder="Email"
                  id="email"
                  type="email"
                  // value={user.email}
                  // onChange={onChange}
                />
                <InputField
                  extra="w-100"
                  extraClasses="form-control border border-secondary bg-white text-secondary"
                  required={true}
                  placeholder="Password"
                  id="password"
                  type="password"
                  // value={user.password}
                  // onChange={onChange}
                />
                  <button type='submit' className="btn btn-primary align-self-stretch rounded-3 create-btn">
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
              </AuthCard>
            </div>
          
          </div>
          <AuthBannerImage />
        </div>
      </AuthBackground>
    </>
  )
}

export default CreateUser
