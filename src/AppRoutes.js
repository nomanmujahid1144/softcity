import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Collections from "./pages/collections/Collections";
import UserAssigned from "./components/tables/users/UserAssigned";
import UserGroup from "./components/tables/users/UserGroup";
import Users from "./components/tables/users/Users";
import CreateAdmin from "./pages/createAdmin/CreateAdmin";
import AvailableDataPoints from "./components/tables/data-points/AvailableDataPoints";
import AdminsTable from "./components/tables/admins/Admins";
import SingleColDataCollection from "./components/single-column-data-collection/SingleColDataCollection";
import AssignDataCollTemplate from "./components/assign-data-collection-template/AssignDataCollTemplate";
import AdminRoleManagementContainer from "./components/adminRoleManagementContainer/AdminRoleManagementContainer";
import CreateTemplateMain from "./components/CollectionTemplate/CreateTemplateMain";
import Error from "./pages/Error";

import CreateUserGroup from "./components/User-group/CreateUserGroup";

import AllUserGroups from "./pages/AllUserGroups";
import AllUsers from "./pages/AllUsers";
import AlertEditDataPoint from "./components/modal/AlertEditDataPoint";
import Create_Data_Points from "./components/create-data-points/Create_Data_Points";
import Update_Data_Points from "./components/create-data-points/Update_Data_Points";
import AvailableDataPointsContainer from "./components/available-data-points/AvailableDataPointsContainer";
import Collection_Templates_Comp from "./components/collection-templates/Collection_Templates_Comp";
import Available_datapoints_table from "./pages/availableDatapoints/Available_datapoints_table";
import MultiColDataCollection from "./components/multiple-col-data-collection/MultiColDataCollection";
import Reorder_Collection_Elements from "./components/Reorder-Collection-Elements/Reorder_Collection_Elements";
import CreateDataCharts from "./components/create-data-charts/CreateDataCharts";
import All_Available_Elements from "./components/all-available-elements";
import All_Dashboard from "./components/all-dashboard/All_Dashboard";
import CreateAdminContainer from "./components/createAdminContainer/CreateAdminContainer";
import CreateDashboard from "./components/AdminDashboard/CreateDashboard";
import CreateCompany from "./components/User Authentication/Company/CreateCompany";
import ManageCompanyProfile from "./components/User Authentication/Company/ManageCompanyProfile";
import AllCompaniesTable from "./components/User Authentication/Company/AllCompaniesTable";
import AllAdminTable from "./components/AdminDashboard/adminTable/AllAdminTable";
import Welcome from "./components/AdminDashboard/WElcome/Welcome";
import CreateUser from "./components/User Authentication/Create/CreateUser";
import ResetPassword from "./components/User Authentication/Reset/ResetPassword";
import OTPinput from "./components/User Authentication/Reset/OTPInput";
import CompanySelect from "./components/User Authentication/LoginSelect/CompanySelect";
import Notifications from "./pages/Notifications";
import UpdateTemplateMain from "./components/CollectionTemplate/UpdateTemplateMain";
import UpdateUserGroup from "./components/User-group/UpdateUserGroup";

function AppRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path={"*"} element={<Navigate to="/error/admin" replace />} />
        <Route path="/error/:name" element={<Error />} /> */}
        <Route path="admin" element={<Welcome />} />

        {/* Data Points Routes */}
        <Route path="admin/create-datapoint" element={<Create_Data_Points />} />
        <Route path="admin/datapoints" element={<AvailableDataPointsContainer />} />
        <Route path="admin/all-datapoints" element={<Available_datapoints_table />} />
        <Route path="admin/update-datapoint/:id" element={<Update_Data_Points />} />
        
        {/* Collection Template Routes */}
        <Route path="admin/create-datacollection" element={<CreateTemplateMain />} />
        <Route path="admin/collection-templates" element={<Collection_Templates_Comp />} />
        <Route path="admin/update-datacollection/:id" element={<UpdateTemplateMain />} />
        <Route path="admin/assign-datacollection-template" element={<AssignDataCollTemplate />}/>
        <Route path="admin/reorder-collection-elements/:id" element={<Reorder_Collection_Elements />} />
        
        {/* Chart Routes */}
        <Route path="admin/create-data-charts" element={<CreateDataCharts />} />
        <Route path="admin/all-available-elements" element={<All_Available_Elements />} />
        
        {/* Dashboard Routes */}
        <Route path="admin/createdashboard" element={<CreateDashboard />} />
        <Route path="admin/all-dashboards" element={<All_Dashboard />} />
        
        {/* USER-GROUPS ROUTES */}
        <Route path="admin/create-usergroup" element={<CreateUserGroup />} />
        <Route path="admin/update-usergroup/:id" element={<UpdateUserGroup />} />
        <Route path="admin/all-usergroups" element={<AllUserGroups />} />

        {/* ROLE MANAGEMENT */}
        <Route path="admin/roles-management" element={<AdminRoleManagementContainer />} />
        
        {/* CREATE ADMIN USER ROUTES */}
        <Route path="admin/create-user" element={<CreateAdmin />} />
        <Route path="admin/update-user/:id" element={<CreateAdmin />} />
        <Route path="admin/all-users" element={<AllUsers />} />
        
        {/* COMPANY DETAILS */}
        <Route path="admin/create-company" element={<CreateCompany />} />
        <Route path="admin/update-company/:id" element={<CreateCompany />} />
        <Route path="admin/all-companies" element={<AllCompaniesTable />} />

        <Route path="admin/company/Company-Users" element={<AllAdminTable />} />
        <Route path="admin/company/manage" element={<ManageCompanyProfile />} />
        
        {/* Notification Route */}
        <Route path="admin/notifications" element={<Notifications />} />

        {/* Profile Route */}
        <Route path="/accounts/create" element={<CreateUser />} />
        <Route path="/accounts/reset-password" element={<ResetPassword />} />
        <Route path="/accounts/OTP" element={<OTPinput />} />
        <Route path="/accounts/login/profile" element={<CompanySelect />} />



        
        {/* <Route path="admin/admin-role" element={<MultiColDataCollection />} /> */}

        {/* Data Fields For User Display to submit Data */}
        <Route path="admin/collections" element={<Collections />} />
        {/* User Dashboard */}
        <Route path="admin/dashboard" element={<Dashboard />} />

        <Route path="admin/users/profile" element={<UserAssigned />} />
        <Route path="admin/userGroup/admin-role" element={<UserGroup />} />
        {/* <Route path="admin/users/account" element={<Users />} /> */}
        {/* <Route path="admin/register" element={<AvailableDataPoints />} /> */}
        {/* <Route path="admin/accounts" element={<AdminsTable />} /> */}
      </Routes>
    </>
  );
}

export default AppRoutes;
