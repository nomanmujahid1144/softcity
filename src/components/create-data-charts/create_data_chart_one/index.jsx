import React from 'react'
import './create-data-chartone.css'
import Create_data_chipbox from './create-data-chipbox/create-data-chipbox'
import Createdata_charts_header from './createdata-charts-header/Createdata-charts-header'
import CreateUserGroupObj from '../../available-data-points/CreateUserGroupObj'
import PaginationRounded from '../../pagination/PaginationMui'

const Create_data_chart_one = () => {
  return (
    <div>
      <div>
        <Createdata_charts_header />
      </div>
      <div className="chip-main-box">
        {/* <Create_data_chipbox /> */}
        <div className="backgroud-right">
          <CreateUserGroupObj />
        </div>
      </div>
      <div className="py-4 d-flex justify-content-end table-pagination">
        <PaginationRounded />
      </div>
    </div>
  )
}

export default Create_data_chart_one
