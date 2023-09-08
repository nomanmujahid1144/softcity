import React, { useContext, useRef, useState } from 'react'
import { BiQuestionMark } from 'react-icons/bi'
import './DataPoint.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import context from '../../../Context/DashboardContext'
import OptionAlert from '../../alertProceed/OptionAlert'
import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {
  deleteDataPoint,
  getDataPoints
} from '../../../redux/slices/createDataPointsSlice'

const DataPoint = ({ data, index, arr, selected, handleClicksTab, alreadySelected }) => {
  const url = useNavigate()
  const dispatch = useDispatch();
  const [name, setName] = useState({});

  const indexData = useContext(context)
  const {
    setting,
    point,
    defaultclass,
    setdefaultclass,
    setpoint,
    selectedDataPoints,
    setSelectedDataPoints,
  } = indexData
  const [show, setShow] = useState(false)
  const [deleteId, setDeleteId] = useState(name._id)
  const [classselect, setclassselect] = useState(false)
  const [tooltip, settooltip] = useState()
  // for changing datapoint color on selecttion
  const first = useRef()
  
  const onclick = function (e, arg) {
    setclassselect(!classselect);
    // Check the value of classselect
    if (!classselect) {
      setSelectedDataPoints([...selectedDataPoints, arg._id]);
      arg.selected = true;
    } else {
      setSelectedDataPoints(selectedDataPoints.filter(item => item !== arg._id));
      arg.selected = false;
    }

  
    // Toggle the value of classselect
    setdefaultclass(true);
  };

  const handleOnClick = function (e, arg) {
    handleClicksTab(e, arg)
    // setclassselect(!classselect);
    // // Check the value of classselect

    // if (!classselect && !arg.selected) {
    //   setSelectedDataPoints([...selectedDataPoints, arg._id]);
    // } else if (classselect && arg.selected) {
    //   setSelectedDataPoints([...selectedDataPoints, arg._id]);
    // } else {
    //   setSelectedDataPoints(selectedDataPoints.filter(item => item !== arg._id));
    // }

    // console.log(arg.selected)
    // arg.selected = !arg.selected;
    // console.log(arg.selected)
    // setName(arg);

    // // Toggle the value of classselect
    // setdefaultclass(true);
  };

  useEffect(() => {
    if (data) {
      setName(data);
    }
  }, [data])

  // deleteDataPointHandler(res._id)
  const getDeleteId = (id) => {
    dispatch(deleteDataPoint(id));
    dispatch(getDataPoints());
    setShow(false);
  }

  return (
    <>
    <OptionAlert
        show={show} setShow={setShow}
        heading={'Do you want to Delete or Edit?'}
        id={deleteId}
        getDeleteId={getDeleteId}
      />
      <div key={index}
        className={`data__point-container d-flex justify-content-center align-items-center mb-2 mx-1 cursor ${
          name.selected ? 'data__point-select' : ''}`}>
        <p
          onClick={selected ? (e) => {handleOnClick(e, name)} : (e) => url(`/admin/update-datapoint/${name._id}`)}
          className={`fs-6 select-point data-point-template text-white px-4 rounded-start d-flex align-items-center justify-content-center align-self-stretch`}
        >
          {name.dataPointName}
          {name.fieldGroupName && ` (${name.fieldGroupName})`}
        </p>
        <OverlayTrigger
          trigger="click"
          key={'top'}
          rootClose={true}
          show={tooltip}
          placement={'top'}
          overlay={
            <Popover id={`popover-positioned-${'top'}`}>
              <Popover.Header
                as="h3"
                className=" my-1 d-flex align-items-center justify-content-between bg-white gap-4"
              >
                <div className=" modal-before ">This is a Radio Button</div>
                <button
                  onClick={() => {
                    settooltip(false)
                  }}
                  type="button"
                  role="button"
                  className="btn-close tooltip-close bg-gray text-center"
                ></button>
              </Popover.Header>
              <Popover.Body className="tooltip-body py-2 ms-2">
                {name.Description != ''
                  ? name.description
                  : 'Any description Provided when creating the data point goes and this tool tip appears when the yellow question mark is clicked'}
              </Popover.Body>
            </Popover>
          }
        >
          <p
            onClick={() => settooltip()}
            ref={first}
            className="data-template-icon description-toggle rounded-end datapoint-icon "
          >
            <BiQuestionMark className="fs-4" />
          </p>
        </OverlayTrigger>
      </div>
    </>
  )
}

export default DataPoint
