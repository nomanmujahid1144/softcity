import React, { useContext, useState, useEffect } from "react";
import "./createAdminContainer.css";
import { BsArrowRight } from "react-icons/bs";
import Context from "../../Context/DashboardContext";
import { useDispatch, useSelector } from "react-redux";
import { createUser, getUser, updateUser } from "./../../redux/slices/createUserSlice";
import InputField from "../fields/InputField";
import SelectionField from "../fields/SelectField";
import { getUserGroups } from "../../redux/slices/UserGroups/UserGroups";
import { getAllRoles } from "../../redux/slices/RolesManagement/roleManagement";
import ReactSelect from "react-select";
import { getUserRole, handleApiError } from "../../constants/helpers";
import { useAlert } from "react-alert";
import { Link, useNavigate, useParams } from "react-router-dom";
import defaultPicture from '../../assets/images/Default.png';
import { baseURL } from "../../constants/baseURL";

export default function CreateAdminContainer() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const alert = useAlert();

  const { id } = useSelector((state) => state.auth);

  const [user, setUser] = useState({});
  const [groups, setGroups] = useState([]);
  const [editGroupsValues, setEditGroupsValues] = useState([]);
  const [editUser, setEditUser] = useState(false);
  const [userRoles, setUserRoles] = useState([]);
  const [isActiveAdministratorRole, setActiveAdministratorRole] = useState(true);

  // Define a state to store filtered suggestions
  const [suggestions, setSuggestions] = useState([]);

  
  const [profileImage, setProfileImage] = useState(null);
  const [profileImagePreview, setProfileImagePreview] = useState(null);
  const [profileImageEdit, setProfileImageEdit] = useState(null);

  // Handle input changes and update suggestions
  const handleInputChange = async (selectedOptions) => {
    // const inputValue = event.target.value;
    setEditGroupsValues(selectedOptions)
    if (selectedOptions.length > 0) { 
      const userRole = await getUserRole(selectedOptions)
      console.log(userRole, 'userRole')
      setActiveAdministratorRole(userRole.isAdmin ? !userRole.isAdmin : true);
      // Update the user state with the userRole property
      setUser({
        ...user,
        role: userRole.userRole
      });
    }
    

    setSuggestions(selectedOptions?.map((option) => option.value))
  };

  const { userGroups } = useSelector(
    (state) => state.userGroups
  );

  const { roles } = useSelector(
    (state) => state.roleManagement
  );
  
  const { singleUser } = useSelector(
    (state) => state.user
  );


  // Funtion to fetch the exect usergroups that saved in my DB foe EDIT-USER
  function findUserGroupById(userGroups, idsToMatch) {
    const matchedUserGroups = [];
  
    for (const idToMatch of idsToMatch) {
      const userGroup = userGroups.find(group => group._id === idToMatch);
      if (userGroup) {
        matchedUserGroups.push({
          userGroup: userGroup,
          value: userGroup._id,
          label: userGroup.GroupName,
        });
      }
    }
  
    return matchedUserGroups;
  }

  // Update User UseEffect Call
  useEffect(() => {
    if (Object.keys(params).length > 0) {
      if (Object.keys(singleUser).length > 0) {
      setEditUser(true);
      setUser({
        firstName: singleUser.firstName,
        lastName: singleUser.lastName,
        email: singleUser.email,
        phoneNumber: singleUser.phoneNumber,
        country: singleUser.country,
        // company: singleUser.company,
        administrativeRole: singleUser.administrativeRole,
        role: singleUser.role,
      });
      setProfileImageEdit(singleUser.profilePhoto);
      const matchedUserGroups = findUserGroupById(userGroups, singleUser.userGroups);
      setSuggestions(matchedUserGroups?.map((option) => option.value));
      setEditGroupsValues(matchedUserGroups);

      }
    } else {
      setEditUser(false);
      setUser({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        country: "",
        company: "",
        administrativeRole: "",
        role: "",
      });
      setProfileImageEdit(null);
      setProfileImage(null);
      setProfileImagePreview(null);
    }
  }, [singleUser, params])

  useEffect(() => {
    if (Object.keys(params).length > 0) {
      const userId = params.id;
      dispatch(getUser({ id: userId }));
    } else {
      dispatch(getUser({ id: null }));
    }
    // else {
    //   setEditUser(false);
    //   setUser({
    //     firstName: "",
    //     lastName: "",
    //     email: "",
    //     phoneNumber: "",
    //     country: "",
    //     company: "",
    //     administrativeRole: "",
    //     role: "",
    //   });
    //   setProfileImageEdit(null);
    //   setProfileImage(null);
    //   setProfileImagePreview(null);
    // }
    dispatch(getAllRoles());
    dispatch(getUserGroups());
  }, []);

  useEffect(() => {
    if (userGroups.length > 0) {
      const subGroupOptions = userGroups.map((userGroup) => ({
        userGroup: userGroup,
        value: userGroup._id,
        label: userGroup.GroupName,
      }));
      setGroups(subGroupOptions);
    }
  }, [userGroups])
  

  useEffect(() => {
    if (roles.length > 0) {
      const rolesOptions = roles.map((role) => ({
        label: role.roleName,
        value: role._id
      }));
      setUserRoles(rolesOptions);
    }
  },[roles])

  const handleSubmit = async (e) => {
    e.preventDefault();
    user.userGroups = suggestions;
    user.companyId = id;
    user.isCompany = false;
    // Check if administrativeRole is empty and remove it if so
    if (user.administrativeRole === "") {
      delete user.administrativeRole;
    }

    // if Edit User is trur it means its an Update request
    if (editUser) {
      dispatch(updateUser({ data: user, profilePhoto: profileImage, userId: params.id, alert })).then((response) => {
        if (response?.payload?.success) {
          navigate('/admin/all-users'); // Replace with your desired path
        }
      });
    } else {
      dispatch(createUser({ data: user, profilePhoto: profileImage, alert })).then((response) => {
        if (response?.payload?.success) {
          navigate('/admin/all-users'); // Replace with your desired path
        }
      });
    }

  };
  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setUser({ ...user, [name]: value });
  };

  const { mode } = useContext(Context);
  return (
    <div
      className={`row text-white rounded-3 d-flex justify-content-center ${
        mode === "dark-mode" ? "text-white" : "text-secondary"
      }`}
    >
      <div className="row mb-5 p-0 d-flex align-items-center style">
        <h5 className="col p-0 fs-4 header-before">{editUser ? "Update User" : "Create New User"}</h5>
        <div className="col p-0 d-flex gap-2 justify-content-end">
          <button
            onClick={handleSubmit}
            className="me-3 py-2 px-3 border-0 bg-blue position-relative bg-blue border-0 rounded-2 text-white fw-lighter fs-7"
          >
            {editUser ? "Update User" : "Create User"}<BsArrowRight />
          </button>
          {(roles == null || roles?.viewCompanyUser) && (
            <Link to='/admin/all-users'>
              <button type="button" className="m-0 py-2 px-3 bg-blue text-white border-0 rounded-2 fw-lighter fs-7">
                View all Users <BsArrowRight />
              </button>
            </Link>
          )}
        </div>
      </div>

      <div className="row col-10 mt-5 p-0 border-0 bg-white rounded-3 fw-bold text-sg container-bs">
        <div className=" mb-5 d-flex justify-content-center">
          <label className='cursor-pointer'>
            <input
              className="d-none form-control form__comapny-description"
              type="file"
              accept="image/*"
              onChange={(event) => {
                setProfileImage(event.currentTarget.files[0]);
                setProfileImagePreview( URL.createObjectURL(event.target.files[0]));
              }}
            />
            <div className="form-control p-0">
              <img
                width={140}
                height={140}
                className="object-fit-cover bg-white rounded-circle m-img"
                src={profileImagePreview ? profileImagePreview : editUser && profileImageEdit ? baseURL + profileImageEdit : defaultPicture}
                alt="Profile"
              />
            </div>
          </label>
        </div>

        <div className="row mt-5 px-6">
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="First Name"
              required={true}
              id="firstName"
              type="text"
              value={user.firstName}
              onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Last Name"
              required={true}
              id="lastName"
              type="text"
              value={user.lastName}
              onChange={onChange}
            />
          </div>
          {/* //// */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Phone"
              required={true}
              id="phoneNumber" 
              type="number"
              value={user.phoneNumber}
              onChange={onChange}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Email"
              required={true}
              id="email"
              type="email"
              value={user.email}
              onChange={onChange}
            />
          </div>
          {/* // */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Country"
              required={true}
              id="country"
              type="text"
              value={user.country}
              onChange={onChange}
            />
          </div>
          {/* <div className="col-6 my-3 mx-0 d-flex flex-column">
            <InputField
              label="Company"
              required={true}
              id="company"
              type="text"
              value={user.company}
              onChange={onChange}
            />
          </div> */}
          {/* ///// */}
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <label className={`form-label fw-semibold fs-7-5`} >
              Assign to User Group(s)
            </label>
            <ReactSelect
              className="form-control form-input-height"
              isMulti
              placeholder="Select one or More User Groups"
              name="userGroups"
              options={groups?.map((usergroup) => ({
                userGroup: usergroup.userGroup,
                value: usergroup.value,
                label: usergroup.label,
              }))} 
              value={editGroupsValues?.map((usergroup) => ({
                  userGroup: usergroup.userGroup,
                  value: usergroup.value,
                  label: usergroup.label,
                })
              )}
              onChange={(selectedOptions) => handleInputChange(selectedOptions)}
            />
          </div>
          <div className="col-6 my-3 mx-0 d-flex flex-column">
            <SelectionField
              label="Assign User Role"
              htmlFor="administrativeRole"
              placeholder="Select a role"
              id="administrativeRole"
              disabled={isActiveAdministratorRole}
              type="text"
              options={userRoles}
              value={user.administrativeRole}
              onChange={onChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
