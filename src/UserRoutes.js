import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AlertEditDataPoint from "./components/modal/AlertEditDataPoint";

function UserRoutes() {
  return (
    <>
      <Routes>
        {/* USER ROUTES */}
        <Route path="/" element={<Dashboard />} />
        <Route path="downloads" element={<AlertEditDataPoint />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
