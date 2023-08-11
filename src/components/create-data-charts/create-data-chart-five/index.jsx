import React, { useContext } from 'react'
import './create-data-chart-five.css'
import Context from '../../../Context/DashboardContext'
import Preview_available_charts from '../create-data-chart-three/Preview-available-map-cordinates/Preview-available-charts'
import PaginationRounded from '../../pagination/PaginationMui'

const Create_data_chart_five = () => {
  const { mode, StepperStep } = useContext(Context)

  return (
    <div>
      <div
        className={`create-data-points d-flex justify-content-between  flex-grow-1 ${
          mode === 'dark-mode' && 'text-white'
        }`}
        style={{ width: '100%' }}
      >
        <div
          className={`data-point-heading header-beforeAdmin fw-400 ${
            mode === 'dark-mode' && 'text-white'
          }`}
        >
          Check all your Selected Elements before you Deploy
        </div>
      </div>

      <div
        style={{
          marginTop: '20px',
          backgroundColor: mode === 'dark-mode' && '#44444479',
        }}
        className="preview-main-div"
      >
        <Preview_available_charts />
      </div>

      <div className="py-4 table-pagination d-flex justify-content-end">
        <PaginationRounded />
      </div>
    </div>
  )
}

export default Create_data_chart_five
