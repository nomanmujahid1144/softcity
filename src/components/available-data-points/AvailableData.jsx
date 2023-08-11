import React, { useContext } from "react";
import CreateUserGroup from "./CreateUserGroup";
import "./availabledata.css";
import context from "../../Context/DashboardContext";
import PaginationDefault from "../pagination/PaginationDefault";
import PaginationRounded from "../pagination/PaginationMui";
const AvailableData = () => {
  const datapoints = useContext(context);
  const { dataForm } = datapoints;

  return (
    <>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <CreateUserGroup />
          </div>
          <footer className="border-top bg-white rounded-bottom">
            <div className=" d-flex align-items-center justify-content-between mx-4 ">
              <p className="fs-6 mx-3">Total: {dataForm.length}</p>
              <div className="py-2">
                {/* <PaginationDefault /> */}
                <PaginationRounded />
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default AvailableData;
