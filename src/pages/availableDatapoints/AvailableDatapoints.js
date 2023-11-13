import React, { useContext, useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import AvailableDataPoints from "../../components/available-data-points/AvailableData";
import Context from "../../Context/DashboardContext";
import { CiSearch } from "react-icons/ci";
import { BsArrowRight } from "react-icons/bs";
import CreateUserGroup from "../../components/available-data-points/CreateUserGroup";
import PaginationRounded from "../../components/pagination/PaginationMui";
import DataPoint from "../../components/available-data-points/data-point/DataPoint";
import UserPoint from "../../components/available-data-points/data-point/UserPoint";

function AvailableDatapoints({
  title,
  isUserGroup,
  isDataPoint,
  totalLength,
  data,
  selected,
  UpdateSelectedDataPoints,
}) {
  const finalData = useContext(Context);  
  const [handleRefresh, setHandleRefresh] = useState(false);
  const { mode, selectedDataPoints, setSelectedDataPoints, setSelectedUsers } =
    finalData;
  const [alreadySelectedList, setAlreadySelectedList] = useState([]);

  useEffect(() => {
    setSelectedDataPoints([]);
    setSelectedUsers([]);
  }, []);

  useEffect(() => {
    if (UpdateSelectedDataPoints?.length > 0) {
      const updatedDataList = data.map((data) => {
        const newData = { ...data, selected: false };

        const matchingDataPoint = UpdateSelectedDataPoints.find(
          (updateData) => updateData.dataPointName === data.dataPointName
        );

        if (matchingDataPoint) {
          newData.selected = true;
          setAlreadySelectedList((prevList) => [
            ...prevList,
            matchingDataPoint._id,
          ]);
        }

        return newData;
      });

      data = updatedDataList;
    }
  }, [UpdateSelectedDataPoints]);

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh)
  };


  const handleClickTabs = async (e, arg) => {
    // Create a new array with updated 'selected' values
    const updatedData = data.map((item) => {
      if (item._id === arg._id) {
        // Toggle the 'selected' property
        const updatedItem = { ...item, selected: !item.selected };

        if (!updatedItem.selected) {
          // Remove the ID if 'selected' is true
          setSelectedDataPoints((prevDataPoints) =>
            prevDataPoints.filter((id) => id !== arg._id)
          );
        } else {
          // Add the ID if 'selected' is false
          setSelectedDataPoints((prevDataPoints) => [
            ...prevDataPoints,
            arg._id,
          ]);
        }

        return updatedItem;
      }
      return item;
    });

    // Update the 'data' variable with the new array
    data = updatedData;
  };

  const handleClickUsersTabs = async (e, arg) => {
    console.log("Hi");
    // Create a new array with updated 'selected' values
    const updatedData = data.map((item) => {
      if (item._id === arg._id) {
        // Toggle the 'selected' property
        const updatedItem = { ...item, selected: !item.selected };

        if (!updatedItem.selected) {
          // Remove the ID if 'selected' is true
          setSelectedUsers((prevDataPoints) =>
            prevDataPoints.filter((id) => id !== arg._id)
          );
        } else {
          // Add the ID if 'selected' is false
          setSelectedUsers((prevDataPoints) => [...prevDataPoints, arg._id]);
        }

        return updatedItem;
      }
      return item;
    });

    // Update the 'data' variable with the new array
    data = updatedData;
  };

  return (
    <>
      <div className="Availabledata py-3">
        <div
          className={`${
            mode === "dark-mode" ? "text-white" : "text-dark"
          } d-flex w-100 align-data-center gap-4 flex-column flex-xl-row flex-lg-row flex-md-row`}
        >
          <div className="d-flex align-data-center gap-3">
            <h5 className="header-beforeAdmin fs-5 mb-0">{title}</h5>
            <p className="fs-7 total text-muted">Total: {totalLength}</p>
          </div>
          <div className="d-flex  align-data-center justify-content-end flex-column flex-xl-row flex-lg-row flex-md-row margin-left gap-4 w-50">
            <div className="border bg-white primary-inputs d-flex align-data-center rounded search-bar">
              <span className="px-2">
                <CiSearch className="search-icon" />
              </span>
              <Form.Control
                placeholder="Search"
                className="border-0 input primary-inputs bg-white "
              />
            </div>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="second-conatiner">
          <div className="backgroud-right">
            <main className="d-flex flex-column bg-white rounded-top py-3 px-2 shadow-sm">
              <div className="d-flex flex-column gap-4">
                <div className="overflow">
                  <div className="d-flex flex-wrap gap-2 gap-xl-3 gap-lg-3 align-data-center ">
                    {/* mapping over all the form data */}
                    {isUserGroup && (
                      <>
                        {data &&
                          data?.map((res, ind) => {
                            return (
                              <>
                                <UserPoint
                                  key={ind}
                                  id={ind}
                                  name={res}
                                  data={res}
                                  index={ind}
                                  selected={selected}
                                  alreadySelected={alreadySelectedList}
                                  handleClicksTab={handleClickUsersTabs}
                                />
                              </>
                            );
                          })}
                      </>
                    )}
                    {isDataPoint && (
                      <>
                        {data &&
                          data?.map((res, ind) => {
                            return (
                              <>
                                <DataPoint
                                  key={ind}
                                  id={ind}
                                  name={res}
                                  data={res}
                                  index={ind}
                                  selected={selected}
                                  alreadySelected={alreadySelectedList}
                                  handleClicksTab={handleClickTabs}
                                  handleRefresh={handleRefreshfun}
                                />
                              </>
                            );
                          })}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </main>
          </div>
          <footer className="border-top bg-white rounded-bottom">
            <div className=" d-flex align-data-center justify-content-between mx-4 ">
              <p className="fs-6 mx-3">Total: {totalLength}</p>
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
}

export default AvailableDatapoints;
