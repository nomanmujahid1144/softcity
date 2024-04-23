import React, { useContext, useEffect, useState } from 'react'
import './Collection_Templates_Comp.css'
import { CiSearch } from 'react-icons/ci'
import Form from 'react-bootstrap/Form'
import { BsArrowRight } from 'react-icons/bs'
import Table_Grid from './Table_Grid'
import PaginationRounded from '../pagination/PaginationMui'
import Context from '../../Context/DashboardContext'
import { useDispatch, useSelector } from 'react-redux'
import { getDataCollections } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import { Link } from 'react-router-dom'
import TitleHeader from './TitleHeader'

const Collection_Templates_Comp = () => {
  const {
    mode,
    createcollectiontemplate,
    createDataArr,
    setCreateDataArr,
  } = useContext(Context)

  const dispatch = useDispatch()
  const [handleRefresh, setHandleRefresh] = useState(false);
  const [allCollectionTemplates, setAllCollectionTemplates] = useState([]);
  const { roles } = useSelector((state) => state.auth);

  
  const { collectionTemplates, loading } = useSelector((state) => state.createDataCollections);
  
  useEffect(() => {
    dispatch(getDataCollections());
  }, [createDataArr, handleRefresh]);
  // const allData = useSelector((state) => state.createDataPoints)

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh)
  };

  useEffect(() => {
    dispatch(getDataCollections());
  }, []);

  useEffect(() => {
    setAllCollectionTemplates(collectionTemplates);
  }, []);

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
      setAllCollectionTemplates(collectionTemplates);
    } else {
      const filteredItems = collectionTemplates.filter(item => {
        return item.collectionTemplateName.toLowerCase().includes(lowercasedValue);
      });
      setAllCollectionTemplates(filteredItems);
    }
  };

  return (
    <>
      <div className='div'>
        <div>
          <TitleHeader
            title={'Collection Templates'}
            subTitle={allCollectionTemplates?.length}
            assignBtn={false}
            createBtn={roles == null || roles?.createDataCollection}
            navigationToLink={"/admin/create-datacollection"}
            filterData={filterData}
          />
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div>
          <div class="table-responsive-sm md lg xl">
           
          </div>
        </div>
        {allCollectionTemplates?.length > 0 ? 
          <Table_Grid
            data={allCollectionTemplates?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
            dataCollectionTemplate={true}
            handleRefresh={handleRefreshfun}
          />
        : null}
      </div>
      <PaginationRounded
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={allCollectionTemplates?.length || 0}
        onChangePage={handleChangePage}
      />
    </>
  )
}

export default Collection_Templates_Comp
