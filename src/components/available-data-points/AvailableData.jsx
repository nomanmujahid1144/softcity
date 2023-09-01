import React, { useContext, useEffect } from "react";
import CreateUserGroup from "./CreateUserGroup";
import "./availabledata.css";
import context from "../../Context/DashboardContext";
import PaginationDefault from "../pagination/PaginationDefault";
import PaginationRounded from "../pagination/PaginationMui";
import { useDispatch, useSelector } from "react-redux";
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'
const AvailableData = () => {
  const datapoints = useContext(context);
  const { dataForm } = datapoints;

  
  const dispatch = useDispatch();

  const { dataPoints, loading } = useSelector((state) => state.createDataPoints)

  useEffect(() => {
    dispatch(getDataPoints())
  }, [])

  return (
    <>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <CreateUserGroup />
          </div>
          <footer className="border-top bg-white rounded-bottom">
            <div className=" d-flex align-items-center justify-content-between mx-4 ">
              <p className="fs-6 mx-3">Total: {dataPoints.length}</p>
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
