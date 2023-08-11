import React from "react";
import AvailableDatapoints from "../../pages/availableDatapoints/AvailableDatapoints";
import ContainerHeading from "../DataPointscontainer/ContainerHeading";
import "./availabledata.css";
const AvailableDataPointsContainer = () => {
  return (
    <>
      <div className="availabledatacontainer">
        <div>
          <ContainerHeading title={"Select Available Data Point"} />
        </div>
        <AvailableDatapoints />
      </div>
    </>
  );
};

export default AvailableDataPointsContainer;
