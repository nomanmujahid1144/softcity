import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Context from "../../Context/DashboardContext";
import Sidebar from "../../shared/sidebar/Sidebar";
import Header from "../../shared/header/Header";
import AdminSidebar from "../../shared/sidebar/AdminSidebar";
import Footer from "../../shared/Footer";
import AppRoutes from "../../AppRoutes";
import AllRoutes from "../../AllRoutes";
import Login from "../login/LOGIN";
import UserRoutes from "../../UserRoutes";
import Error from "../Error";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth } from "../../redux/slices/authSlice";
import { useAlert } from "react-alert";

const DashboardUI = () => {
  const menuMode = useContext(Context);
  const { mode } = menuMode;

  const { authToken, userRole } = useSelector((state) => state.auth);

  console.log(userRole, "userRoleuserRoleuserRoleuserRoleuserRoleuserRole");

  return (
    <>
      <div className="App">
        {authToken ? (
          <>
            <Header />
            <div className={`app-main ${mode || "light-mode"}`}>
              {userRole === "admin" ? <AdminSidebar /> : <Sidebar />}
              <div className="app-main__outer">
                <div className="app-main__inner">
                  {(() => {
                    if (userRole === "admin") {
                      return <AppRoutes />;
                    } else if (userRole === "companyUser") {
                      return <UserRoutes />;
                    } else if (userRole === "both") {
                      return <AllRoutes />;
                    }
                  })()}
                </div>
                <Footer />
              </div>
            </div>
          </>
        ) : (
          <Login />
        )}
      </div>
    </>
  );
};

export default DashboardUI;
