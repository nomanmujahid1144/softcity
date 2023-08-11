import React, { useContext } from 'react'
import './createdata-header-two.css'
import Context from '../../../../Context/DashboardContext'

const Createdata_chartTwo_header = () => {
  const { mode } = useContext(Context)

  return (
    <div
      className={`create-data-points d-flex justify-content-between  flex-grow-1 ${
        mode === 'dark-mode' && 'text-white'
      }`}
      style={{ width: '100%' }}
    >
      <div className="title-header" style={{ display: 'flex', width: '100%' }}>
        <div className="d-flex justify-content-start align-items-center flex-wrap ">
          <div className="d-flex align-items-center">
            <div className="data-point-heading header-beforeAdmin">
              Preview your data table (Take note of your column headers - You
              will need it)
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Createdata_chartTwo_header
