import React, { useContext, useEffect, useState } from 'react';
import '../available-data-points/availabledata.css';
import context from '../../Context/DashboardContext';
import TitleHeader from '../collection-templates/TitleHeader';
import Table_Grid from '../collection-templates/Table_Grid';
import PaginationRounded from '../pagination/PaginationMui';
import { useDispatch, useSelector } from 'react-redux';
import { getDataPoints } from '../../redux/slices/createDataPointsSlice';

const Av_Datapoints_Table = () => {
  const datapoints = useContext(context);
  const { roles } = useSelector((state) => state.auth);
  const {
    dataForm,
    datapointtable,
    setdatapointtable,
    createDataArr,
    setCreateDataArr,
  } = datapoints;

  const dispatch = useDispatch();
  const [handleRefresh, setHandleRefresh] = useState(false);
  const [allDataPoints, setAllDataPoints] = useState([]);

  const { dataPoints, loading } = useSelector((state) => state.createDataPoints);

  useEffect(() => {
    dispatch(getDataPoints());
  }, [createDataArr, handleRefresh]);

  useEffect(() => {
    setAllDataPoints(dataPoints);
  }, []);

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh);
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  // Change page function
  const handleChangePage = (event, page) => {
    setCurrentPage(page - 1);
  };


  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setAllDataPoints(dataPoints);
    } else {
      const filteredItems = dataPoints.filter(item => {
        return item.dataPointName.toLowerCase().includes(lowercasedValue);
      });
      setAllDataPoints(filteredItems);
    }
  };

  return (
    <>
      <div className="div">
        <div>
          <TitleHeader
            title={'Available Data Points'}
            subTitle={allDataPoints?.length}
            assignBtn={false}
            createBtn={roles == null || roles?.createDatapoint}
            navigationToLink={'/admin/create-datapoint'}
            filterData={filterData}
          />
        </div>

        <div className="my-3">
          <Table_Grid
            data={allDataPoints?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
            heading1={'SN'}
            heading2={'Data Points'}
            heading3={'Data Points Type'}
            heading4={'Description'}
            heading6={'Last Updated'}
            heading7={'Created By'}
            heading8={'Data Hits'}
            heading9={'Action'}
            dataPointsAvailable={true}
            handleRefresh={handleRefreshfun}
          />
        </div>
        <PaginationRounded
          currentPage={currentPage}
          itemsPerPage={itemsPerPage}
          totalItems={allDataPoints?.length || 0}
          onChangePage={handleChangePage}
        />
      </div>
    </>
  );
};

export default Av_Datapoints_Table;
