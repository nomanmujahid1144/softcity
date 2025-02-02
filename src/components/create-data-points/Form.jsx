import React, { useState, useCallback, useEffect, useContext } from "react";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import Inputs from "./Inputs";
import { BsArrowRight, BsTrash, BsPlus  } from "react-icons/bs";
import DashboardContext from "../../Context/DashboardContext";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import { useDispatch, useSelector } from "react-redux";
import {
  createDataPoints,
  getDataPoints,
} from "../../redux/slices/createDataPointsSlice";
import Alert from "react-bootstrap/Alert";
import "../alertProceed/alertProceed.css";
import { BsX } from "react-icons/bs";
import { v4 as uuidv4 } from 'uuid';

const inputFieldsDataTypes = [
  { dataTypeName: '-- Select any Data Type --', value: '', name: '' },
  { dataTypeName: 'Text Field', value: 'text', name: 'Text Field' },
  { dataTypeName: 'Number Field', value: 'number', name: 'Number Field' },
  { dataTypeName: 'Decimal Field', value: 'decimal', name: 'Decimal Field' },
  { dataTypeName: 'Email Field', value: 'email', name: 'Email Field' },
  { dataTypeName: 'Dates Field', value: 'date', name: 'Dates Field' },
  { dataTypeName: 'Web Address Field', value: 'url', name: 'Web Address Field' },
  { dataTypeName: 'Maps Coordinates Field', value: 'text', name: 'Maps Coordinates Field' },
  { dataTypeName: 'Radio Button Field', value: 'radio', name: 'Radio Button Field' },
  { dataTypeName: 'Check Box Field', value: 'checkbox', name: 'Check Box Field' },
  { dataTypeName: 'Counter Field', value: 'number', name: 'Counter Field' },
  { dataTypeName: 'Image Field', value: 'file', name: 'Image Field' }
];

const prefixedLabel = "Dear User, kindly prefill this column with labels for each row:";

const noOfColumnsList = Array.from({ length: 12 }, (_, i) => i + 1);


const Form = ({ submitted }) => {
  const submit = useContext(DashboardContext);
  const { fetch_data, mode, dataForm, createDataArr, setCreateDataArr } =
    submit;
  const methods = useForm();
  const { roles } = useSelector((state) => state.auth);
  const { register, handleSubmit, watch, reset, setValue } = methods;

  const { id } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState([
    { dataPointName: "", description: "", checkbox: "" },
  ]);
  const [show, setShow] = useState(false);
  const [rows, setRows] = useState([{ id: uuidv4() }]);
  const [showCols, setShowCols] = useState(null);
  const [showLabels, setShowLabels] = useState(false);
  const [ischecked, setischecked] = useState(false);
  const [columns, setcolumns] = useState([]);
  const [state, setstate] = useState(false);

  //add
  const add1 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([obj, ...inputFields]);
  };

  const add2 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([...inputFields, obj]);
  };

  //checkbox logic
  const checkbox = function () {
    setischecked(!ischecked);
  };

  //data pointtype
  const onchange = function (e) {
    e.persist();
    e.preventDefault();
    console.log(e.target.value);
    const doNotEnableSheetMode = ["radio", "checkbox", "number", "file"]; 
    
    if (doNotEnableSheetMode.includes(e.target.value)) {
      setischecked(false);
    } else {
      setischecked(true);
    }
  };

  const createColumns = function (e) {
    //a little animation
    setValue("NoOfColumns", e.target.value);
    let array = new Array(+e.target.value).fill({ label: "", column: "" });
    setcolumns(array);
  };

  const onchangetext = function (e) {};
  //submit
  const formreset = function () {
    setstate(false);
    setischecked(false);
    setcolumns([]);
    reset();
  };

  const labelcolumns = function (e, index) {
    setValue(`labelColumn`, [...e.target.value]);
  };

  const [labelColArr, setLabelColArr] = useState([]);
  const labelColumnhandler = (e, ind) => {
    labelColArr[ind] = e.target.value;
    setValue("LabelColumns", labelColArr);
  };

  const [dataColArr, setDataColArr] = useState([]);
  const dataColumnhandler = (e, ind) => {
    dataColArr[ind] = e.target.value;
    setValue("LabelColumns", dataColArr);
  };

  const setDataLabelColumn = (e, ind) => {
    var dataLabelColumn  = {
      key: showCols,
      data: dataColArr
    }
    console.log(dataLabelColumn); 
  }

  const onSubmit = (data) => {
    fetch_data(data);
    // fetch_data(data)
    // const { dataForm } = dataForm

    const dataArr = {
      companyId: id,
      dataPointName: data.DataPointName,
      dataPointType: data.dataFieldType,
      description: data.Description,
      enableSheetMode: data.enableSheetMode,
      noOfColumns: +data.NoOfColumns,
      labelColumns: labelColArr,
      dataColumns: dataColArr,
    };

    console.log(dataArr, "Array");

    dispatch(createDataPoints(dataArr));
    dispatch(getDataPoints());
    setCreateDataArr(true);
    formreset();
    submitted();
  };


  const addRow = () => {
    setRows([...rows, { id: uuidv4() }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter(row => row.id !== id));
  };


  const handleChange = (index, event) => {
    const newRows = rows.map((row, rowIndex) => {
      if (rowIndex === index) {
        return { ...row, value: event.target.value };
      }
      return row;
    });
    setRows(newRows);
  };

  return (
    <>
      <div className="">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="position-relative">
            <Alert
              show={show}
              variant=""
              className="w-100 h-[100vh] bg-0 d-flex justify-content-center align-items-center position-absolute z-1 top-0 left-0"
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
                  {/* {!showLabels ? (
                    <>
                      <p className="mt-3 fs-5 fw-bold text-center ">
                        Dear User, kindly prefill this column with labels for each row:
                      </p>
                      <table className="table my-4">
                        <thead>
                          <tr>
                            {labelColArr.map((header, ind) => (
                              <th key={ind}>{header}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr key={row.id}>
                              {labelColArr.map((header, colIndex) => (
                                <td key={colIndex}>
                                  <input
                                    type="text"
                                    name={`${header}_${rowIndex + 1}`}
                                    className="form-control"
                                  />
                                </td>
                              ))}
                              {rowIndex !== 0 && (
                                <td>
                                  <button type="button" className="btn btn-danger" onClick={() => deleteRow(row.id)}>
                                    <BsTrash />
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-success w-auto px-3" onClick={addRow}>
                          <BsPlus /> Add More
                        </button>
                      </div>
                      <div className="d-flex justify-content-center my-3">
                        <button type="submit" className="btn mx-2 py-2 create-btn-form">
                          Save
                        </button>
                        <button type="submit" className="btn mx-2 py-2 create-btn-form">
                          Cancle
                        </button>
                      </div>

                    </>
                  ) : null} */}
                  {!showLabels ? (
                    <>
                      <table className="table table-fixed my-4">
                        <thead>
                          <tr>
                            <th>{prefixedLabel}</th>
                            {labelColArr.map((header, ind) => (
                              <th key={ind}>{header}</th>
                            ))}
                            <th></th>
                          </tr>
                        </thead>
                        <tbody>
                          {rows.map((row, rowIndex) => (
                            <tr key={row.id}>
                              <td>
                                <input
                                  type="text"
                                  name={`prefixedLabel_${rowIndex + 1}`}
                                  className="form-control"
                                  value={row.value}
                                  onChange={(e) => handleChange(rowIndex, e)}
                                />
                              </td>
                              {labelColArr.map((header, colIndex) => (
                                <td key={colIndex}>
                                  <input
                                    type="text"
                                    disabled={true}
                                    className="form-control cursor-disabled"
                                  />
                                </td>
                              ))}
                              {rowIndex !== 0 && (
                                <td>
                                  <button type="button" className="btn btn-danger" onClick={() => deleteRow(row.id)}>
                                    <BsTrash />
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
                        <button type="button" className="btn btn-success w-auto px-3" onClick={addRow}>
                          <BsPlus /> Add More
                        </button>
                      </div>
                      <div className="d-flex justify-content-center my-3">
                        <button type="submit" className="btn mx-2 py-2 create-btn-form">
                          Save
                        </button>
                        <button type="button" className="btn mx-2 py-2 create-btn-form" onClick={() => console.log('Cancel button clicked')}>
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : null}

                  <div className="col-12 mb-4 d-flex justify-content-center ">
                    <div className="blue-line mt-3"></div>
                  </div>

                </div>
              </div>
            </Alert>

            <section>
              <main
                className={` ${
                  mode === "dark-mode" ? "text-white" : "text-dark"
                }`}
              >
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="header-beforeAdmin">Create Data Point</h5>
                  <div className="d-flex flex-row align-items-center gap-2">
                    <div>
                      {ischecked ? (
                        <>
                          <button
                            type="button"
                            className="btn py-2 btn-primary btn-darkblue me-3"
                            onClick={(e) => setShow(true)}
                          >
                            Create <BsArrowRight />
                          </button>
                        </>
                      ) : (
                        <button
                          type="submit"
                          className="btn py-2 btn-primary btn-darkblue me-3"
                        >
                          Create <BsArrowRight />
                        </button>
                      )}
                      <button
                        onClick={() => {
                          formreset();
                        }}
                        type="submit"
                        className="btn btn-dark py-2 create-btn-form"
                      >
                        Reset
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </section>
            <section className="d-flex flex-row gap-lg-5 flex-grow py-4 px-5 my-3 bg-white rounded-3">
              <div className="flex-grow">
                <div className="mb-4">
                  <label
                    htmlFor="DataPointname"
                    className="form-label form-text"
                  >
                    Data Point name
                  </label>
                  <input
                    {...register("DataPointName")}
                    onChange={onchangetext}
                    required="true"
                    // value={textField.datapointname || ""}
                    autofocus="true"
                    placeholder="Data point name"
                    type="text"
                    name="DataPointName"
                    className="form-control inputs-data"
                    id="DataPointname"
                    aria-describedby="Data-Point-name"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="DataType" className="form-label form-text">
                    Data Point Type
                  </label>
                  <select
                    {...register("dataFieldType")}
                    id="DataType"
                    onChange={onchange}
                    name="dataFieldType"
                    className="form-select select"
                  >
                    {inputFieldsDataTypes.map((option, index) => (
                      <option className="options" selected={index === 0} hidden={index === 0} value={option.value} name={option.name} >
                        {option.dataTypeName}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="flex-grow">
                <label
                  className="form-check-label check-label mb-3 "
                  htmlFor="DataDescription"
                >
                  Description:
                </label>
                <textarea
                  {...register("Description")}
                  className="text-area form-control"
                  name="Description"
                  id="DataDescription"
                  cols="40"
                  rows="3"
                  minLength="5"
                  maxLength="10000"
                  placeholder="Description"
                ></textarea>
              </div>
              <div className={`flex-grow-1 d-flex flex-column ${!ischecked ? 'not-allowed background-light-grap-not-allowed' : ''}`}>
                {/* <div className="form-check mb-2">
                  <label className={`form-check-label ${!ischecked ? 'not-allowed ' : ''}`} htmlFor="exampleCheck1">
                    Enable Sheet Mode
                  </label>
                  <input
                    {...register("enableSheetMode")}
                    onChange={checkbox}
                    name="enableSheetMode"
                    type="checkbox"
                    className={`form-check-input ${!ischecked ? 'not-allowed' : ''}`}
                    id="exampleCheck1"
                    checked={ischecked}
                  />
                </div> */}
                <div className="mb-2">
                  <label
                    htmlFor="DataPointType"
                    className={`form-label form-text ${!ischecked ? 'not-allowed' : ''}`}
                  >
                    No. of Columns
                  </label>
                  <select
                    id="DataPointType"
                    onChange={createColumns}
                    name={`columns`}
                    disabled={!ischecked}
                    className={`form-select select ${!ischecked ? 'not-allowed' : ''}`}
                  >
                    <option value="1" selected hidden>
                      -- select an option --
                    </option>
                    {noOfColumnsList.map((number) => (
                      <option key={number} value={number}>
                        {number}
                      </option>
                    ))}
                  </select>
                </div>
                <label htmlFor="DataPointType" className={`form-label form-text ${!ischecked ? 'not-allowed' : ''}`}>
                  Label Columns
                </label>
                <div className="carousal-form">
                  <Carousel
                    interval={null}
                    indicators={false}
                    prevIcon={
                      <BsFillCaretLeftFill className="text-dark fs-10 z-0" />
                    }
                    nextIcon={
                      <BsFillCaretRightFill className="text-dark fs-10 z-0" />
                    }
                  >
                    {!ischecked && (
                      <Carousel.Item>
                        <div>
                          <input
                            disabled
                            type="text"
                            className={`form-control form-column ${!ischecked ? 'not-allowed' : ''}`}
                            id="DataPointname"
                            aria-describedby="Data-Point-name"
                          />
                        </div>
                      </Carousel.Item>
                    )}
                    {ischecked &&
                      columns.map((res, ind) => {
                        return (
                          <Carousel.Item key={ind}>
                            <div>
                              <input
                                onChange={(e) => labelColumnhandler(e, ind)}
                                autoFocus={true}
                                placeholder={`Column-${ind + 1}`}
                                type="text"
                                className="form-control form-column "
                                id="DataPointname"
                                aria-describedby="Data-Point-name"
                              />
                            </div>
                          </Carousel.Item>
                        );
                      })}
                  </Carousel>
                </div>
              </div>
              {/* <div className="d-flex justify-content-between align-items-center buttons-style">
              <div>
                <button type="submit" className="btn mx-2 py-2 create-btn-form">
                  Update <BsArrowRightShort className="btn-icon" />
                </button>
                <button
                  onClick={() => {
                    formreset();
                  }}
                  type="submit"
                  className="btn py-2 create-btn-form"
                >
                  Reset
                </button>
              </div>
            </div> */}
            </section>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Form;
