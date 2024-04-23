import React, { useContext, useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table'
import './Table-grid.css'
import { BsThreeDots } from 'react-icons/bs'
import Stepper from '../All-user-groups/Stepper'
import '../All-user-groups/Stepper/stepper.css'
import Context from '../../Context/DashboardContext'
import { Link, useNavigate } from 'react-router-dom'
import DeleteAlert from '../alertProceed/DeleteAlert'
import { useDispatch, useSelector } from 'react-redux'
import { deleteDataCollection, getDataCollections } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import {
  deleteDataPoint,
  getDataPoints
} from '../../redux/slices/createDataPointsSlice'
import DescriptionAlert from '../alertProceed/DescriptionAlert'
import { deleteUserGroup, getUserGroups } from '../../redux/slices/UserGroups/UserGroups'
import { deleteUser } from '../../redux/slices/createUserSlice';
import { useAlert } from 'react-alert'
import { getRoleDescription, getStatusCodes } from '../../constants/helpers'
const Table_Grid = ({
  allUserGroups,
  users,
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
  heading10,
  dataPointsAvailable,
  dataCollectionTemplate,
  handleRefresh
}) => {
  const url = useNavigate()
  const [stepper, setStepper] = useState();
  const [showDescription, setDescriptionShow] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [description, setDescription] = useState('');
  const [show, setShow] = useState(false);
  const [headingMessage, setHeadingMessage] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [triggerFunction, setTriggerFunction] = useState('');
  const { roles } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const alert = useAlert();
  const handleClick = (id) => {
    setStepper(id)
    console.log('key', id)
  }
  // useEffect(() => {
  //   settabledata(createcollectiontemplate);
  // }, []);

  // const i = data.map((item) => item.createdAt)
  // console.log('data', i[0].split('T')[0])


  const handleDeleteClick = (id, Message, label, functionTrigger) => {
    setDeleteId(id);
    setHeadingMessage(Message);
    setButtonLabel(label);
    setTriggerFunction(functionTrigger);
    setShow(true);
  }

  const deleteDataPointHandler = (id) => {
    dispatch(deleteDataPoint(id));
    handleRefresh();
    url(`/admin/all-datapoints`);
    setShow(false);
  }

  // deleteDataPointHandler(res._id)
  const getDeleteId = (id) => {
    dispatch(deleteDataPoint(id));
    dispatch(getDataPoints());
    // url(`/admin/Assigned/data-point`)
    // dispatch(getDataCollections());
    setShow(false);
  }
  // deleteDataCollectionTemplateHandler
  const deleteCollectionTemplateId = (id) => {
    let ids = [];
    ids.push(id);
    dispatch(deleteDataCollection(ids));
    handleRefresh();
    alert.success('Successfully Delete data collection');
    url(`/admin/collection-templates`);
    // dispatch(getDataCollections());
    setShow(false);
  }

  // deleteUserGroupHandler
  const deleteUserGroupHandler = (id) => {
    let ids = [];
    ids.push(id);
    dispatch(deleteUserGroup(ids));
    handleRefresh();
    alert.success('Successfully Delete user group');
    url(`/admin/all-usergroups`)
    // dispatch(getDataCollections());
    setShow(false);
  }

  // deleteUserGroupHandler
  const deleteUsers = (id) => {
    let ids = [];
    ids.push(id);
    dispatch(deleteUser(ids));
    handleRefresh();
    setShow(false);
    alert.success('Successfully Delete user');
    url(`/admin/all-users`)
  }

  const handleSeeDescription = (description) => {
    setDescriptionShow(true);
    setDescription(description);
  }

  return (
    <div>
      <DeleteAlert
        show={show} setShow={setShow}
        heading={headingMessage}
        deleteButton={buttonLabel}
        id={deleteId}
        getDeleteId={triggerFunction === "Data Point" ? deleteDataPointHandler : triggerFunction === "User Group" ? deleteUserGroupHandler : triggerFunction === "User" ?  deleteUsers  : deleteCollectionTemplateId}
      />
      <DescriptionAlert
        showDescription={showDescription} setDescriptionShow={setDescriptionShow}
        heading={'Description'}
        description={description}
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
            {users ?
              <th>{heading10 ?? ''}</th>
            : null}
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
                  key={ind}>
                  <td>{ind + 1}</td>
                  {users && (
                    <>
                      <td>{res?.firstName + " "+ res?.lastName}</td>
                      <td>{res?.phoneNumber}</td>
                      <td>{res?.email}</td>
                      <td>{res?.country}</td>
                      <td>{res?.companyId?.companyName}</td>
                      {/* <td className='cursor-pointer' onClick={() => handleSeeDescription(res.description)}>Click to View</td> */}
                      <td>{res?.createdAt?.split('T')[0]}</td>
                      <td>{res?.updatedAt?.split('T')[0]}</td>
                      <td>{res.companyId?.firstName} / {getRoleDescription(res.companyId?.role)}</td>
                    </>
                  )}
                  {dataPointsAvailable && (
                    <>
                      <td>{res.dataPointName}</td>
                      <td>{res.dataPointType}</td>
                      <td className='cursor-pointer' onClick={() => handleSeeDescription(res.description)}>Click to View</td>
                      <td>{res.createdAt?.split('T')[0]}</td>
                      <td>{res.updatedAt?.split('T')[0]}</td>
                      <td>{res.companyId?.firstName} / {getRoleDescription(res.companyId?.role)} </td>
                      <td>0</td>
                    </>
                  )}
                  {dataCollectionTemplate && (
                    <>
                      <td>{res?.collectionTemplateName}</td>
                      <td>{res?.selectedDataPoints?.length }</td>
                      <td className='cursor-pointer' onClick={() => handleSeeDescription(res.description)}>Click to View</td>
                      <td>{res.createdAt?.split('T')[0]}</td>
                      <td>{res.updatedAt?.split('T')[0]}</td>
                      <td>{res.companyId?.firstName} / {getRoleDescription(res.companyId?.role)}</td>
                      <td>0</td>
                    </>
                  )}
                  {allUserGroups && (
                    <>
                      <td>{res?.GroupName}</td>
                      <td>{res?.users?.length > 0 ? res?.users?.length : 0}</td>
                      <td className='cursor-pointer' onClick={() => handleClick(ind)}>Click to View</td>
                      {/* <td>{res.createdAt.split('T')[0]}</td>
                      <td>{res.lastUpdated.split('T')[0]}</td>
                      <td>{res.createdBy}</td>
                      <td>{res.dataHits}</td> */}

                      {/* hard coded waiting for API correction*/}
                      <td>{res.createdAt?.split('T')[0]}</td>
                      <td>{res.updatedAt?.split('T')[0]}</td>
                      <td>{res.companyId?.firstName} / {getRoleDescription(res.companyId?.role)}</td>
                      <td>0</td>
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
                        {users && (
                          <>
                            {(roles == null || roles?.updateCompanyUser) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  type="button"
                                  onClick={(e) => url(`/admin/update-user/${res._id}`)}
                                >
                                  Edit User
                                </button>
                              </li>
                            )}
                            {(roles == null || roles?.deleteCompanyUser) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  type="button"
                                  onClick={() => handleDeleteClick(res._id, "Do you want to delete this User", "Delete", "User")}
                                >
                                  Delete User
                                </button>
                              </li>
                            )}
                          </>
                        )}
                        {dataPointsAvailable && (
                          <>
                            {(roles == null || roles?.updateDatapoint) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  type="button"
                                  onClick={(e) => window.location = `/admin/update-datapoint/${res._id}`}
                                  >
                                  Edit Data Point
                                </button>
                              </li>
                            )}
                            <li>
                              <button
                                class="dropdown-item dropdown-menu-buttons"
                                type="button"
                              >
                                Submit New Data
                              </button>
                            </li>
                            {(roles == null || roles?.deleteDatapoint) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  type="button"
                                  onClick={() => handleDeleteClick(res._id, "Do you want to delete this Data Point", "Delete", "Data Point")}
                                >
                                  Delete Data Point
                                </button>
                              </li>
                            )}
                          </>
                        )}
                        {dataCollectionTemplate && (
                          <>
                            <li>
                              <button
                                class="dropdown-item dropdown-menu-buttons"
                                type="button"
                              >
                                View Assigned Users
                              </button>
                            </li>
                            {(roles == null || roles?.updateDataCollection) && (
                              <li>
                                <button onClick={(e) => url(`/admin/update-datacollection/${res._id}`)} class="dropdown-item dropdown-menu-buttons" type="button">
                                  Edit Collection Template
                                </button>
                              </li>
                            )}
                            {(roles == null || roles?.deleteDataCollection) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  onClick={() => handleDeleteClick(res._id, "Do you want to delete this Data Collection", "Delete", "Collection Template")}
                                  type="button"
                                >
                                  Delete Collection Template
                                </button>
                              </li>
                            )}
                          </>
                        )}
                        {allUserGroups && (
                          <>
                            {(roles == null || roles?.updateUserGroup) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  type="button"
                                  onClick={(e) => url(`/admin/update-usergroup/${res._id}`)}
                                >
                                  Edit User Group
                                </button>
                              </li>
                            )}
                            {(roles == null || roles?.deleteUserGroup) && (
                              <li>
                                <button
                                  class="dropdown-item dropdown-menu-buttons"
                                  onClick={() => handleDeleteClick(res._id, "Do you want to delete this User Group", "Delete", "User Group")}
                                  type="button"
                                >
                                  Delete User Group
                                </button>
                              </li>
                            )}
                          </>
                        )}
                      </ul>
                    </div>
                  </td>
                </tr>
                
                {allUserGroups && stepper === ind && (
                  <tr className="second-tr" key={ind} style={{ backgroundColor: 'none', padding: '0px',}}>
                    <td className="second-tr" colspan="9" style={{ width: '100%', backgroundColor: 'none', padding: '0px', }}>
                      <div className="stepper-div">
                        <Stepper
                          currentStep={getStatusCodes(res)}
                        />
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
