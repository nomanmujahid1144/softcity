import React, { useContext, useEffect, useState } from 'react'
import '../available-data-points/availabledata.css'
import context from '../../Context/DashboardContext'
import TitleHeader from '../collection-templates/TitleHeader'
import Table_Grid from '../collection-templates/Table_Grid'
import PaginationDefault from '../pagination/PaginationDefault'
import PaginationRounded from '../pagination/PaginationMui'
import { useDispatch, useSelector } from 'react-redux'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'

const Av_Datapoints_Table = () => {
  const datapoints = useContext(context)
  const {
    dataForm,
    datapointtable,
    setdatapointtable,
    createDataArr,
    setCreateDataArr,
  } = datapoints

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataPoints())
  }, [createDataArr])

  console.log('createDataArr', createDataArr)
  // const allData = useSelector((state) => state.createDataPoints)
  const { user, loading } = useSelector((state) => state.createDataPoints)
  return (
    <>
      <div className="div">
        <div>
          <TitleHeader
            title={'Available Data Points'}
            subTitle={390}
            assignBtn={false}
          />
        </div>

        <div className="my-3">
          <Table_Grid
            // data={datapointtable}
            data={user}
            heading1={'SN'}
            heading2={'Data Points'}
            heading3={'Data Points Type'}
            heading4={'Description'}
            heading5={'TimeStamp'}
            heading6={'Last Updated'}
            heading7={'Created By'}
            heading8={'Data Hits'}
            heading9={'Action'}
            dataPointsAvailable={true}
          />
        </div>
        <footer>
          <div className=" d-flex align-items-center justify-content-end ">
            <div className="py-2 table-pagination">
              <PaginationRounded />
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Av_Datapoints_Table
