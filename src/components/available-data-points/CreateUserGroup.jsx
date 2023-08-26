import React, { useContext, useEffect, useId, useState } from 'react'
import DataPoint from './data-point/DataPoint'
import context from '../../Context/DashboardContext'
import { useDispatch, useSelector } from 'react-redux'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'

const CreateUserGroup = () => {  
  const finalData = useContext(context)
  const { dataForm, createDataArr, setCreateDataArr } = finalData
  const id = useId(null)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getDataPoints())
  }, [createDataArr])
  // const allData = useSelector((state) => state.createDataPoints)
  const { user, loading } = useSelector((state) => state.createDataPoints)

  return (
    <>
      <main className="d-flex flex-column bg-white rounded-top py-3 px-2 shadow-sm">
        <div className="d-flex flex-column gap-4">
          <div className="overflow">
            <div className="d-flex flex-wrap gap-2 gap-xl-3 gap-lg-3 align-items-center ">
              {/* mapping over all the form data */}
              {user &&
                user?.map((res, ind) => {
                  return (
                    <>
                      <DataPoint
                        key={id}
                        id={id}
                        name={res}
                        data={res}
                        index={ind}
                        // arr={arr}
                      />
                    </>
                  )
                })}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default CreateUserGroup
