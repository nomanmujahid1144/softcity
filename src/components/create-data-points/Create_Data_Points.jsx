import React, { useEffect, useState } from 'react'
import Form from './Form'
import './createdatapoints.css'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
import { useDispatch, useSelector } from 'react-redux'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'
const Create_Data_Points = ({ func }) => {

  const { roles } = useSelector((state) => state.auth);
  const [refresh , setRefresh] = useState(false)
  const dispatch = useDispatch();

  const { dataPoints } = useSelector(
    (state) => state.createDataPoints
  );

  useEffect(() => {
    dispatch(getDataPoints());
  },[refresh])

  const submitted = () => {
    setRefresh(!refresh)
  }

  return (
    <>
      <div>
        <Form
          func={func}
          submitted={submitted}
        />
      </div>

      <div>
        {/* <ContainerHeading
          title={'Available Data Point'}
          totalLength={dataPoints?.length > 0 ? dataPoints?.length : 0}
        /> */}
        {(roles == null || roles?.viewDatapoint) && (
          <AvailableDatapoints
            isDataPoint={true}
            isUserGroup={false}
            title={'Available Data Point'}
            totalLength={dataPoints?.length > 0 ? dataPoints?.length : 0}
            data={dataPoints?.length > 0 ? dataPoints : []}
            selected={false}
          />
        )}
      </div>
    </>
  )
}

export default Create_Data_Points
