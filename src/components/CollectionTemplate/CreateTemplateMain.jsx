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
import { useNavigate } from 'react-router-dom'
import { useAlert } from 'react-alert'

const CreateTemplateMain = () => {
  const {
    point,
    assignCollectionTemplate,
    dataForm,
    setItems,
  } = useContext(Context)

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  const { roles } = useSelector((state) => state.auth);

  const { collectionTemplate } = useSelector(
    (state) => state.createDataCollections
  );
  
  const { id } = useSelector((state) => state.auth);

  const { register, handleSubmit, reset } = useForm()
  const onSubmit = (data) => {
    try {

      data.companyId = id;

      assignCollectionTemplate(data);
      setItems([])
      alert.success('The data Collection created successfully');
      navigate('/admin/collection-templates')
      // setTimeout(() => {
      // }, 2000)
    } catch (err) {
      alert.error('Error');
    }

    if (data) {
      // selectedDataPoints
      // dataForm.map((res) => (res.selected = false))
      dataForm.map((res) => ({ ...res, [res.selected]: false }))
      reset()
    }


    
  }

  const { dataPoints, loading } = useSelector((state) => state.createDataPoints)

  useEffect(() => {
    dispatch(getDataPoints())
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CreateCollectionTemplate
          title={'Create Data Collection Template'}
          viewallTemplates={roles == null || roles?.viewDataCollection}
          update={false}
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
        {dataPoints?.length > 0 ? 
          <AvailableDatapoints
            isDataPoint={true}
            isUserGroup={false}
            title={'Select Available Data Points'}
            totalLength={dataPoints.length > 0 ? dataPoints.length : 0}
            data={dataPoints.length > 0 ? dataPoints : []}
            selected={true}
          />
        : null}
      </div>
    </>
  )
}

export default CreateTemplateMain
