import React, { useState, useEffect, useContext } from "react";
import "./createdatapoints.css";
import { BsTrash, BsPlus, BsArrowRight, BsX, BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { useForm, FormProvider } from "react-hook-form";
import DashboardContext from "../../Context/DashboardContext";
import { useDispatch, useSelector } from "react-redux";
import { createDataPoints, getDataPoints } from "../../redux/slices/createDataPointsSlice";
import { v4 as uuidv4 } from "uuid";
import { useParams } from "react-router-dom";
import { AUTH_TOKEN, BASE_URL } from "../../redux/constants/reduxContants";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import Alert from 'react-bootstrap/Alert';

const inputFieldsDataTypes = [
  { dataTypeName: "-- Select any Data Type --", value: "", name: "" },
  { dataTypeName: "Text Field", value: "text", name: "Text Field" },
  { dataTypeName: "Number Field", value: "number", name: "Number Field" },
  { dataTypeName: "Decimal Field", value: "decimal", name: "Decimal Field" },
  { dataTypeName: "Email Field", value: "email", name: "Email Field" },
  { dataTypeName: "Dates Field", value: "date", name: "Dates Field" },
  { dataTypeName: "Web Address Field", value: "url", name: "Web Address Field" },
  { dataTypeName: "Maps Coordinates Field", value: "text", name: "Maps Coordinates Field" },
  { dataTypeName: "Radio Button Field", value: "radio", name: "Radio Button Field" },
  { dataTypeName: "Check Box Field", value: "checkbox", name: "Check Box Field" },
  { dataTypeName: "Counter Field", value: "number", name: "Counter Field" },
  { dataTypeName: "Image Field", value: "file", name: "Image Field" },
];

const prefixedLabel =
  "Dear User, kindly prefill this column with labels for each row:";

const noOfColumnsList = Array.from({ length: 12 }, (_, i) => i + 1);

const Form = ({ submitted }) => {
  const submit = useContext(DashboardContext);
  const { fetch_data, mode, createDataArr, setCreateDataArr } = submit;
  const methods = useForm();
  const { register, handleSubmit, reset, setValue } = methods;
  const { id } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const params = useParams();

  const [inputFields, setInputFields] = useState([{ dataPointName: "", description: "", checkbox: "" }]);
  const [rows, setRows] = useState([{ id: uuidv4() }]);
  const [columns, setColumns] = useState([]);
  const [showLabels, setShowLabels] = useState(false);
  const [ischecked, setischecked] = useState(false);
  const [datapoint, setDatapoint] = useState(null);
  const [labelColArr, setLabelColArr] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (params.id) {
      getDataPoint(params.id);
    }
  }, [params.id]);

  const getDataPoint = async (id) => {
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

      const data = response.data.data;
      setValue("DataPointName", data.dataPointName);
      setValue("dataFieldType", data.dataPointType);
      setValue("Description", data.description);
      setValue("NoOfColumns", data.noOfColumns);
      setColumns(Array.from({ length: data.noOfColumns }, (_, i) => ({ label: "", column: "" })));
      setLabelColArr(data.labelColumns || []);
      setRows(data.data.map((row) => ({ id: uuidv4(), value: row.value })));

      if (["radio", "checkbox", "file"].includes(data.dataPointType)) {
        setischecked(false);
      } else {
        setischecked(data.enableSheetMode);
      }
    } catch (error) {
      console.log("error in fetching get data point", error);
    }
  };
//submit
const formreset = function () {
  setShow(false);
  setischecked(false);
  reset();
};
  const checkbox = () => {
    setischecked(!ischecked);
  };

  const onchange = (e) => {
    const doNotEnableSheetMode = ["radio", "checkbox", "file"];
    if (doNotEnableSheetMode.includes(e.target.value)) {
      setischecked(false);
    } else {
      setischecked(true);
    }
  };

  const createColumns = (e) => {
    setValue("NoOfColumns", e.target.value);
    let array = new Array(+e.target.value).fill({ label: "", column: "" });
    setColumns(array);
  };

  const labelColumnhandler = (e, ind) => {
    const updatedLabelColArr = [...labelColArr];
    updatedLabelColArr[ind] = e.target.value;
    setLabelColArr(updatedLabelColArr);
    setValue("LabelColumns", updatedLabelColArr);
  };

  const dataColumnhandler = (e, ind) => {
    const updatedDataColArr = [...labelColArr];
    updatedDataColArr[ind] = e.target.value;
    setLabelColArr(updatedDataColArr);
    setValue("LabelColumns", updatedDataColArr);
  };

  const onSubmit = (data) => {
    fetch_data(data);

    let obj = {};

    rows.forEach((row) => {
      obj[row.value] = {};
      labelColArr.forEach((label) => {
        obj[row.value][label] = "";
      });
    });

    const dataArr = {
      companyId: id,
      dataPointName: data.DataPointName,
      dataPointType: data.dataFieldType,
      description: data.Description,
      enableSheetMode: data.enableSheetMode,
      noOfColumns: +data.NoOfColumns,
      data: obj,
    };

    console.log(dataArr, "Array");

    dispatch(createDataPoints(dataArr));
    dispatch(getDataPoints());
    setCreateDataArr(true);
    submitted();
  };

  const addRow = () => {
    setRows([...rows, { id: uuidv4() }]);
  };

  const deleteRow = (id) => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleChange = (index, event) => {
    const newRows = rows.map((row, i) => {
      if (i === index) {
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
                                  <button
                                    type="button"
                                    className="btn btn-danger"
                                    onClick={() => deleteRow(row.id)}
                                  >
                                    <BsTrash />
                                  </button>
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      <div className="d-flex justify-content-end">
                        <button
                          type="button"
                          className="btn btn-success w-auto px-3"
                          onClick={addRow}
                        >
                          <BsPlus /> Add More
                        </button>
                      </div>
                      <div className="d-flex justify-content-center my-3">
                        <button
                          type="submit"
                          className="btn mx-2 py-2 create-btn-form"
                        >
                          Save
                        </button>
                        <button
                          type="button"
                          className="btn mx-2 py-2 create-btn-form"
                          onClick={() => console.log("Cancel button clicked")}
                        >
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
                className={` ${mode === "dark-mode" ? "text-white" : "text-dark"}`}
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
                    required
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
                      <option
                        className="options"
                        selected={index === 0}
                        hidden={index === 0}
                        value={option.value}
                        name={option.name}
                      >
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
              <div
                className={`flex-grow-1 d-flex flex-column ${
                  !ischecked
                    ? "not-allowed background-light-grap-not-allowed"
                    : ""
                }`}
              >
                <div className="mb-2">
                  <label
                    htmlFor="DataPointType"
                    className={`form-label form-text ${
                      !ischecked ? "not-allowed" : ""
                    }`}
                  >
                    No. of Columns
                  </label>
                  <select
                    id="DataPointType"
                    onChange={createColumns}
                    name={`columns`}
                    disabled={!ischecked}
                    className={`form-select select ${
                      !ischecked ? "not-allowed" : ""
                    }`}
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
                <label
                  htmlFor="DataPointType"
                  className={`form-label form-text ${
                    !ischecked ? "not-allowed" : ""
                  }`}
                >
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
                            className={`form-control form-column ${
                              !ischecked ? "not-allowed" : ""
                            }`}
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
            </section>
          </form>
        </FormProvider>
      </div>
    </>
  );
};

export default Form;
