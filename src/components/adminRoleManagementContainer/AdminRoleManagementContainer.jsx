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
import { useAlert } from "react-alert";

const rolesData = [
  { id: 'createDatapoint', label: 'Create Data Point' },
  { id: 'viewDatapoint', label: 'View Data Point' },
  { id: 'updateDatapoint', label: 'Update Data Point' },
  { id: 'deleteDatapoint', label: 'Delete Data Point' },

  { id: 'createDataCollection', label: 'Create Collection Template' },
  { id: 'viewDataCollection', label: 'View Collection Template' },
  { id: 'updateDataCollection', label: 'Update Collection Template' },
  { id: 'deleteDataCollection', label: 'Delete Collection Template' },

  { id: 'createCharts', label: 'Create Charts' },
  { id: 'viewCharts', label: 'View Charts' },
  { id: 'updateCharts', label: 'Update Charts' },
  { id: 'deleteCharts', label: 'Delete Charts' },

  { id: 'createDashboard', label: 'Create Dashboard' },
  { id: 'viewDashboard', label: 'View Dashboard' },
  { id: 'updateDashboard', label: 'Update Dashboard' },
  { id: 'deleteDashboard', label: 'Delete Dashboard' },

  { id: 'createUserGroup', label: 'Create User Group' },
  { id: 'viewUserGroup', label: 'View User Group' },
  { id: 'updateUserGroup', label: 'Update User Group' },
  { id: 'deleteUserGroup', label: 'Delete User Group' },
  { id: 'assignUserGroup', label: 'Assign User Group' },

  { id: 'createCompanyUser', label: 'Create Company User' },
  { id: 'viewCompanyUser', label: 'View Company User' },
  { id: 'updateCompanyUser', label: 'Update Company User' },
  { id: 'deleteCompanyUser', label: 'Delete Company User' },

  { id: 'createAdminRoleManagement', label: 'Create Role Management' },
  { id: 'viewAdminRoleManagement', label: 'View Role Management' },
  { id: 'updateAdminRoleManagement', label: 'Update Role Management' },
  { id: 'deleteAdminRoleManagement', label: 'Delete Role Management' },

  { id: 'createCompany', label: 'Create Company' },
  { id: 'viewCompany', label: 'View Company' },
  { id: 'updateCompany', label: 'Update Company' },
  { id: 'deleteCompany', label: 'Delete Company' }
];

export default function AdminRoleManagementContainer() {
  const alert = useAlert();
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
    roles: {
      createDatapoint: false,
      viewDatapoint: false,
      updateDatapoint: false,
      deleteDatapoint: false,

      createDataCollection: false,
      viewDataCollection: false,
      updateDataCollection: false,
      deleteDataCollection: false,

      createCharts: false,
      viewCharts: false,
      updateCharts: false,
      deleteCharts: false,

      createDashboard: false,
      viewDashboard: false,
      updateDashboard: false,
      deleteDashboard: false,

      createUserGroup: false,
      viewUserGroup: false,
      updateUserGroup: false,
      deleteUserGroup: false,
      assignUserGroup: false,

      createCompanyUser: false,
      viewCompanyUser: false,
      updateCompanyUser: false,
      deleteCompanyUser: false,

      createAdminRoleManagement: false,
      viewAdminRoleManagement: false,
      updateAdminRoleManagement: false,
      deleteAdminRoleManagement: false,

      createCompany: false,
      viewCompany: false,
      updateCompany: false,
      deleteCompany: false,
    },
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
  
  const handleRoleChange = (roleName, fieldName, fieldValue) => {
    if (fieldName === 'roleName') {
      setSelectedRoles({ ...selectedRoles, [fieldName]: fieldValue });
    } else if (fieldName === 'selectedRoles') {
      setSelectedRoles({
        ...selectedRoles,
        roles: {
          ...selectedRoles.roles,
          [roleName]: fieldValue,
        },
      });
    }
  };  

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (updateRoleStatus) {
      dispatch(updateRole({ data: selectedRoles, updateId: updateRoleId }));
      alert.show("Update Existing Role Successfully");
    } else {
      dispatch(createRole(selectedRoles));
      alert.show("Create New Role Successfully");
    }
    setUpdateRoleStatus(false);
    setSelectedRoles({
      roleName: '',
      roles: {
        createDatapoint: false,
        viewDatapoint: false,
        updateDatapoint: false,
        deleteDatapoint: false,
  
        createDataCollection: false,
        viewDataCollection: false,
        updateDataCollection: false,
        deleteDataCollection: false,
  
        createCharts: false,
        viewCharts: false,
        updateCharts: false,
        deleteCharts: false,
  
        createDashboard: false,
        viewDashboard: false,
        updateDashboard: false,
        deleteDashboard: false,
  
        createUserGroup: false,
        viewUserGroup: false,
        updateUserGroup: false,
        deleteUserGroup: false,
        assignUserGroup: false,
  
        createCompanyUser: false,
        viewCompanyUser: false,
        updateCompanyUser: false,
        deleteCompanyUser: false,
  
        createAdminRoleManagement: false,
        viewAdminRoleManagement: false,
        updateAdminRoleManagement: false,
        deleteAdminRoleManagement: false,
  
        createCompany: false,
        viewCompany: false,
        updateCompany: false,
        deleteCompany: false,
      }, 
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
    dispatch(deleteRoles({ deleteId: id }));
    navigate(`/admin/check-Users`)
    setShow(false);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  // Change page function
  const handleChangePage = (event, page) => {
    setCurrentPage(page - 1);
  };

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
                data={allRoles.length > 0 ? allRoles?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage) : []}
                handleEdit={handleEditRole}
                handleDelete={handleDeleteRole}
              />
            <PaginationRounded
              currentPage={currentPage}
              itemsPerPage={itemsPerPage}
              totalItems={allRoles?.length || 0}
              onChangePage={handleChangePage}
            />
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
                    <div className="col-4" key={role.id}>
                      <CheckBoxField
                        extra={'mb-3 gap-2'}
                        label={role.label}
                        htmlFor={role.id}
                        required={true}
                        id={role.id}
                        style={{ fontSize: "12px", color: "#8D8D8D" }}
                        checked={selectedRoles.roles[role.id]}
                        onChange={() => handleRoleChange(role.id, 'selectedRoles', !selectedRoles.roles[role.id])}
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
