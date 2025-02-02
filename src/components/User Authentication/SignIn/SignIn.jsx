import React, { useEffect, useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import "../userauthentication.css";
import { AuthBackground } from "../AuthBackgruond/AuthBackground";
import { AuthCard } from "../AuthCard/AuthCard";
import InputField from "../../fields/InputField";
import { AuthBannerImage } from "../AuthBannerImage/AuthBannerImage";
import { userLogin } from "../../../redux/slices/createUserSlice";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";

const SignIn = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const alert = useAlert();

  const [credentials, setcredentials] = useState({
    email: "",
    password: "",
  });

  const [isAdmin, setISAdmin] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // New state

  useEffect(() => {
    if (location.pathname === '/admin') {
      setISAdmin(true);
    }
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    dispatch(userLogin({data : credentials, navigate, alert, location: location.pathname}));
    // if (isAdmin) {
    // } else {
    //   dispatch(userLogin({data : credentials, navigate, alert, location: location.pathname}));
    // }
  };

  const onChange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  
    // Function to toggle password visibility
    const handlePasswordVisible = () => {
      setShowPassword((prevShowPassword) => !prevShowPassword);
    };

  return (
    <>
      <AuthBackground>
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
            <div className="login-left">
              <form onSubmit={handleSubmit}>
                <AuthCard>
                  <h6 className="mt-5 py-3 fs-2 signin-header">{isAdmin ? 'Admin Login' : "User Login" }</h6>
                  <InputField
                    extra="w-100"
                    extraClasses="form-control border border-secondary bg-white text-secondary"
                    required={true}
                    placeholder="Email"
                    id="email"
                    type="email"
                    value={credentials.email}
                    onChange={onChange}
                  />
                  <InputField
                    extra="w-100 position-relative"
                    extraClasses="form-control  border border-secondary bg-white text-secondary"
                    required={true}
                    placeholder="Password"
                    id="password"
                    isVisible={true}
                    type={showPassword ? "text" : "password"}
                    isPasswordVisible={handlePasswordVisible}
                    value={credentials.password}
                    onChange={onChange}
                  />
                  <div className="d-flex flex-row align-self-stretch justify-content-between">
                    <Link to="/accounts/reset-password" className=" signin-links">
                      Forget Password?
                    </Link>
                    {/* <Link to="/accounts/create" className=" signin-links">
                      Create Account
                    </Link> */}
                  </div>
                  <button type="submit" className="btn mb-5 btn-primary align-self-stretch rounded-3 create-btn" >
                    Login
                  </button>
              {/* <div className="mt-2 mb-5 pb-5 d-flex flex-row align-self-stretch justify-content-between ">
                <Link className="btn btn-sm btn-primary signin_facebook fb-btn">
                  <ImFacebook className="fs-6" />
                  <span className="fs-9 ms-2">Login with Facebook</span>
                </Link>
                <Link className="btn  btn-sm btn-danger py-1 signin_facebook signin_google google-btn">
                  <TiSocialGooglePlus className="fs-5" />
                  <span className="fs-9 ms-2">Login with Google+</span>
                </Link>
              </div> */}
              </AuthCard>
            </form>
          </div>
          </div>
          <AuthBannerImage />
          </div>
        </AuthBackground>
      <Outlet />
    </>
  );
};

export default SignIn;
