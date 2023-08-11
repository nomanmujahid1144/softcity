import React from 'react'
import UpdateForm from './UpdateForm'
import './createdatapoints.css'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
const Create_Data_Points = ({ func }) => {
  return (
    <>
      <div>
        <UpdateForm func={func} />
      </div>
    </>
  )
}

export default Create_Data_Points
