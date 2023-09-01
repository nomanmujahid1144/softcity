import React, { useEffect } from "react";
import "./adminRoleManagementContainer.css";
import { BsArrowRight } from "react-icons/bs";
import AlertProceed from "../alertProceed/AlertProceed";
import { useState } from "react";
import { useContext } from "react";
import Context from "../../Context/DashboardContext";
import Admin_Role_table from "./Admin_Role_table";
import PaginationRounded from "../pagination/PaginationMui";
import CheckBoxField from "../fields/CheckBoxField";
import CreateCollectionTemplate from "../CollectionTemplate/CreateCollectionTemplate";
import InputField from "../fields/InputField";
import { useDispatch, useSelector } from "react-redux";
import { createRole, getAllRoles, updateRole, deleteRoles } from "../../redux/slices/RolesManagement/roleManagement";
import DeleteAlert from "../alertProceed/DeleteAlert";
import { useNavigate } from "react-router-dom";

const rolesData = [
  { id: 'dataCollectors', label: 'Data Collectors' },
  { id: 'createDataTemplate', label: 'Create Data Template' },
  { id: 'viewDashboard', label: 'View Dashboard' },
  { id: 'editUserGroups', label: 'Edit User Groups' },
  { id: 'suspendDeleteAdmin', label: 'Suspend/Delete Admin' },
  { id: 'viewActivityLag', label: 'View Activity Lag' },
  { id: 'viewDataTemplate', label: 'View Data Template' },
  { id: 'deleteCharts', label: 'Delete Charts' },
  { id: 'createUserGroups', label: 'Create User Groups' },
  { id: 'createAdmin', label: 'Create Admin' },
  { id: 'viewAuthenticationLog', label: 'View Authentication Log' },
  { id: 'createDataPoint', label: 'Create Data Point' },
  { id: 'editDeleteTemplate', label: 'Edit/Delete Template' },
  { id: 'assignDashboards', label: 'Assign Dashboards' },
  { id: 'createUser', label: 'Create User' },
  { id: 'createRoles', label: 'Create Roles' },
  { id: 'dashboardViewers', label: 'Dashboard Viewers' },
  { id: 'assignDataTemplate', label: 'Assign Data Template' },
  { id: 'createDashboards', label: 'Create Dashboards' },
  { id: 'viewUsers', label: 'View Users' },
  { id: 'viewRoles', label: 'View Roles' },
  { id: 'viewSessionLog', label: 'View Session Log' },
  { id: 'deleteDataPoints', label: 'Delete Data Points' },
  { id: 'createCharts', label: 'Create Charts' },
  { id: 'viewUserGroups', label: 'View User Groups' },
  { id: 'viewAdmins', label: 'View Admins' },
  { id: 'viewApprovalTrail', label: 'View Approval Trail' },
  { id: 'viewDataPoints', label: 'View Data Points' },
  { id: 'viewCharts', label: 'View Charts' },
  { id: 'editDeleteDashboard', label: 'Edit/Delete Dashboard' },
  { id: 'suspendDeleteUser', label: 'Suspend/Delete User' },
  { id: 'manageRoles', label: 'Manage Roles' },
];

export default function AdminRoleManagementContainer() {
  const [show, setShow] = useState(false);
  const [updateRoleStatus, setUpdateRoleStatus] = useState(false);
  const [updateRoleId, setUpdateRoleID] = useState('');
  const [deleteId, setDeleteId] = useState(null)
  const [allRoles, setAllRoles] = useState(true);
  const { mode } = useContext(Context);

  const dispatch = useDispatch();
  const navigate = useNavigate();


  const [selectedRoles, setSelectedRoles] = useState({
    roleName: '', // Initialize roleName
    roles: [], // Initialize selectedRoles
  });

  const { roles } = useSelector(
    (state) => state.roleManagement
  )

  useEffect(() => {
    dispatch(getAllRoles());
  },[dispatch, updateRoleStatus, show, createRole])

  useEffect(() => {
    if (roles.length > 0) {
      setAllRoles(roles)
    }
  },[roles])

  const handleRoleChange = (roleId, fieldName, fieldValue) => {
    if (fieldName === 'roleName') {
      setSelectedRoles({ ...selectedRoles, [fieldName]: fieldValue });
    } else if (fieldName === 'selectedRoles') {
      const { roles } = selectedRoles;
      if (roles.includes(roleId)) {
        const updatedRoles = roles.filter(id => id !== roleId);
        setSelectedRoles({ ...selectedRoles, roles: updatedRoles });
      } else {
        setSelectedRoles({ ...selectedRoles, roles: [...roles, roleId] });
      }
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateRoleStatus) {
      dispatch(updateRole({ data: selectedRoles, updateId: updateRoleId }));
    } else {
      dispatch(createRole(selectedRoles));
    }
    setUpdateRoleStatus(false);
    setSelectedRoles({
      roleName: '', // Initialize roleName
      roles: [], // Initialize selectedRoles
    });
    dispatch(getAllRoles());
  }

  const handleEditRole = (id) => {
    const roleID = allRoles.filter(role => role._id === id);
    setUpdateRoleID(id)
    
    setSelectedRoles({
      roleName: roleID[0].roleName, // Initialize roleName
      roles: roleID[0].roles
    })
    setUpdateRoleStatus(true)
  };

  const handleReset = () => {
    setSelectedRoles({
      roleName: '', // Initialize roleName
      roles: [], // Initialize selectedRoles
    });
    setUpdateRoleStatus(false)
  }

  const handleDeleteRole = (id) => {
    setDeleteId(id)
    setShow(true);
  }

  const deleteRole = (id) => {
    dispatch(deleteRoles({deleteId: id}));
    navigate(`/admin/check-Users`)
    setShow(false);
  }

  return (
    <>
      {/* <AlertProceed show={show} setShow={setShow} /> */}
      <DeleteAlert
        show={show} setShow={setShow}
        heading={'Are you sure to delete this Role?'}
        deleteButton={'Yes'}
        id={deleteId}
        getDeleteId={deleteRole}
      />
      <div className="row m-0 p-0 ">
        <form onSubmit={handleSubmit}>
          <div className="row d-flex gap-5 m-0 mb-4 mt-4 px-4">
            <div className={`header-beforeAdmin ${mode === "dark-mode" && "text-white" } col-5 m-0 p-0 fw-normal fs-5 d-flex align-items-center `} >
              <h5 className="mb-0">Role Management</h5>
              <div className="text-sg ms-3 ">Total: {allRoles?.length > 0 ? allRoles?.length  : 0}</div>
            </div>
            <div
              className={` ${
                mode === "dark-mode" && "text-white"
              } col m-0 p-0 fw-normal fs-5 d-flex align-items-center justify-content-between `}
            >
              <h5 className="mb-0 header-beforeAdmin">Create New Role</h5>
              <div>
                {updateRoleStatus ? 
                  <>
                    <button type="submit" className="btn btn-primary btn-darkblue">
                      Update <BsArrowRight />
                    </button>
                    <button onClick={handleReset} type="submit" className="btn btn-primary btn-darkblue">
                      Reset <BsArrowRight />
                    </button>
                  </>
                :
                  <button type="submit" className="btn btn-primary btn-darkblue">
                    Create <BsArrowRight />
                  </button>
                }
              </div>
            </div>
          </div>

          <div className="d-flex gap-5">
          <div className="col-5 pe-3 ">
              <Admin_Role_table
                data={allRoles.length > 0 ? allRoles : []}
                handleEdit={handleEditRole}
                handleDelete={handleDeleteRole}
              />
            <div className="py-2 d-flex justify-content-end table-pagination">
              <PaginationRounded />
            </div>
          </div>

          <div className="col p-3 rounded-3 bg-white d-flex flex-column">
            <div className="col m-0 fs-6 fw-bold d-flex flex-column ">
              <label className="form-label fs-6" htmlFor="fName">
                Role Name
                </label>
                <InputField
                  extra='pt-0'
                  placeholder="Assign Role Name"
                  required={true}
                  id="roleName"
                  type="text"
                  value={selectedRoles.roleName}
                  onChange={(e) => handleRoleChange(null, 'roleName', e.target.value)}
                />
            </div>
            <div className="mt-3">
              <label className="form-label fs-6" htmlFor="fName">
                Check Role Features
              </label>
            </div>
            <div className="mt-2 mb-5 d-flex">
              <div className="row d-flex justify-content-between">
                {rolesData.map(role => (
                    <div className="col-4">
                      <CheckBoxField
                        extra={'mb-3 gap-2'}
                        label={role.label}
                        htmlFor={role.label}
                        required={true}
                        id={role.id}
                        style={{ fontSize: "12px", color: "#8D8D8D" }}
                        checked={selectedRoles.roles.includes(role.id)}
                        onChange={() => handleRoleChange(role.id, 'selectedRoles')}
                      />
                    </div>
                ))}
              </div>
            </div>
          </div>
          </div>
        </form>
      </div>
    </>
  );
}
