import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import './Table-grid.css'
import { BsThreeDots } from 'react-icons/bs'
import Stepper from '../All-user-groups/Stepper'
import '../All-user-groups/Stepper/stepper.css'
import Context from '../../Context/DashboardContext'
import { Link, useNavigate } from 'react-router-dom'
import DeleteAlert from '../alertProceed/DeleteAlert'
import { useDispatch } from 'react-redux'
import { deleteDataCollection, getDataCollections } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import {
  deleteDataPoint,
  getDataPoints
} from '../../redux/slices/createDataPointsSlice'
const Table_Grid = ({
  allUserGroups,
  data,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9,
  dataPointsAvailable,
  dataCollectionTemplate,
  handleRefresh
}) => {
  const url = useNavigate()
  const [stepper, setStepper] = useState();
  const [show, setShow] = useState(false);
  const [deleteId, setDeleteId] = useState({
    popUpHeading: '',
    ButtonHeading: '',
    id: '',
  });
  const { createcollectiontemplate } = useContext(Context);
  const dispatch = useDispatch();
  const handleClick = (id) => {
    setStepper(id)
    console.log('key', id)
  }

  const [tabledata, settabledata] = useState([
    {
      no: 1,
      CollectionName: 'Admin',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 2,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 3,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 4,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 5,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 6,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
    {
      no: 7,
      CollectionName: 'Election Questionnaire',
      TotalDataPoints: 12,
      Description: 'Click to view',
      CreateTimestamp: '15/03/2023',
      LastUpdated: '15/03/2023',
      CreatedBy: 'Adeola Hopewell',
      DataSubmissions: 340,
    },
  ])
  // useEffect(() => {
  //   settabledata(createcollectiontemplate);
  // }, []);

  // const i = data.map((item) => item.createdAt)
  // console.log('data', i[0].split('T')[0])


  const handleDeleteClick = (id, heading, buttonHeading) => {
    setDeleteId({
      popUpHeading: heading,
      ButtonHeading : buttonHeading,
      id : id
    })
    setShow(true);
  }

  const deleteDataPointHandler = (id) => {
    dispatch(deleteDataPoint(id));
    dispatch(getDataPoints());
    url(`/admin/Assigned/data-point`)
  }

  const getDeleteId = (id) => {
    const ids = [];
    ids.push(id);
    dispatch(deleteDataCollection(id));
    handleRefresh();
    // dispatch(getDataCollections());
    setShow(false);
  }

  return (
    <div>
      <DeleteAlert
        show={show} setShow={setShow}
        heading={deleteId.popUpHeading}
        deleteButton={deleteId.ButtonHeading}
        id={deleteId.id}
        getDeleteId={getDeleteId}
      />
      <Table
        responsive="sm md lg xl"
        className="mytable"
        style={{ overflowX: 'scroll' }}
      >
        <thead class="tHead">
          <tr>
            <th>{heading1 ?? 'SN'}</th>
            <th>{heading2 ?? 'Collection Name'}</th>
            <th>{heading3 ?? 'Total Data Points'}</th>
            <th>{heading4 ?? 'Description'}</th>
            <th>{heading5 ?? 'Create Timestamp'}</th>
            <th>{heading6 ?? 'Last Updated'}</th>
            <th>{heading7 ?? 'Created By'}</th>
            <th>{heading8 ?? 'Data Submissions'}</th>
            <th>{heading9 ?? 'Action'}</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data?.map((res, ind) => {
            return (
              <>
                <tr
                  className="first-tr"
                  key={ind}
                  onClick={() => handleClick(ind)}
                >
                  <td>{ind + 1}</td>
                  {dataPointsAvailable && (
                    <>
                      <td>{res.dataPointName}</td>
                      <td>{res.dataPointType}</td>
                      <td>{res.description}</td>
                      <td>{res.createdAt.split('T')[0]}</td>
                      <td>{res.lastUpdated.split('T')[0]}</td>
                      <td>{res.createdBy}</td>
                      <td>{res.dataHits}</td>
                    </>
                  )}
                  {dataCollectionTemplate && (
                    <>
                      <td>{res?.collectionTemplateName}</td>
                      <td>{res?.selectedDataPoints?.length }</td>
                      <td>{res?.description}</td>
                      {/* <td>{res.createdAt.split('T')[0]}</td>
                      <td>{res.lastUpdated.split('T')[0]}</td>
                      <td>{res.createdBy}</td>
                      <td>{res.dataHits}</td> */}

                      {/* hard coded waiting for API correction*/}
                      <td>{new Date().toLocaleDateString('en-GB')}</td>
                      <td>15/03/2023</td>
                      <td>Admin</td>
                      <td>340</td>
                    </>
                  )}
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
                        {dataPointsAvailable && (
                          <>
                            <li>
                              <button
                                class="dropdown-item dropdown-menu-buttons"
                                type="button"
                                onClick={(e) => url(`/admin/update-datapoint/${res._id}`)}
                                >
                                Edit Data Point
                              </button>
                            </li>
                            <li>
                              <button
                                class="dropdown-item dropdown-menu-buttons"
                                type="button"
                                onClick={(e) => deleteDataPointHandler(res._id)}
                              >
                                Delete Data Point
                              </button>
                            </li>
                          </>
                        )}
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
                            onClick={() => handleDeleteClick(res._id, "Do you want to delete this Data Collection", "Delete")}
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
            )
          })}
        </tbody>
      </Table>
    </div>
  )
}

export default Table_Grid
