import React from "react";

import { useContext } from "react";
import Context from "../../Context/DashboardContext";
import Sidebar from "../../shared/sidebar/Sidebar";
import Header from "../../shared/header/Header";
import AdminSidebar from "../../shared/sidebar/AdminSidebar";
import Footer from "../../shared/Footer";
import AppRoutes from "../../AppRoutes";
import Login from "../login/LOGIN";
const DashboardUI = () => {
  const menuMode = useContext(Context);
  const { mode, admin } = menuMode;
  return (
    <>
      <div className="App">
        {/* <Login /> */}
        <Header />
        <div className={`app-main ${mode || "light-mode"}`}>
          {admin ? <AdminSidebar /> : <Sidebar />}
          <div className="app-main__outer ">
            <div className="app-main__inner">
              <AppRoutes />
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardUI;
