import React, { useContext, useRef, useState } from "react";
import { BiQuestionMark } from "react-icons/bi";
import "./DataPoint.css";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import context from "../../../Context/DashboardContext";
import OptionAlert from "../../alertProceed/OptionAlert";
import DeleteAlert from "../../alertProceed/DeleteAlert";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Alert from "react-bootstrap/Alert";
import "../../alertProceed/alertProceed.css";
import { BsX } from "react-icons/bs";
import {
  deleteDataPoint,
  getDataPoints,
} from "../../../redux/slices/createDataPointsSlice";

const DataPoint = ({
  data,
  index,
  arr,
  selected,
  handleClicksTab,
  alreadySelected,
}) => {
  const url = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState({});

  const indexData = useContext(context);
  const {
    setting,
    point,
    defaultclass,
    setdefaultclass,
    setpoint,
    selectedDataPoints,
    setSelectedDataPoints,
    handleRefresh,
  } = indexData;
  const [show, setShow] = useState(false);
  const [deleteShow, setDeleteShow] = useState(false);
  const [deleteId, setDeleteId] = useState(name._id);
  const [classselect, setclassselect] = useState(false);
  const [tooltip, settooltip] = useState();
  const { roles } = useSelector((state) => state.auth);
  // for changing datapoint color on selecttion
  const first = useRef();

  const handleOnClick = function (e, arg) {
    handleClicksTab(e, arg);
    setclassselect(!classselect);
    // // Check the value of classselect

    e.selected = !e.selected;

    // Toggle the value of classselect
    setdefaultclass(true);
  };

  useEffect(() => {
    if (data) {
      setName(data);
    }
  }, [data]);

  const deleteDataPointHandler = (id) => {
    dispatch(deleteDataPoint(id));
    dispatch(getDataPoints());
    setShow(false);
    setDeleteShow(false);
  };

  return (
    <>
      <Alert
        show={show}
        variant=""
        className="w-100 h-100 bg-0 d-flex justify-content-center align-items-center position-absolute z-1 top-0 left-0"
      >
        <div className="bs bg-white rounded-4 p-3 pb-4">
          <div>
            <div className="d-flex justify-content-end">
              <button
                type="button"
                className="rounded border-0 fs-5"
                onClick={() => setShow(false)}
              >
                <BsX />
              </button>
            </div>

            <p className="mt-3 fs-5 fw-bold text-center ">
              What would you like to do?
            </p>
            <div className="col-12 mb-4 d-flex justify-content-center ">
              <div className="blue-line mt-3"></div>
            </div>
            <div className="d-flex justify-content-center gap-2">
              {(roles == null || roles?.deleteDatapoint) && (
                <button
                  type="button"
                  className="btn-blue rounded-2 border-0 px-3"
                  onClick={(e) => {
                    url(`/admin/update-datapoint/${name._id}`);
                    setShow(false);
                  }}
                >
                  Edit
                </button>
              )}
              {(roles == null || roles?.updateDatapoint) && (
                <button
                  type="button"
                  className="btn-light rounded-2 border-0 px-3"
                  onClick={(e) => setDeleteShow(true)}
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      </Alert>
      <DeleteAlert
        show={deleteShow}
        setShow={setDeleteShow}
        heading="Are you sure you want to delete this DataPoint"
        deleteButton="Yes"
        id={name._id}
        getDeleteId={deleteDataPointHandler}
      />
      <div
        key={index}
        className={`data__point-container d-flex justify-content-center align-items-center mb-2 mx-1 cursor ${
          name.selected ? "data__point-select" : ""
        }`}
      >
        <p
          onClick={
            selected
              ? (e) => {
                  handleOnClick(e, name);
                }
              : (e) => setShow(true)
          }
          className={`fs-6 select-point data-point-template text-white px-4 rounded-start d-flex align-items-center justify-content-center align-self-stretch`}
        >
          {name.dataPointName}
          {name.fieldGroupName && ` (${name.fieldGroupName})`}
        </p>
        <OverlayTrigger
          trigger="click"
          key={"top"}
          rootClose={true}
          show={tooltip}
          placement={"top"}
          overlay={
            <Popover id={`popover-positioned-${"top"}`}>
              <Popover.Header
                as="h3"
                className=" my-1 d-flex align-items-center justify-content-between bg-white gap-4"
              >
                <div className=" modal-before ">This is a Radio Button</div>
                <button
                  onClick={() => {
                    settooltip(false);
                  }}
                  type="button"
                  role="button"
                  className="btn-close tooltip-close bg-gray text-center"
                ></button>
              </Popover.Header>
              <Popover.Body className="tooltip-body py-2 ms-2">
                {name.Description != ""
                  ? name.description
                  : "Any description Provided when creating the data point goes and this tool tip appears when the yellow question mark is clicked"}
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
  );
};

export default DataPoint;
