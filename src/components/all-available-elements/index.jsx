import React, { useContext } from 'react'
import './all-available-elements.css'
import Context from '../../Context/DashboardContext'
import { CiSearch } from 'react-icons/ci'
import Form from 'react-bootstrap/Form'
import { BsArrowRight } from 'react-icons/bs'
import Preview_available_charts from '../create-data-charts/create-data-chart-three/Preview-available-map-cordinates/Preview-available-charts'
import PaginationRounded from '../pagination/PaginationMui'

const All_Available_Elements = () => {
  const { mode } = useContext(Context)
  return (
    <div>
      <div
        className={`create-data-points d-flex justify-content-between flex-grow-1 ${
          mode === 'dark-mode' && 'text-white'
        }`}
        style={{ width: '100%' }}
      >
        <div className="d-flex justify-content-start align-items-center flex-wrap ">
          <div className="d-flex align-items-center">
            <div className="data-point-heading header-beforeAdmin">
              All Available Elements
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
              Create New <BsArrowRight />
            </button>
          </div>
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

export default All_Available_Elements
