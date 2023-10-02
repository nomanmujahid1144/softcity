import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Error from "./pages/Error";
import AlertEditDataPoint from "./components/modal/AlertEditDataPoint";

function UserRoutes() {
  return (
    <>
      <Routes>
        {/* USER ROUTES */}
        <Route path="*" element={<Navigate to="/error/admin" replace />} />
        <Route path="/error/:name" element={<Error />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="downloads" element={<AlertEditDataPoint />} />
      </Routes>
    </>
  );
}

export default UserRoutes;
