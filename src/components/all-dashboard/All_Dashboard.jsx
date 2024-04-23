import React, { useContext } from 'react'
import '../collection-templates/Collection_Templates_Comp.css'
import { CiSearch } from 'react-icons/ci'
import Form from 'react-bootstrap/Form'
import { BsArrowRight } from 'react-icons/bs'
import Context from '../../Context/DashboardContext'
import PaginationRounded from '../pagination/PaginationMui'
import Table_Grid from '../collection-templates/Table_Grid'

const All_Dashboard = () => {
  const { mode } = useContext(Context)
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
              All Dashboards
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
        <Table_Grid
          heading1={'SN'}
          heading2={'Dashboard Name'}
          heading3={'Total Elements'}
          heading4={'Description'}
          heading5={'Create Timestamp'}
          heading6={'Last Updated'}
          heading7={'Created By'}
          heading8={'Data Submissions'}
          heading9={'Action'}
        />
      </div>

      <div className="py-2 d-flex justify-content-end table-pagination">
        <PaginationRounded />
        {/* <PaginationDefault /> */}
      </div>
    </>
  )
}

export default All_Dashboard
