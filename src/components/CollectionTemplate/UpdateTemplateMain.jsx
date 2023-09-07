import React, { useContext, useEffect, useState } from 'react'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import CreateCollectionTemplate from './CreateCollectionTemplate'
import './collectiontemplate.css'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
import Context from '../../Context/DashboardContext'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { createDataCollections, getDataCollection } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'
import { useParams } from 'react-router-dom'

const UpdateTemplateMain = () => {
  const {
    point,
    assignCollectionTemplate,
    createcollectiontemplate,
    dataForm,
    selectedDataPoints,
    setSelectedDataPoints,
  } = useContext(Context)

  const [collectionTemplateInputField, setCollectionTemplate] = useState({
    TemplateName: '',
    TemplateDescription: '',
    selectedDataPoints: []

  })

  const dispatch = useDispatch();
  const params = useParams();

  const collectionId = params.id;

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


  const { dataPoints } = useSelector((state) => state.createDataPoints);
  const { collectionTemplate } = useSelector((state) => state.createDataCollections);

  useEffect(() => {
    if (collectionId) {
      dispatch(getDataCollection({id: collectionId}));
    }
    dispatch(getDataPoints())
  }, [])
  
  useEffect(() => {
    if (collectionTemplate) {
      setCollectionTemplate({
        TemplateName: collectionTemplate.collectionTemplateName,
        TemplateDescription: collectionTemplate.description,
        selectedDataPoints: collectionTemplate.selectedDataPoints,
      })
    }
  }, [collectionTemplate])

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
                defaultValue={collectionTemplateInputField.TemplateName}
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
                defaultValue={collectionTemplateInputField.TemplateDescription}
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
          UpdateSelectedDataPoints={collectionTemplateInputField?.selectedDataPoints?.length > 0  ? collectionTemplateInputField?.selectedDataPoints : []}
        />
      </div>
    </>
  )
}

export default UpdateTemplateMain
