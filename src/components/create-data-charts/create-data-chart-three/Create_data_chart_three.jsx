import React from 'react'
import './create-data-chart-three.css'
import Select_from_labeled_data_col from './Select_from_labeled_data_col/Select_from_labeled_data_col'
import Preview_available_Elements from './Preview-available-map-cordinates/Preview_available_Elements'

const Create_data_chart_three = () => {
  return (
    <div
      className="chart-three-main-div"
      style={{ display: 'flex', marginTop: '20px' }}
    >
      <div className="chart-label-div">
        <Select_from_labeled_data_col />
      </div>

      <div style={{ marginLeft: '20px' }} className="chart-preview-div">
        <Preview_available_Elements SaveButton={true} />
      </div>
    </div>
  )
}

export default Create_data_chart_three