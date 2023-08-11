import React from 'react'
import '../userauthentication.css'

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
      <section className="container-fluid bg-dark">
        <div className="row align-items-center">
          <div className="col-lg-3 ">
            <div className="d-flex flex-column px-5 py-5 bg-white rounded-5 border translate-form  align-items-center gap-4 ">
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
                className="btn btn-primary align-self-stretch rounded-3 mb-5 mt-3"
              >
                Confirm
              </button>
            </div>
          </div>
          <div className="col img-col">
            <img
              src="https://images.unsplash.com/photo-1565728744382-61accd4aa148?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
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
