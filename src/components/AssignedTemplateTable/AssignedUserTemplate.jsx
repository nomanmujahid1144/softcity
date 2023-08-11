import React, { useContext, useState } from 'react'
import Table from 'react-bootstrap/Table'
import '../collection-templates/Table-grid.css'
import { BsThreeDots } from 'react-icons/bs'
import PaginationRounded from '../pagination/PaginationMui'
import Context from '../../Context/DashboardContext'
const AssignedUserTemplate = ({
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9,
  createcollectiontemplate,
  setcreatecollectiontemplate,
  data,
}) => {
  const [tabledata, settabledata] = useState([
    {
      no: 1,

      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 1,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 1,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 1,

      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 1,

      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 1,

      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
  ])
  // const onchange = function (res, index) {
  //   const newitems = createcollectiontemplate.map((e, ind) => {
  //     if (index === ind) {
  //       return { ...e, selected: !e.selected };
  //     }
  //     return e;
  //   });
  //   setcreatecollectiontemplate(newitems);
  // };
  const onchange = function (res, index) {
    const newitems = data.map((e, ind) => {
      if (index === ind) {
        return { ...e, selected: !e.selected }
      }
      return e
    })
    setcreatecollectiontemplate(newitems)
  }
  return (
    <div>
      <Table
        responsive="sm md lg xl"
        className="mytable"
        style={{ overflowX: 'scroll' }}
      >
        <thead class="tHead">
          <tr>
            <th className="text-light">{heading1 ?? 'Action'}</th>
            <th className="text-light">{heading1 ?? 'SN'}</th>
            <th className="text-light">{heading2 ?? 'Collection Name'}</th>
            <th className="text-light">{heading3 ?? 'Total Data Points'}</th>
            <th className="text-light">{heading4 ?? 'Description'}</th>
            <th className="text-light">{heading5 ?? 'Create Timestamp'}</th>
            <th className="text-light">{heading6 ?? 'Last Updated'}</th>
            <th className="text-light">{heading7 ?? 'Created By'}</th>
            <th className="text-light">{heading8 ?? 'Data Submissions'}</th>
            <th className="text-light">{heading9 ?? 'Action'}</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data?.map((res, ind) => {
            return (
              <>
                <tr key={ind}>
                  <td>
                    <div class="form-check d-flex justify-content-center">
                      <input
                        class="form-check-input table-checkbox"
                        type="checkbox"
                        id="flexCheckDefault"
                        onChange={() => onchange(res, ind)}
                        checked={res.selected}
                      />
                    </div>
                  </td>
                  <td>{ind + 1}</td>
                  <td>{res.collectionTemplateName}</td>
                  <td>{res.availableDataPoints.length + 1}</td>
                  {/* <td>{res.Description}</td>
                  <td>{res.CreateTimestamp}</td>
                  <td>{res.LastUpdated}</td>
                  <td>{res.CreatedBy}</td>
                  <td>{res.DataSubmissions}</td> */}

                  {/* hard coded waiting for API correction*/}
                  <td>Click to view</td>
                  <td>{new Date().toLocaleDateString('en-GB')}</td>
                  <td>15/03/2023</td>
                  <td>Admin</td>
                  <td>340</td>
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
              </>
            )
          })}
        </tbody>
      </Table>
      <div className="py-2 table-pagination d-flex justify-content-end">
        <PaginationRounded />
      </div>
    </div>
  )
}
export default AssignedUserTemplate
