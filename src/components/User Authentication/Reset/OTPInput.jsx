import React from 'react'
import '../userauthentication.css'
import LoginImg from '../../../assets/images/login_image1.png';

const OTPinput = () => {
  const inputsOTP = new Array(4).fill({})
  const handleOTP = function (e, index) {
    let attribute = e.target.getAttribute('datatype')
    if (e.target.value > 0 && index < inputsOTP.length - 1) {
      e.target.nextElementSibling.focus()
      console.log(e.target.value)
    }
    if (e.key === 'Backspace' && index > 0 && e.target.value == '') {
      e.target.previousElementSibling.focus()
    }
  }
  return (
    <>
      <section className="container-fluid bg-dark login-section">
        <div className="row align-items-center">
          <div className="col-lg-3 login-col">
            <div className="login-left">
              <div className="d-flex flex-column px-5 py-5 bg-white rounded-5 border translate-form login-left-inner align-items-center gap-4 ">
                <h6 className="mt-5 py-4 fs-2 signin-header">CONFIRM OTP</h6>
                <div className="otp-box d-flex flex-row justify-content-evenly align-self-stretch">
                  {inputsOTP.map((res, ind) => {
                    return (
                      <input
                        key={ind}
                        type="text"
                        className="form-control border border-secondary bg-white text-secondary otp-input"
                        maxLength={1}
                        datatype={ind}
                        onKeyDown={(e) => handleOTP(e, ind)}
                        onChange={(e) => handleOTP(e, ind)}
                        aria-label="Example text with button addon"
                        aria-describedby="button-addon1"
                      />
                    )
                  })}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary align-self-stretch confirm-btn rounded-3 mb-5 mt-3"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
          <div className="col img-col p-0">
            <img
             src={LoginImg}
             className="img-fluid"
              alt=""
              style={{ width: '100vw', height: '100vh' }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default OTPinput
