import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import './Table-grid.css'
import { BsThreeDots } from 'react-icons/bs'
import Stepper from '../All-user-groups/Stepper'
import '../All-user-groups/Stepper/stepper.css'
import Context from '../../Context/DashboardContext'

const Table_Grid_rows = ({
  res,
  ind,
  col1,
  col2,
  col3,
  col4,
  col5,
  col6,
  col7,
  col8,
  col9,
  allUserGroups,
}) => {
  const [stepper, setStepper] = useState()
  const { createcollectiontemplate } = useContext(Context)
  const handleClick = (id) => {
    setStepper(id)
    console.log('key', id)
  }
  return (
    <div>
      <>
        <tr className="first-tr" key={ind} onClick={() => handleClick(ind)}>
          <td>{ind + 1}</td>
          <td>{col1}</td>
          <td>{col2}</td>
          <td>{col3}</td>
          <td>{col4}</td>
          <td>{col5}</td>
          <td>{col6}</td>
          <td>{col7}</td>
          <td>
            <div class="dropdown dropdown-ul">
              <button
                class="btn btn-icon"
                type="button"
                id="dropdownMenu2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <BsThreeDots color="#8C8C8C" size={22} />
              </button>
              <ul
                class="dropdown-menu ul-dropdown"
                aria-labelledby="dropdownMenu2"
              >
                <li>
                  <button
                    class="dropdown-item dropdown-menu-buttons"
                    type="button"
                  >
                    View Assigned Users
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item dropdown-menu-buttons"
                    type="button"
                  >
                    Edit Collection Template
                  </button>
                </li>
                <li>
                  <button
                    class="dropdown-item dropdown-menu-buttons"
                    type="button"
                  >
                    Delete Collection Template
                  </button>
                </li>
              </ul>
            </div>
          </td>
        </tr>

        {allUserGroups && stepper === ind && (
          <tr
            className="second-tr"
            key={ind}
            style={{
              backgroundColor: 'none',
              padding: '0px',
            }}
          >
            <td
              className="second-tr"
              colspan="9"
              style={{
                width: '100%',
                backgroundColor: 'none',
                padding: '0px',
              }}
            >
              <div className="stepper-div">
                <Stepper />
              </div>
            </td>
          </tr>
        )}
      </>
    </div>
  )
}

export default Table_Grid_rows
