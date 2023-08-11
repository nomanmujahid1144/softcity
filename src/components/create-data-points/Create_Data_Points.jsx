import React from 'react'
import Form from './Form'
import './createdatapoints.css'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
const Create_Data_Points = ({ func }) => {
  return (
    <>
      <div>
        <Form func={func} />
      </div>

      <div>
        <ContainerHeading title={'Select Available Data Point'} />
        <AvailableDatapoints />
      </div>
    </>
  )
}

export default Create_Data_Points
