import React, { useEffect } from "react";
import AvailableDatapoints from "../../pages/availableDatapoints/AvailableDatapoints";
import ContainerHeading from "../DataPointscontainer/ContainerHeading";
import "./availabledata.css";
import { getDataPoints } from "../../redux/slices/createDataPointsSlice";
import { useDispatch, useSelector } from "react-redux";
const AvailableDataPointsContainer = () => {

  const dispatch = useDispatch();

  const { dataPoints } = useSelector(
    (state) => state.createDataPoints
  );

  useEffect(() => {
    dispatch(getDataPoints());
  },[])

  return (
    <>
      <div className="availabledatacontainer">
        <AvailableDatapoints
          isDataPoint={true}
          isUserGroup={false}
          title={'Available Data Point'}
          totalLength={dataPoints.length > 0 ? dataPoints.length : 0}
          data={dataPoints.length > 0 ? dataPoints : []}
          selected={false}
        />
      </div>
    </>
  );
};

export default AvailableDataPointsContainer;
