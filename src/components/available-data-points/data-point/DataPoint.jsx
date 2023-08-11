import React, { useContext, useRef, useState } from 'react'
import { BiQuestionMark } from 'react-icons/bi'
import './DataPoint.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Popover from 'react-bootstrap/Popover'
import context from '../../../Context/DashboardContext'
import { useEffect } from 'react'

const DataPoint = ({ data, index, arr }) => {
  // const {
  //   dataPointName,
  //   dataPointType,
  //   description,
  //   enableSheetMode,
  //   labelColumns,
  //   date,
  //   noOfColumns,
  // } = data

  const name = data

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
  const [show, setShow] = useState(true)
  const [classselect, setclassselect] = useState(false)
  const [tooltip, settooltip] = useState()
  // for changing datapoint color on selecttion
  const first = useRef()
  const onclick = function (e, arg) {
    //data point color changing
    // selectedDataPoints.push(arg)
    setSelectedDataPoints([...selectedDataPoints, arg])
    setdefaultclass(true)
    setclassselect(!classselect)
    // let check = ([name.selected] = true)
    // setting(index)

    //pasing index to parent
  }
  useEffect(() => {
    // selectedDataPoints.push([data._id])
  }, [selectedDataPoints])

  return (
    <>
      <div
        key={index}
        className={`data__point-container d-flex justify-content-center align-items-center mb-2 mx-1 cursor ${
          name.selected && 'data__point-select'
        }`}
      >
        <p
          onClick={(e) => {
            onclick(e, name._id)
          }}
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
