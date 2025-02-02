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
import TitleHeader from "../../components/collection-templates/TitleHeader";

function AvailableDatapoints({
  title,
  isUserGroup,
  isDataPoint,
  totalLength,
  data,
  selected,
  UpdateSelectedDataPoints,
  UpdateSelectedUsers,
}) {
  const [handleRefresh, setHandleRefresh] = useState(false);
  const finalData = useContext(Context);
  const { mode, selectedDataPoints, setSelectedDataPoints, setSelectedUsers,items, setItems } = finalData;

  const [alreadySelectedList, setAlreadySelectedList] = useState([]);

  useEffect(() => {
    setSelectedDataPoints([]);
    setSelectedUsers([]);
  }, []);

  useEffect(() => {
    if (data?.length > 0) {
      setItems(data);
    }
  }, [data]);

  useEffect(() => {
    if (UpdateSelectedDataPoints?.length > 0) {
      const updatedDataList = items.map((data) => {
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

      // data = updatedDataList;
      setItems(updatedDataList);
    }
  }, [UpdateSelectedDataPoints]);

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh);
  };

  useEffect(() => {
    if (UpdateSelectedUsers?.length > 0) {
      const updatedDataList = items.map((data) => {
        const newData = { ...data, selected: false };

        const matchingDataPoint = UpdateSelectedUsers.find(
          (updateData) => updateData === data._id
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

      // data = updatedDataList;
      setItems(updatedDataList);
    }
  }, [UpdateSelectedUsers]);

  const handleClickTabs = async (e, arg) => {
    // Create a new array with updated 'selected' values
    const updatedData = items.map((item) => {
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
    // data = updatedData;
    setItems(updatedData)
  };

  const handleClickUsersTabs = async (e, arg) => {
    // Create a new array with updated 'selected' values
    const updatedData = items.map((item) => {
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
    // data = updatedData;
    setItems(updatedData)
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(25);

  const pagesVisited = currentPage * itemsPerPage;

  // Change page function
  const handleChangePage = (event, page) => {
    setCurrentPage(page - 1);
  };
  
  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setItems(data);
    } else {
      if (isDataPoint === true) {
        const filteredItems = data.filter(item => {
            return item.dataPointName.toLowerCase().includes(lowercasedValue);
        });
        setItems(filteredItems);
      } else {
        const filteredItems = data.filter(item => {
            return item.firstName.toLowerCase().includes(lowercasedValue);
        });
        setItems(filteredItems);
      }
    }
  };

  
  

  return (
    <>
      <div className="Availabledata py-3">
        <TitleHeader
          title={title}
          subTitle={totalLength}
          assignBtn={false}
          createBtn={false}
          filterData={filterData}
        />
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
                        {items &&
                          items?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((res, ind) => {
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
                        {items &&
                          items?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((res, ind) => {
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
          <PaginationRounded
            currentPage={currentPage}
            itemsPerPage={itemsPerPage}
            totalItems={items?.length || 0}
            onChangePage={handleChangePage}
          />
        </div>
      </div>
    </>
  );
}

export default AvailableDatapoints;
