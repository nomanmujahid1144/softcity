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

const Collection_Templates_Comp = () => {
  const {
    mode,
    createcollectiontemplate,
    createDataArr,
    setCreateDataArr,
  } = useContext(Context)

  const dispatch = useDispatch()
  const [handleRefresh, setHandleRefresh] = useState(false);

  
  const { collectionTemplates, loading } = useSelector((state) => state.createDataCollections);
  
  useEffect(() => {
    dispatch(getDataCollections());
  }, [createDataArr, handleRefresh])
  // const allData = useSelector((state) => state.createDataPoints)

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh)
  };

  useEffect(() => {
    dispatch(getDataCollections());
  }, [])

  return (
    <>
      <div
        className={`create-data-points d-flex justify-content-between flex-grow-1 ${
          mode === 'dark-mode' && 'text-white'
        }`}
        style={{ width: '100%' }}
      >
        <div className="d-flex justify-content-start align-items-center flex-wrap ">
          <div className="d-flex align-items-center">
            <div className="data-point-heading header-beforeAdmin">
              Collection Templates
            </div>
            <div className="total-head mt-2">Total: {collectionTemplates?.length}</div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-end flex-wrap">
          <div className="primary-inputs-search d-flex align-items-center rounded search-bar border-0 bg-white">
            <span className=" px-2">
              <CiSearch className="search-icon" />
            </span>
            <Form.Control placeholder="Search" className="input bg-white" />
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <div>
          <div class="table-responsive-sm md lg xl">
           
          </div>
        </div>
        {collectionTemplates?.length > 0 ? 
          <Table_Grid
            data={collectionTemplates?.length > 0 ? collectionTemplates : []}
            dataCollectionTemplate={true}
            handleRefresh={handleRefreshfun}
          />
        : null}
      </div>

      <div className="py-2 d-flex justify-content-end table-pagination">
        <PaginationRounded />
        {/* <PaginationDefault /> */}
      </div>
    </>
  )
}

export default Collection_Templates_Comp
