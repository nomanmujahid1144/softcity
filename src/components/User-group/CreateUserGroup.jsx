import React, { useContext, useEffect, useState } from "react";
import CreateCollectionTemplate from "../CollectionTemplate/CreateCollectionTemplate";
import AvailableData from "../available-data-points/AvailableData";
import ContainerHeading from "../DataPointscontainer/ContainerHeading";
import Context from "../../Context/DashboardContext";
import InputField from "../fields/InputField";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import SelectionField from "../fields/SelectField";
import CheckBoxField from "../fields/CheckBoxField";
import { createUserGroup, getUserGroups } from "../../redux/slices/UserGroups/UserGroups";
const CreateUserGroup = () => {
  const { mode } = useContext(Context);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [subGroups, setSubGroups] = useState([]);
  const [userGroup, setUserGroup] = useState({
    GroupName: "",
    ApprovingOfficer: "",
    subGroup: "",
    roles: {
      dataCollectors: false,
      dashboardViewers: false,
      administrators: false,
    }
  });

  const { userGroups } = useSelector(
    (state) => state.userGroups
  );

  useEffect(() => {
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
  },[userGroups])

const handleSubmit = async (e) => {
  e.preventDefault();
  dispatch(createUserGroup(userGroup));
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


  return (
    <>
      <section>
        <form onSubmit={handleSubmit}>
          <CreateCollectionTemplate
            title={"Create User Groups"}
            assign={false}
            create={true}
          />
          {console.log(subGroups, 'subGroups')}
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
                      onChange={onChange}
                    />
                    <CheckBoxField
                      label="Dashboard Viewers"
                      htmlFor="Dashboard Viewers"
                      required={true}
                      id="dashboardViewers"
                      value={userGroup.roles.dashboardViewers}
                      onChange={onChange}
                    />
                    <CheckBoxField
                        label="Administrators"
                        htmlFor="Administrators"
                        required={true}
                        id="administrators"
                        value={userGroup.roles.administrators}
                        onChange={onChange}
                      />
                    </div>
                  </div>
                  <div className="col-5">
                    <InputField
                        label="Assign Approving Officer"
                        placeholder="Type to select a user"
                        required={true}
                        id="ApprovingOfficer"
                        type="text"
                        value={userGroup.ApprovingOfficer}
                        onChange={onChange}
                    />
                  </div>
                </div>
            </div>
          </main>
          <main>
            <ContainerHeading title={"Add Users"} UserGroup={true} />
            <AvailableData />
          </main>
        </form>
      </section>
    </>
  );
};

export default CreateUserGroup;
