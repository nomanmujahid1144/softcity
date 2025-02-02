import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../userauthentication.css'
import { ImFacebook } from 'react-icons/im'
import { TiSocialGooglePlus } from 'react-icons/ti'
import LoginImg from '../../../assets/images/login_image1.png';
import { AuthBackground } from '../AuthBackgruond/AuthBackground'
import { AuthCard } from '../AuthCard/AuthCard'
import InputField from '../../fields/InputField'
import { AuthBannerImage } from '../AuthBannerImage/AuthBannerImage'
const ResetPassword = () => {
  const url = useNavigate()
  return (
    <>
      <AuthBackground>
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
            <div className="login-left">
              <AuthCard>
                <h6 className="mt-5 py-3 fs-2 signin-header">RESET</h6>
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
                <button type='submit' className="btn btn-primary align-self-stretch rounded-3 create-btn" >
                  Reset
                </button>
                <div className="d-flex flex-row mb-5 align-self-stretch justify-content-between">
                  {/* <Link to="/accounts/create" className=" signin-links">
                    Create Account
                  </Link> */}
                  <Link to="/" className="signin-links">
                    Login to Account
                  </Link>
                </div>
                {/* <div className="mt-2 mb-5 pb-5 d-flex flex-row align-self-stretch justify-content-between ">
                  <Link className="btn btn-sm btn-primary  signin_facebook fb-btn">
                    <ImFacebook className="fs-6" />
                    <span className="fs-9 ms-2">Login with Facebook</span>
                  </Link>
                  <Link className="btn  btn-sm btn-danger py-1 signin_facebook signin_google google-btn">
                    <TiSocialGooglePlus className="fs-5" />
                    <span className="fs-9 ms-2">Login with Google+</span>
                  </Link>
                </div> */}
              </AuthCard>
          </div>
          </div>
          
          <AuthBannerImage />
        </div>
      </AuthBackground>
    </>
  )
}

export default ResetPassword
