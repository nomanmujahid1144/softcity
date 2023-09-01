import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import AdminRole from "./components/tables/admins/AdminRole";
import AvailableDatapoints from "./pages/availableDatapoints/AvailableDatapoints";
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

function AppRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />

        <Route path="downloads" element={<AlertEditDataPoint />} />
        <Route path="admin" element={<Welcome />} />

        {/* Data Points Routes */}
        <Route path="admin/create-datapoint" element={<Create_Data_Points />} />
        <Route path="admin/Assigned/data-point" element={<Available_datapoints_table />} />
        <Route path="admin/update-datapoint/:id" element={<Update_Data_Points />} />
        <Route path="admin/datapoints" element={<AvailableDataPointsContainer />} />

        
        <Route path="admin/admin-role" element={<MultiColDataCollection />} />
        <Route path="admin/collections" element={<Collections />} />
        
        {/* CREATE ADMIN USER ROUTES */}
        <Route path="admin/createUser" element={<CreateAdmin />} />
        <Route path="admin/check-Users" element={<AdminRoleManagementContainer />} />

        
        <Route path="admin/dashboard" element={<Dashboard />} />
        <Route path="admin/users/profile" element={<UserAssigned />} />
        <Route path="admin/userGroup/admin-role" element={<UserGroup />} />
        <Route path="admin/users/account" element={<Users />} />
        <Route path="admin/register" element={<AvailableDataPoints />} />
        <Route path="admin/accounts" element={<AdminsTable />} />

        {/* Collection Template Routes */}
        <Route path="admin/create" element={<CreateTemplateMain />} />
        <Route path="admin/reorder-collection-elements" element={<Reorder_Collection_Elements />} />
        <Route path="admin/collection-templates" element={<Collection_Templates_Comp />} />

        {/* USER-GROUPS ROUTES */}
        <Route path="admin/create-user-group" element={<CreateUserGroup />} />
        <Route path="admin/all-user-groups" element={<AllUserGroups />} />

        <Route path="admin/AssignTemplate" element={<AssignDataCollTemplate />}/>
        <Route path="admin/Scollections" element={<SingleColDataCollection />} />
        <Route path="admin/all-users" element={<AllUsers />} />
        <Route path="admin/create-data-charts" element={<CreateDataCharts />} />
        <Route path="admin/all-available-elements" element={<All_Available_Elements />} />
        <Route path="admin/all-dashboards" element={<All_Dashboard />} />
        <Route path="admin/createdashboard" element={<CreateDashboard />} />
        <Route path="admin/company/createCompany" element={<CreateCompany />} />
        <Route path="admin/company/manage" element={<ManageCompanyProfile />} />
        <Route path="admin/company/Company-Users" element={<AllAdminTable />} />
        <Route
          path="admin/company/all-companies"
          element={<AllCompaniesTable />}
        />
        <Route path="admin/notifications" element={<Notifications />} />
        <Route path="/accounts/create" element={<CreateUser />} />
        <Route path="/accounts/reset-password" element={<ResetPassword />} />
        <Route path="/accounts/OTP" element={<OTPinput />} />
        <Route path="/accounts/login/profile" element={<CompanySelect />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
