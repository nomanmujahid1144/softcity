import React from "react";
import "./adminRoleManagementContainer.css";
import { BsArrowRight } from "react-icons/bs";
import AlertProceed from "../alertProceed/AlertProceed";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../Context/DashboardContext";
import Admin_Role_table from "./Admin_Role_table";
import PaginationRounded from "../pagination/PaginationMui";

export default function AdminRoleManagementContainer() {
  const [show, setShow] = useState(true);
  const { mode } = useContext(Context);

  return (
    <>
      <AlertProceed show={show} setShow={setShow} />

      <div className="row m-0 p-0 ">
        <div className="row d-flex gap-5 m-0 mb-4 mt-4 px-4">
          <div
            className={`header-beforeAdmin ${
              mode === "dark-mode" && "text-white"
            } col-5 m-0 p-0 fw-normal fs-5 d-flex align-items-center `}
          >
            <h5 className="mb-0">Role Management</h5>
            <div className="text-sg ms-3 ">Total: 390</div>
          </div>

          <div
            className={` ${
              mode === "dark-mode" && "text-white"
            } col m-0 p-0 fw-normal fs-5 d-flex align-items-center justify-content-between `}
          >
            <h5 className="mb-0 header-beforeAdmin">Create New Role</h5>
            <div>
              <button className="btn btn-primary btn-darkblue">
                Create <BsArrowRight />
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex gap-5">
          <div className="col-5 pe-3 ">
            <Admin_Role_table />
            <div className="py-2 d-flex justify-content-end table-pagination">
              <PaginationRounded />
            </div>
          </div>

          <div className="col p-3 rounded-3 bg-white d-flex flex-column">
            <div className="col m-0 fs-6 fw-bold d-flex flex-column ">
              <label className="form-label fs-6" htmlFor="fName">
                Role Name
              </label>
              <input
                type="text"
                placeholder="Assign Role Name"
                id="fName"
                name="fName"
                className=" form-control rounded border-0 bg-gray py-2 admin-role-input "
              />
            </div>
            <div className="mt-3">
              <label className="form-label fs-6" htmlFor="fName">
                Check Role Features
              </label>
            </div>
            <div className="mt-2 mb-5 d-flex">
              <div className="col">
                <div className="form-check d-flex align-items-center  mb-3 gap-2">
                  <input
                    className="form-check-input border-blue mt-0"
                    type="checkbox"
                    value=""
                    id="dataCollectors"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="dataCollectors"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Data Collectors
                  </label>
                </div>
                <div className="form-check d-flex align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="createDataTemplate"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="createDataTemplate"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Create Data Template
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewDashboard"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewDashboard"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Dashboard
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="editUserGroups"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="editUserGroups"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Edit User Groups
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="suspendDeleteAdmin"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="suspendDeleteAdmin"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Suspend/Delete Admin
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="viewActivityLag"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="viewActivityLag"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    View Activity Lag
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="viewDataTemplate"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="viewDataTemplate"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    View Data Template
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="deleteCharts"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="deleteCharts"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Delete Charts
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="createUserGroups"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="createUserGroups"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Create User Groups
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="createAdmin"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="createAdmin"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Create Admin
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="viewAuthenticationLog"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="viewAuthenticationLog"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    View Authentication Log
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="createDataPoint"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="createDataPoint"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Create Data Point
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="editDeleteTemplate"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="editDeleteTemplate"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Edit/Delete Template
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="assignDashboards"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="assignDashboards"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Assign Dashboards
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="createUser"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="createUser"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Create User
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="createRoles"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="createRoles"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Create Roles
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="dashboardViewers"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="dashboardViewers"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Dashboard Viewers
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="assignDataTemplate"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="assignDataTemplate"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Assign Data Template
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="createDashboards"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="createDashboards"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Create Dashboards
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewUsers"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewUsers"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Users
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="viewRoles"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="viewRoles"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    View Roles
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="viewSessionLog"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="viewSessionLog"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    View Session Log
                  </label>
                </div>
              </div>
              <div className="col">
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input border-blue  mt-0"
                    type="checkbox"
                    value=""
                    id="deleteDataPoints"
                  />
                  <label
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                    for="deleteDataPoints"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle text-sg "
                  >
                    Delete Data Points
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="createCharts"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="createCharts"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Create Charts
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewUserGroups"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewUserGroups"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View User Groups
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewAdmins"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewAdmins"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Admins
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewApprovalTrail"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewApprovalTrail"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Approval Trail
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewDataPoints"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewDataPoints"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Data Points
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="viewCharts"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="viewCharts"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    View Charts
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="editDeleteDashboard"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="editDeleteDashboard"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Edit/Delete Dashboard
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="suspendDeleteUser"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="suspendDeleteUser"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Suspend/Delete User
                  </label>
                </div>
                <div className="form-check d-flex  align-items-center mb-3 gap-2">
                  <input
                    className="form-check-input  mt-0"
                    type="checkbox"
                    value=""
                    id="manageRoles"
                    style={{ borderColor: "#556E8A" }}
                  />
                  <label
                    htmlFor="manageRoles"
                    className="form-check-label p-0 m-0 d-flex justify-content-center align-items-center align-middle "
                    style={{ fontSize: "12px", color: "#8D8D8D" }}
                  >
                    Manage Roles
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
