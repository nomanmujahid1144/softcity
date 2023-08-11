import React, { useContext } from "react";
import CreateCollectionTemplate from "../CollectionTemplate/CreateCollectionTemplate";
import AvailableData from "../available-data-points/AvailableData";
import ContainerHeading from "../DataPointscontainer/ContainerHeading";
import Context from "../../Context/DashboardContext";
const CreateUserGroup = () => {
  const { mode } = useContext(Context);
  return (
    <>
      <section>
        <CreateCollectionTemplate
          title={"Create User Groups"}
          assign={false}
          create={true}
        />
        <main>
          <div className={`bg-white my-4 rounded-3 p-4 shadow-sm `}>
            <div className="row gap-3">
              <div className="col-5">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="GroupName"
                >
                  User Group Name
                </label>
                <input
                  class="form-control form-input-height"
                  type="text"
                  id="GroupName"
                  placeholder="Enter User Group Name"
                  aria-label="default input example"
                />
              </div>
              <div className="col-5">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="subGroup"
                >
                  Make Sub Group of
                </label>
                <select
                  class="form-select form-input-height form-select-outline fs-8 text-muted"
                  aria-label="Default select example"
                  id="subGroup"
                >
                  <option selected disabled>
                    Select User Group
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              <div className="col-5">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="subGroup"
                >
                  User Group Type
                </label>
                <div className=" d-flex flex-row gap-3 align-items-baseline form-input-height">
                  <div class="form-check checkbox-label py-2 ">
                    <input
                      class="form-check-input "
                      type="checkbox"
                      value=""
                      id="Data Collectors"
                    />
                    <label class="form-check-label" for=" Data Collectors">
                      Data Collectors
                    </label>
                  </div>
                  <div class="form-check checkbox-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id=" Dashboard Viewers"
                    />
                    <label class="form-check-label" for=" Dashboard Viewers">
                      Dashboard Viewers
                    </label>
                  </div>
                  <div class="form-check checkbox-label">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="Administrators"
                    />
                    <label class="form-check-label" for="Administrators">
                      Administrators
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-5">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="ApprovingOfficer"
                >
                  Assign Approving Officer
                </label>
                <input
                  class="form-control form-input-height"
                  type="text"
                  id="ApprovingOfficer"
                  placeholder="Type to select a user"
                  aria-label="default input example"
                />
              </div>
            </div>
          </div>
        </main>
        <main>
          <ContainerHeading title={"Add Users"} UserGroup={true} />
          <AvailableData />
        </main>
      </section>
    </>
  );
};

export default CreateUserGroup;
