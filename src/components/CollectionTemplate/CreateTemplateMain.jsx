import React, { useContext, useEffect } from 'react'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import CreateCollectionTemplate from './CreateCollectionTemplate'
import './collectiontemplate.css'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
import Context from '../../Context/DashboardContext'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { createDataCollections } from './../../redux/slices/DataCollections/createDataCollectionsSlice'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'

const CreateTemplateMain = () => {
  const {
    point,
    assignCollectionTemplate,
    createcollectiontemplate,
    dataForm,
    selectedDataPoints,
    setSelectedDataPoints,
  } = useContext(Context)

  const dispatch = useDispatch()

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    assignCollectionTemplate(data)

    if (data) {
      // selectedDataPoints
      // dataForm.map((res) => (res.selected = false))
      dataForm.map((res) => ({ ...res, [res.selected]: false }))
      reset()
    }

    setTimeout(() => {
      setSelectedDataPoints([])
    }, 2000)
  }
  useEffect(() => {
    console.log(createcollectiontemplate, 'dataTemplateName')
  }, [onSubmit])


  const { dataPoints, loading } = useSelector((state) => state.createDataPoints)

  useEffect(() => {
    dispatch(getDataPoints())
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateCollectionTemplate
          title={'Create Data Collection Template'}
          assign={false}
          create={true}
        />
        <div className="bg-white my-4 rounded-3 p-4 pb-5 shadow-sm ">
          <div className="row gap-3">
            <div className="col-5">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Collection Template Name
              </label>
              <input
                {...register('TemplateName')}
                required={true}
                autoFocus={true}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                name="TemplateName"
                placeholder="Template Name"
                aria-label="default input example"
              />
            </div>
            <div className="col-5">
              <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="description"
              >
                Description
              </label>
              <input
                {...register('TemplateDescription')}
                class="form-control form-input-height"
                type="text"
                id="description"
                name="TemplateDescription"
                placeholder="Template Description"
                aria-label="default input example"
              />
            </div>
          </div>
        </div>
      </form>
      <div className="available-datapoints">
        <AvailableDatapoints
          title={'Available Data Point'}
          totalLength={dataPoints.length > 0 ? dataPoints.length : 0}
          data={dataPoints.length > 0 ? dataPoints : []}
          selected={true}
        />
      </div>
    </>
  )
}

export default CreateTemplateMain
