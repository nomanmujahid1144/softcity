import React, { useState, useCallback, useEffect, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./createdatapoints.css";
import { BsArrowRightShort } from "react-icons/bs";
import { useForm, FormProvider, useFormState } from "react-hook-form";
import Inputs from "./Inputs";
import { BsArrowRight } from "react-icons/bs";
import DashboardContext from "../../Context/DashboardContext";
import { BsFillCaretLeftFill } from "react-icons/bs";
import { BsFillCaretRightFill } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDataPoint,
  getDataPoints,
  getDataPoint,
} from "../../redux/slices/createDataPointsSlice";
import { AUTH_TOKEN, BASE_URL } from "../../redux/constants/reduxContants";

const Form = () => {
  const url = useNavigate();
  const submit = useContext(DashboardContext);
  const { fetch_data, mode, dataForm, createDataArr, setCreateDataArr } =
    submit;
  const [ datapoint, setDatapoint ] = useState({});
  const methods = useForm();
  const { register, handleSubmit, watch, reset, setValue } = methods;

  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const params = useParams();
  //
  const [inputFields, setInputFields] = useState([
    { dataPointName: "", description: "", checkbox: "" },
  ]);
  const [descheck, setdescheck] = useState(false);
  const [refs, setrefs] = useState("hidden");
  const [ischecked, setischecked] = useState(datapoint?.enableSheetMode);
  const [columns, setcolumns] = useState([]);
  const [state, setstate] = useState(false);
  const [dataPoint, setDataPoint] = useState({});
  //

  //add
  const add1 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([obj, ...inputFields]);
  };
  const add2 = function () {
    const obj = { dataPointName: "", description: "", checkbox: null };
    setInputFields([...inputFields, obj]);
  };

  useEffect(async () => {
    if (params.id) {
      getDataPoint(params.id)
    }
  }, [params.id]);

  const getDataPoint = async function (id) {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/datapoints/getdatapoint/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
        }
      );

      console.log("response", response.data.data);
      setDatapoint(response.data.data);
    } catch (error) {
      console.log("error in fetching get data point", error);
    }
  }

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
      //setting the little checkbox next to description box
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
  //
  const createColumns = function (e) {
    //a little animation

    console.log(e.target.value);
    setValue("NoOfColumns", e.target.value);
    let array = new Array(+e.target.value).fill({ label: "", column: "" });
    setcolumns(array);
  };
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
    console.log(e.target.value, ind);
    labelColArr[ind] = e.target.value;
    setValue("LabelColumns", labelColArr);
    console.log("log", labelColArr);
  };

  const onSubmit = (data) => {
    fetch_data(data);
    // fetch_data(data)
    // const { dataForm } = dataForm
    const dataArr = {
      companyId: id,
      dataPointName:
        data?.DataPointName == ""
          ? datapoint?.DataPointName
          : data?.DataPointName,
      dataPointType:
        data?.dataFieldType == ""
          ? datapoint?.dataFieldType
          : data?.dataFieldType,
      description:
        data?.Description == "" ? datapoint?.Description : data?.Description,
      enableSheetMode:
        data?.enableSheetMode == ""
          ? datapoint?.enableSheetMode
          : data?.enableSheetMode,
      noOfColumns:
        data?.NoOfColumns !== null
          ? +data?.NoOfColumns
          : datapoint?.noOfColumns,
      labelColumns:
        labelColArr?.length > 0 ? labelColArr : datapoint?.labelColArr,
    };

    dispatch(updateDataPoint({ dataArr: dataArr, id: params.id }));
    dispatch(getDataPoints());
    setCreateDataArr(true);
    url(`/admin/Assigned/data-point`);
    // formreset();
  };

  return (
    <>
      <div className="">
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <section>
              <main
                className={` ${
                  mode === "dark-mode" ? "text-white" : "text-dark"
                }`}
              >
                <div className="d-flex flex-row align-items-center justify-content-between">
                  <h5 className="header-beforeAdmin">Update Data Point</h5>
                  <div className="d-flex flex-row align-items-center gap-2">
                    <div>
                      <button
                        type="submit"
                        className="btn py-2 btn-primary btn-darkblue me-3"
                      >
                        Update <BsArrowRight />
                      </button>
                    </div>
                  </div>
                </div>
              </main>
            </section>
            {datapoint && (
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
                      required="true"
                      autofocus="true"
                      placeholder="Data point name"
                      type="text"
                      name="DataPointName"
                      className="form-control inputs-data"
                      id="DataPointname"
                      key={datapoint?.dataPointName}
                      defaultValue={datapoint?.dataPointName || ""}
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
                        value={datapoint?.dataPointType}
                        name={datapoint?.dataPointType + " Field"}
                        hidden
                      >
                        {datapoint?.dataPointType}
                      </option>
                      <option
                        className="options"
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
                      <option
                        className="options"
                        value="Date"
                        name="Email Field"
                      >
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
                        value="Single Selection Dropdown"
                        name="Email Field"
                      >
                        Single selection Dropdown text field
                      </option>
                      <option
                        className="options"
                        value="Multi Selection Dropdown"
                        name="Email Field"
                      >
                        Multi Selection Dropdown text field
                      </option>
                      <option
                        className="options"
                        value="Mdrop-NumberField"
                        name="Email Field"
                      >
                        Single selection Dropdown number field
                      </option>
                      <option
                        className="options"
                        value="Mdrop-NumberField"
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
                    maxLength="30"
                    placeholder="Description"
                    key={datapoint?.description || ""}
                    defaultValue={datapoint?.description || ""}
                  ></textarea>
                </div>
                <div className="flex-grow-1 d-flex flex-column">
                  <div className="form-check mb-2">
                    <label className="form-check-label" htmlFor="exampleCheck1">
                      Enable Sheet Mode {ischecked}
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
                        {ischecked
                          ? datapoint?.noOfColumns
                          : "-- select an option"}
                      </option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                    </select>
                  </div>
                  <label
                    htmlFor="DataPointType"
                    className="form-label form-text"
                  >
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
                      {ischecked && datapoint?.labelColumns.length > 0
                        ? datapoint?.labelColumns.map((res, ind) => {
                            return (
                              <Carousel.Item key={ind}>
                                <div>
                                  <input
                                    // onChange={(e) => labelcolumns(e, ind)}
                                    onChange={(e) => labelColumnhandler(e, ind)}
                                    // {...register(
                                    //   `${
                                    //     ischecked &&
                                    //     `${state.label || 'LabelColumns Column'}-${
                                    //       ind + 1
                                    //     }`
                                    //   }`,
                                    // )}

                                    defaultValue={
                                      datapoint?.enableSheetMode
                                        ? datapoint?.labelColumns[ind]
                                        : ""
                                    }
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
                          })
                        : columns.map((res, ind) => {
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
            )}
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Form;
