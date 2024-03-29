import React, { useState, useCallback, useEffect, useContext } from "react";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import Inputs from "./Inputs";
import { BsArrowRight } from "react-icons/bs";
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

const Form = ({ submitted }) => {
  const submit = useContext(DashboardContext);
  const { fetch_data, mode, dataForm, createDataArr, setCreateDataArr } =
    submit;
  const methods = useForm();
  const { register, handleSubmit, watch, reset, setValue } = methods;

  const { id } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const [inputFields, setInputFields] = useState([
    { dataPointName: "", description: "", checkbox: "" },
  ]);
  const [show, setShow] = useState(false);
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
    setischecked(false);

    //triggering number selecton based on that checkbox
    if (e.target.value === "number") {
      setstate({
        success: false,
        type: e.target.value,
        boxdescription: true,
      });
    }
    //
    else if (e.target.value === "text-area") {
      setstate({
        success: false,
        type: e.target.value,
      });
    } else if (
      e.target.value === "Sdrop-TextField" ||
      e.target.value === "Mdrop-NumberField" ||
      e.target.value === "Mdrop-TextField" ||
      e.target.value === "checkbox" ||
      e.target.value === "radio" ||
      e.target.value === "date" ||
      e.target.value === "url" ||
      e.target.value === "Mdrop-NumberField"
    ) {
      //setting custom label
      if (
        e.target.value === "Mdrop-NumberField" ||
        e.target.value === "Sdrop-TextField" ||
        e.target.value === "Mdrop-TextField" ||
        e.target.value === "date" ||
        e.target.value === "Mdrop-NumberField"
      ) {
        setstate((state) => ({
          ...state,
          boxdescription: false,
          label: "Label Drop",
          success: true,
        }));
      }
      if (e.target.value === "radio") {
        setstate((state) => ({ ...state, label: "Label Radio" }));
      }
      if (e.target.value === "checkbox") {
        setstate((state) => ({ ...state, label: "Label Box" }));
      }
      //settingthe little checkbox next to description box
      if (
        e.target.value === "checkbox" ||
        e.target.value === "radio" ||
        e.target.value === "date" ||
        e.target.value === "url" ||
        e.target.value === "Mdrop-NumberField" ||
        e.target.value === "number"
      ) {
        setstate((state) => ({ ...state, boxdescription: true }));
      }
      //default final state
      setstate((state) => ({ ...state, allow: true, success: true }));
    } else {
      setstate({ success: false });
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

  return (
    <>
      <div className="">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="position-relative">
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

                  {!showLabels ? (
                    <p className="mt-3 fs-5 fw-bold text-center ">
                      Would you like to prefill a column?
                    </p>
                  ) : !showCols ? (
                    <p className="mt-3 fs-5 fw-bold text-center ">
                      Select a Column to fill it
                    </p>
                  ) : (
                    <p className="mt-3 fs-5 fw-bold text-center ">
                      Enter the data into the Columns Below
                    </p>
                  )}

                  <div className="col-12 mb-4 d-flex justify-content-center ">
                    <div className="blue-line mt-3"></div>
                  </div>

                  {showCols ? (
                    <div className="carousal-form mb-4">
                      <Carousel
                        interval={null}
                        indicators={false}
                        // wrap={false}
                        prevIcon={
                          <BsFillCaretLeftFill className="text-dark fs-10" />
                        }
                        nextIcon={
                          <BsFillCaretRightFill className="text-dark fs-10" />
                        }
                      >
                        {!ischecked && (
                          <Carousel.Item>
                            <div>
                              <input
                                disabled
                                type="text"
                                className="form-control form-column "
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
                                    onChange={(e) => dataColumnhandler(e, ind)}
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
                  ) : null}

                  {showLabels && !showCols ? (
                    <div className="carousal-form mb-4">
                      {labelColArr.map((elem, ind) => {
                        return (
                          <button
                            type="button"
                            className="btn-light rounded-2 border-0 px-3 py-2 me-2"
                            onClick={(e) => {
                              e.preventDefault();
                              setShowCols(elem);
                            }}
                          >
                            {elem}
                          </button>
                        );
                      })}
                    </div>
                  ) : null}

                  {!showLabels || showCols ? (
                    !showCols ? (
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          type="button"
                          className="btn-light rounded-2 border-0 px-3"
                          onClick={(e) => {
                            e.preventDefault();
                            setShowLabels(true);
                          }}
                        >
                          Yes
                        </button>
                        <button
                          type="submit"
                          className="btn-blue rounded-2 border-0 px-3"
                          onClick={(e) => {
                            setShow(false);
                            setShowLabels(false);
                            setShowCols(null);
                          }}
                        >
                          No
                        </button>
                      </div>
                    ) : (
                      <div className="d-flex justify-content-center gap-2">
                        <button
                          type="button"
                          className="btn-light rounded-2 border-0 px-3 py-2"
                          onClick={(e) => {
                            e.preventDefault();
                            setDataLabelColumn();
                            setShowLabels(true);
                            setShowCols(null);
                          }}
                        >
                          Done
                        </button>
                      </div>
                    )
                  ) : (
                    <div className="d-flex justify-content-center gap-2">
                      <button
                        type="submit"
                        className="btn-blue rounded-2 border-0 px-3"
                      >
                        Create
                      </button>
                      <button
                        type="button"
                        className="btn-light rounded-2 border-0 px-3"
                        onClick={(e) => {
                          setShow(false);
                          setShowLabels(false);
                          setShowCols(null);
                        }}
                      >
                        No
                      </button>
                    </div>
                  )}
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
                    <option
                      className="options"
                      selected
                      value="Text"
                      name="Text Field"
                    >
                      Text field
                    </option>
                    <option
                      className="options"
                      value="Whole Number"
                      name="Text Field"
                    >
                      Whole Number field
                    </option>
                    <option
                      className="options"
                      value="Decimal Number"
                      name="Text Field"
                    >
                      Decimal Number field
                    </option>
                    <option
                      className="options"
                      value="Email"
                      name="Email Field"
                    >
                      Email field
                    </option>
                    <option className="options" value="Date" name="Email Field">
                      Date field
                    </option>
                    <option
                      className="options"
                      value="Web Address"
                      name="Email Field"
                    >
                      Web Address field
                    </option>
                    <option
                      className="options"
                      value="Single Selection Text Dropdown"
                      name="Email Field"
                    >
                      Single selection Dropdown text field
                    </option>
                    <option
                      className="options"
                      value="Multi Selection Text Dropdown"
                      name="Email Field"
                    >
                      Multi Selection Dropdown text field
                    </option>
                    <option
                      className="options"
                      // value="Mdrop-NumberField"
                      value="Single Selection Number Dropdown"
                      name="Email Field"
                    >
                      Single selection Dropdown number field
                    </option>
                    <option
                      className="options"
                      // value="Mdrop-NumberField"
                      value="Multi Selection Number Dropdown"
                      name="Email Field"
                    >
                      Multi Selection Dropdown number field
                    </option>
                    <option
                      className="options"
                      value="Radio"
                      name="Email Field"
                    >
                      Radio buttons
                    </option>
                    <option
                      className="options"
                      value="Checkbox"
                      name="Email Field"
                    >
                      Checkboxes
                    </option>
                    <option
                      className="options"
                      value="Currency"
                      name="Number Field:"
                    >
                      Currency Price field
                    </option>
                    <option
                      className="options"
                      value="Text Area"
                      name="TextArea Field:"
                    >
                      Text-area
                    </option>
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
              <div className="flex-grow-1 d-flex flex-column">
                <div className="form-check mb-2">
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Enable Sheet Mode
                  </label>
                  <input
                    {...register("enableSheetMode")}
                    onChange={checkbox}
                    name="enableSheetMode"
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                    checked={ischecked}
                  />
                </div>
                <div className="mb-2">
                  <label
                    htmlFor="DataPointType"
                    className="form-label form-text"
                  >
                    No. of Columns
                  </label>
                  <select
                    id="DataPointType"
                    onChange={createColumns}
                    name="columns"
                    disabled={!ischecked}
                    className="form-select select"
                  >
                    <option value="1" selected hidden>
                      -- select an option
                    </option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                  </select>
                </div>
                <label htmlFor="DataPointType" className="form-label form-text">
                  Label Columns
                </label>
                <div className="carousal-form">
                  <Carousel
                    interval={null}
                    indicators={false}
                    // wrap={false}
                    prevIcon={
                      <BsFillCaretLeftFill className="text-dark fs-10" />
                    }
                    nextIcon={
                      <BsFillCaretRightFill className="text-dark fs-10" />
                    }
                  >
                    {!ischecked && (
                      <Carousel.Item>
                        <div>
                          <input
                            disabled
                            type="text"
                            className="form-control form-column "
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
                                // onChange={labelColumnhandler}
                                // {...register(
                                //   `${
                                //     ischecked &&
                                //     `${state.label || 'LabelColumns Column'}-${
                                //       ind + 1
                                //     }`
                                //   }`,
                                // )}
                                autoFocus={true}
                                placeholder={`Column-${ind + 1}`}
                                // name={`${
                                //   state.label || 'LabelColumns Column'
                                // }-${ind + 1}`}
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
