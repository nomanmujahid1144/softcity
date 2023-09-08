import React, { useContext, useEffect, useState } from 'react'
import AvailableDatapoints from '../../pages/availableDatapoints/AvailableDatapoints'
import CreateCollectionTemplate from './CreateCollectionTemplate'
import './collectiontemplate.css'
import ContainerHeading from '../DataPointscontainer/ContainerHeading'
import Context from '../../Context/DashboardContext'
import { useForm } from 'react-hook-form'
import $ from 'jquery'
import { useDispatch, useSelector } from 'react-redux'
import { createDataCollections, getDataCollection, updateDataCollections } from '../../redux/slices/DataCollections/createDataCollectionsSlice'
import { getDataPoints } from '../../redux/slices/createDataPointsSlice'
import { useNavigate, useParams } from 'react-router-dom'
import InputField from '../fields/InputField'

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

  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const collectionId = params.id;

  const onSubmit = (e) => {

    e.preventDefault();

    const data = {
      collectionTemplateName: collectionTemplateInputField.TemplateName,
      description: collectionTemplateInputField.TemplateDescription,
      selectedDataPoints: selectedDataPoints,
    }

    dispatch(updateDataCollections({data : data, updateId: collectionId}))
    // navigate('/admin/collection-templates');
    // assignCollectionTemplate(data)

    // if (data) {
    //   // selectedDataPoints
    //   // dataForm.map((res) => (res.selected = false))
    //   dataForm.map((res) => ({ ...res, [res.selected]: false }))
    //   reset()
    // }

    // setTimeout(() => {
    //   setSelectedDataPoints([])
    // }, 2000)
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
      const idArray = collectionTemplate?.selectedDataPoints?.map(dataPoint => dataPoint._id);
      setSelectedDataPoints(idArray);
      setCollectionTemplate({
        TemplateName: collectionTemplate.collectionTemplateName,
        TemplateDescription: collectionTemplate.description,
        selectedDataPoints: collectionTemplate.selectedDataPoints,
      })
    }
  }, [collectionTemplate]);
  

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCollectionTemplate((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <CreateCollectionTemplate
          title={'Update Data Collection Template'}
          viewallTemplates={true}
          create={false}
          update={true}
        />
        <div className="bg-white my-4 rounded-3 p-4 pb-5 shadow-sm ">
          <div className="row gap-3">
            <div className="col-5">
              {/* <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="templatename"
              >
                Collection Template Name
              </label> */}
              <InputField
                label="Collection Template Name"
                placeholder="Template Name"
                required={true}
                id="TemplateName"
                type="text"
                value={collectionTemplateInputField.TemplateName}
                onChange={handleInputChange}
              />
              {/* <input
                {...register('TemplateName')}
                class="form-control form-input-height "
                type="text"
                id="templatename"
                name="TemplateName"
                value={collectionTemplateInputField.TemplateName}
                placeholder="Template Name"
                onChange={handleInputChange}
                aria-label="default input example"
              /> */}
            </div>
            <div className="col-5">
              <InputField
                label="Collection Template Name"
                placeholder="Template Description"
                required={true}
                id="TemplateDescription"
                type="text"
                value={collectionTemplateInputField.TemplateDescription}
                onChange={handleInputChange}
              />
              {/* <label
                className="form-label fw-semibold fs-7-5"
                htmlFor="description"
              >
                Description
              </label>
              <input
                {...register('TemplateDescription')}
                class="form-control form-input-height"
                type="text"
                value={collectionTemplateInputField.TemplateDescription}
                id="description"
                name="TemplateDescription"
                onChange={handleInputChange}
                placeholder="Template Description"
                aria-label="default input example"
              /> */}
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
