import React from "react";

import { useContext } from "react";
import Context from "../../Context/DashboardContext";
import Sidebar from "../../shared/sidebar/Sidebar";
import Header from "../../shared/header/Header";
import AdminSidebar from "../../shared/sidebar/AdminSidebar";
import Footer from "../../shared/Footer";
import AppRoutes from "../../AppRoutes";
import Login from "../login/LOGIN";
import UserRoutes from "../../UserRoutes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserAuth} from "../../redux/slices/authSlice";

const DashboardUI = () => {
  const menuMode = useContext(Context);
  const { mode, admin } = menuMode;

  const dispatch = useDispatch();
  const { authToken, userRole } = useSelector((state) => state.auth);
  
  useEffect(() => {
    const authToken = localStorage.getItem("AUTH_TOKEN");
    if (authToken) {
      dispatch(setUserAuth({ authToken: authToken, userRole:  userRole}));
    }
  }, [authToken]);


  return (
    <>
      <div className="App">
        {authToken ? (
            <>
              <Header />
              <div className={`app-main ${mode || "light-mode"}`}>
                {userRole === 'admin'  ? <AdminSidebar /> : <Sidebar />}
                <div className="app-main__outer ">
                  <div className="app-main__inner">
                  {userRole === 'admin' ?
                    <AppRoutes />
                    :
                    <UserRoutes />
                  }

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
