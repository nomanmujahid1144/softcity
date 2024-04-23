import React, { useContext, useEffect, useState } from "react";
import CreateCollectionTemplate from "../CollectionTemplate/CreateCollectionTemplate";
import Context from "../../Context/DashboardContext";
import InputField from "../fields/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import SelectionField from "../fields/SelectField";
import CheckBoxField from "../fields/CheckBoxField";
import { getUserGroup, getUserGroups, updateUserGroup } from "../../redux/slices/UserGroups/UserGroups";
import AvailableDatapoints from "../../pages/availableDatapoints/AvailableDatapoints";
import { getAllUsers } from "../../redux/slices/createUserSlice";
import { useAlert } from "react-alert";
import ReactSelect from "react-select";
const UpdateUserGroup = () => {
  const { selectedUsers, setSelectedUsers, setItems } = useContext(Context);

  const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();
  const alert = useAlert();
  
  const userGroupId = params.id;
  const { id } = useSelector((state) => state.auth);

  const [subGroups, setSubGroups] = useState([]);
  const [approvingOfficers, setApprovingOfficers] = useState([]);
  const [editApprovingOfficers, setEditApprovingOfficers] = useState([]);
  const [approvigOfficersIds, setSelectApprovigOfficersIds] = useState([]);
  const [userGroup, setUserGroup] = useState({
    GroupName: "",
    subGroup: "",
    roles: {
      dataCollectors: false,
      dashboardViewers: false,
      administrators: false,
    },
    users: []
  });

  const { userGroups } = useSelector(
    (state) => state.userGroups
  );
  const { singleUserGroup } = useSelector(
    (state) => state.userGroups
  );
  const { users } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    if (userGroupId) {
      dispatch(getUserGroup(userGroupId))
    }
    dispatch(getAllUsers());
    dispatch(getUserGroups());
  }, []) 
  
  useEffect(() => {
    if (userGroups.length > 0) {
      const subGroupOptions = userGroups.map((userGroup) => ({
        label: userGroup.GroupName,
        value: userGroup._id,
      }));
      setSubGroups(subGroupOptions);
    }
  }, [userGroups])

    // Funtion to fetch the exect usergroups that saved in my DB foe EDIT-USER
    function findUserGroupById(users, idsToMatch) {
      const matchedUserGroups = [];
      if (idsToMatch) {
        for (const idToMatch of idsToMatch) {
          const user = users.find(user => user._id === idToMatch);
          if (user) {
            matchedUserGroups.push({
              label: user.firstName + " " + user.lastName ,
              value: user._id,
            });
          }
        }
      }
    
      return matchedUserGroups;
    }
  
  useEffect(() => {
    if (Object.keys(singleUserGroup).length > 0) {
      const idArray = singleUserGroup?.users?.map(user => user);
      setSelectedUsers(idArray);
      setUserGroup({
        GroupName: singleUserGroup?.GroupName,
        subGroup: singleUserGroup?.subGroup,
        roles: {
          dataCollectors: singleUserGroup?.roles?.dataCollectors,
          dashboardViewers: singleUserGroup?.roles?.dashboardViewers,
          administrators: singleUserGroup?.roles?.administrators,
        },
        users: singleUserGroup?.users
      })
      const matchedUserGroups = findUserGroupById(users, singleUserGroup?.ApprovingOfficers);
      // setSuggestions(matchedUserGroups?.map((option) => option.value));
      setEditApprovingOfficers(matchedUserGroups);
    }
  },[singleUserGroup])
  
  useEffect(() => {
    if (users.length > 0) {
      const approvingOfficers = users.map((user) => ({
        label: user.firstName + " " + user.lastName ,
        value: user._id,
      }));
      setApprovingOfficers(approvingOfficers);
    }
  },[users])

const handleSubmit = async (e) => {
  e.preventDefault();
  userGroup.ApprovingOfficers  = approvigOfficersIds;
  userGroup.users = selectedUsers;
  userGroup.companyId = id;
  dispatch(updateUserGroup({ userGroup, userGroupId, alert })).then((response) => {
    if (response?.payload?.success) {
      navigate('/admin/all-user-groups'); // Replace with your desired path
      setItems([]);
      setSelectedUsers([])
      setUserGroup({
        GroupName: "",
        ApprovingOfficer: "",
        subGroup: "",
        roles: {
          dataCollectors: false,
          dashboardViewers: false,
          administrators: false,
        }
      })
    }
  });

};
  
  
const onChange = (e) => {
  const { name, value, type, checked } = e.target;

  if (type === "checkbox") {
    setUserGroup((prevState) => ({
      ...prevState,
      roles: {
        ...prevState.roles,
        [name]: checked,
      },
    }));
  } else {
    setUserGroup({ ...userGroup, [name]: value });
  }
};

  // Handle input changes and update suggestions
  const handleInputChange = async (selectedOptions) => {
    // const inputValue = event.target.value;
    setEditApprovingOfficers(selectedOptions) 
    setSelectApprovigOfficersIds(selectedOptions?.map((option) => option.value))
  };
  

  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <CreateCollectionTemplate
            title={"Update User Groups"}
            assign={false}
            create={false}
            update={true}
            viewAllLink="/admin/all-user-groups"
          />
          <main>
            <div className={`bg-white my-4 rounded-3 p-4 shadow-sm `}>
                <div className="row gap-3">
                  <div className="col-5">
                    <InputField
                        label="User Group Name"
                        placeholder="Enter User Group Name"
                        required={true}
                        id="GroupName"
                        type="text"
                        value={userGroup.GroupName}
                        onChange={onChange}
                    />
                  </div>
                  <div className="col-5">
                    <SelectionField
                        label="Make Sub Group of"
                        htmlFor="subGroup"
                        placeholder="Select User Group"
                        required={true}
                        id="subGroup"
                        type="text"
                        options={subGroups}
                        value={userGroup.subGroup}
                        onChange={onChange}
                    />
                  </div>
                <div className="col-5">
                  <label className="form-label fw-semibold fs-7-5" htmlFor="subGroup">
                      User Group Type
                  </label>
                  <div className=" d-flex flex-row gap-3 align-items-baseline form-input-height">
                    <CheckBoxField
                      label="Data Collectors"
                      htmlFor="Data Collector"
                      required={true}
                      id="dataCollectors"
                      value={userGroup.roles.dataCollectors}
                      checked={userGroup.roles.dataCollectors}
                      onChange={onChange}
                    />
                    <CheckBoxField
                      label="Dashboard Viewers"
                      htmlFor="Dashboard Viewers"
                      required={true}
                      id="dashboardViewers"
                      value={userGroup.roles.dashboardViewers}
                      checked={userGroup.roles.dashboardViewers}
                      onChange={onChange}
                    />
                    <CheckBoxField
                        label="Administrators"
                        htmlFor="Administrators"
                        required={true}
                        id="administrators"
                        value={userGroup.roles.administrators}
                        checked={userGroup.roles.administrators}
                        onChange={onChange}
                      />
                    </div>
                </div>
                  <div className="col-5 my-3 mx-0 d-flex flex-column">
                    <label className={`form-label fw-semibold fs-7-5`} >
                      Assign Approving Officer
                    </label>
                    <ReactSelect
                      className="form-control form-input-height"
                      isMulti
                      placeholder="Select one or More User Groups"
                      name="userGroups"
                      options={approvingOfficers?.map((usergroup) => ({
                        value: usergroup.value,
                        label: usergroup.label,
                      }))} 
                      value={editApprovingOfficers?.map((usergroup) => ({
                          value: usergroup.value,
                          label: usergroup.label,
                        })
                      )}
                      onChange={(selectedOptions) => handleInputChange(selectedOptions)}
                    />
                  </div>
                  {/* <div className="col-5">
                    <InputField
                        label="Assign Approving Officer"
                        placeholder="Type to select a user"
                        required={true}
                        id="ApprovingOfficer"
                        type="text"
                        value={userGroup.ApprovingOfficer}
                        onChange={onChange}
                    />
                  </div> */}
                </div>
            </div>
          </main>
          <main>
            {users.length > 0 ? 
              <AvailableDatapoints
                title={"Add Users"}
                totalLength={users.length > 0 ? users.length : 0}
                data={users.length > 0 ? users : []}
                isUserGroup={true}
                isDataPoint={false}
                selected={true}
                UpdateSelectedUsers={userGroup?.users?.length > 0  ? userGroup?.users : []}
              />
            : null}
          </main>
        </form>
      </section>
    </>
  );
};

export default UpdateUserGroup;
