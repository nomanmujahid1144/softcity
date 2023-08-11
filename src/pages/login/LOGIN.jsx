import React from "react";
import SignIn from "../../components/User Authentication/SignIn/SignIn";
import CreateUser from "../../components/User Authentication/Create/CreateUser";
import ResetPassword from "../../components/User Authentication/Reset/ResetPassword";
import OTPinput from "../../components/User Authentication/Reset/OTPInput";
import CompanySelect from "../../components/User Authentication/LoginSelect/CompanySelect";

const LOGIN = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/">
          <Route path="/accounts/create" element={<CreateUser />} />
          <Route path="/accounts/reset-password" element={<ResetPassword />} />
          <Route path="/accounts/OTP" element={<OTPinput />} />
          <Route path="/accounts/login/profile" element={<CompanySelect />} />
        </Route>
      </Routes>
    </>
  );
};

export default LOGIN;
