// import { AiOutlineSearch } from 'react-icons/ai'
import React, { useContext, useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form'
import './AssignDataCollTemplate.css'
import CreateCollectionTemplate from '../CollectionTemplate/CreateCollectionTemplate'
import AssignTags from './AssignTags'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
import AssignedUserTemplate from '../AssignedTemplateTable/AssignedUserTemplate'
import Context from '../../Context/DashboardContext'
import { getDataCollections } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import { useDispatch, useSelector } from 'react-redux'

const AssignDataCollTemplate = () => {
  const dispatch = useDispatch()

  const {
    assignedtemplatecollection,
    setassignedtemplatecollection,
    setcreatecollectiontemplate,
    createcollectiontemplate,

    cycle,
    setcycle,
    assignedto,
    setassignedto,
    assign,
    createDataArr,
  } = useContext(Context)

  const onchange = function (e) {
    setcycle(e.target.id)
    console.log(e.target.checked)
  }

  useEffect(() => {
    dispatch(getDataCollections())
  }, [createDataArr])
  // const allData = useSelector((state) => state.createDataPoints)
  const { user, loading } = useSelector((state) => state.createDataCollections)

  useEffect(() => {
    console.log(assignedtemplatecollection)
  }, [assign])

  return (
    <>
      <main className=" d-flex flex-column gap-3">
        <div className="">
          <CreateCollectionTemplate
            title={'Assign Data Collection Template'}
            assign={true}
            create={false}
            functions={assign}
          />
          <div className="d-flex flex-column border rounded-3 py-4 px-3 mt-4 gap-4 bg-white shadow-sm">
            <div className="d-flex flex-column gap-2 flex-md-row flex-lg-column flex-xl-column ">
              <h6 className="fs-6 fw-semibold">Assign User Group</h6>
              <div className=" p-1 d-flex flex-row flex-wrap gap-2 align-items-center bg-gray rounded">
                {assignedto.map((res, index) => {
                  return <AssignTags key={index} title={res} index={index} />
                })}
              </div>
            </div>
            <div className="d-flex flex-xl-row flex-lg-row flex-md-row flex-column justify-content-between align-items-center">
              <Form>
                <Form.Label className="fs-6 fw-semibold mb-3">
                  Set Collection Cycle
                </Form.Label>
                <Form.Group onChange={onchange} className="">
                  <Form.Check
                    inline
                    label="Hourly"
                    type="radio"
                    id="Hourly"
                    className="fs-7"
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Daily"
                    type="radio"
                    id="Daily"
                    className="fs-7"
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Weekly"
                    type="radio"
                    id="Weekly"
                    className="fs-7 "
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Monthly"
                    type="radio"
                    id="Monthly"
                    className="fs-7 "
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Quarterly"
                    type="radio"
                    id="Quarterly"
                    className="fs-7 "
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Bi-Annually"
                    type="radio"
                    id="Bi-Annually"
                    className="fs-7 "
                    name="cycle"
                  />
                  <Form.Check
                    inline
                    label="Yearly"
                    type="radio"
                    id="Yearly"
                    className="fs-7 "
                    name="cycle"
                  />
                </Form.Group>
              </Form>
            </div>
          </div>
        </div>
        <div>
          <ContainerHeading title={'Select Collection template'} />
          <AssignedUserTemplate
            setcreatecollectiontemplate={setcreatecollectiontemplate}
            createcollectiontemplate={createcollectiontemplate}
            data={user}
          />
        </div>
      </main>
    </>
  )
}

export default AssignDataCollTemplate
