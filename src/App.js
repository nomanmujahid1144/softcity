import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

import DashboardUI from "./pages/UI/DashboardUI";
// import CreateUser from "./components/User Authentication/Create/CreateUser";
// import ResetPassword from "./components/User Authentication/Reset/ResetPassword";
// import OTPinput from "./components/User Authentication/Reset/OTPInput";
// import CompanySelect from "./components/User Authentication/LoginSelect/CompanySelect";

function App() {
  return (
    <>
      <Router>
        {/* <Routes>
          <Route path="/accounts/create" element={<CreateUser />} />
          <Route path="/accounts/reset-password" element={<ResetPassword />} />
          <Route path="/accounts/OTP" element={<OTPinput />} />
          <Route path="/accounts/login/profile" element={<CompanySelect />} />
        </Routes> */}
        <DashboardUI />
      </Router>
    </>
  );
}

export default App;
