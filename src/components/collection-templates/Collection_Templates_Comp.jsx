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

  useEffect(() => {
    dispatch(getDataCollections())
  }, [createDataArr])
  // const allData = useSelector((state) => state.createDataPoints)
  const { user, loading } = useSelector((state) => state.createDataCollections)

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
            <div className="total-head mt-2">Total: 390</div>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-end flex-wrap">
          <div className="primary-inputs-search d-flex align-items-center rounded search-bar border-0 bg-white">
            <span className=" px-2">
              <CiSearch className="search-icon" />
            </span>
            <Form.Control placeholder="Search" className="input bg-white" />
          </div>

          <div className="btns-main">
            <button className="btn btn-primary btn-darkblue me-2">
              Create <BsArrowRight />
            </button>

            <button className="btn btn-primary btn-darkblue">
              Assign <BsArrowRight />
            </button>
          </div>
        </div>
      </div>

      <div style={{ marginTop: '30px' }}>
        <Table_Grid data={user} dataCollectionTemplate={true} />
      </div>

      <div className="py-2 d-flex justify-content-end table-pagination">
        <PaginationRounded />
        {/* <PaginationDefault /> */}
      </div>
    </>
  )
}

export default Collection_Templates_Comp
