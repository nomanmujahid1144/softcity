import React, { useState } from "react";
import Context from "./DashboardContext";
import { createDataPoints } from "../redux/slices/createDataPointsSlice";
import { useDispatch } from "react-redux";
import { createDataCollections } from "../redux/slices/DataCollections/createDataCollectionsSlice";

const DashboardState = (props) => {
  //Hassaan context working
  const [cycle, setcycle] = useState();
  const [mode, setmode] = useState("light-mode");
  const [point, setpoint] = useState([]);
  const [dataForm, setdataForm] = useState([]);
  //**setting true by sidebar comment */
  const [showComment, setshowComment] = useState(false);
  //**for viewing all the comments */
  const [classselect, setclassselect] = useState(false);
  const [showall, setshowall] = useState(false);
  const [startDate, setStartDate] = useState(new Date("2021/02/10"));
  const [endDate, setEndDate] = useState(new Date("2021/03/10"));
  const [filter, setfilter] = useState(false);
  const [showTwoColumn, setShowTwoColumn] = useState(false);
  const [showThreeColumn, setShowThreeColumn] = useState(false);
  const [showFourColumn, setShowFourColumn] = useState(false);
  const [admin, setadmin] = useState(false);
  const [StepperStep, setStepperStep] = useState(1);
  const [defaultclass, setdefaultclass] = useState("data__point-select");
  const [createcollectiontemplate, setcreatecollectiontemplate] = useState([]);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [items, setItems] = useState([]);
  // favovrite
  const [favArray, setFavArray] = useState([]);
  const [favMenuBtn, setFavMenuBtn] = useState(false);
  const [datapointtable, setdatapointtable] = useState([]);
  const [assignedtemplatecollection, setassignedtemplatecollection] = useState(
    []
  ); 
  const [createDataArr, setCreateDataArr] = useState(false);
  const [selectedDataPoints, setSelectedDataPoints] = useState([]);
  const [selectedDataPointsObj, setSelectedDataPointsObj] = useState([]);
  const [assignedto, setassignedto] = useState([
    "Customer Service team",
    "Business Development",
    "Analytics team",
  ]);

  const [customLabel, setCustomLabel] = useState("Custom Label");

  const dispatch = useDispatch();

  const fetch_data = function (data) {
    console.log("fetch_data", data);
    setdataForm([...dataForm, { ...data, selected: false }]);
    setdatapointtable([
      ...datapointtable,
      {
        collectionName: data.DataPointName,
        Description: "Click to view",
        TotalDataPoints: data.dataFieldType,
        CreateTimestamp: new Date().toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "2-digit",
        }),
        LastUpdated: "15/03/2023",
        CreatedBy: "Admin",
        DataSubmissions: 340,
      },
    ]);
    console.log("dataform", dataForm);
    // dispatch(createDataPoints(dataForm))
  };
  const setting = function (index) {
    //gathering all clicked data

    setpoint([...point, { ...dataForm[index], index }]);
  };
  const assignCollectionTemplate = function (data) {
    setcreatecollectiontemplate([
      ...createcollectiontemplate,
      {
        ...data,
        collectionName: data.TemplateName,
        // point,
        selectedDataPoints,
        Description: "Click to view",
        TotalDataPoints: point.length,
        CreateTimestamp: new Date().toLocaleDateString("en-GB"),
        LastUpdated: "15/03/2023",
        CreatedBy: "Admin",
        DataSubmissions: 340,
        selected: false,
      },
    ]);

    const formData = {
      collectionTemplateName: data.TemplateName,
      description: data.TemplateDescription,
      companyId: data.companyId,
      selectedDataPoints: selectedDataPoints,
    };
    dispatch(createDataCollections(formData));
    setSelectedDataPoints([])
    // setpoint([])
  };
  const assign = function () {
    let selectedcheckbox = createcollectiontemplate.filter(
      (res) => (res.selected = true)
    );
    setassignedtemplatecollection([
      ...assignedtemplatecollection,
      { ...selectedcheckbox, cycle, assignedto },
    ]);
  };
  //for dashboard deployment
  const [Labels, setLabels] = useState([]);
  const [Data, setData] = useState([]);
  const [selectLabelData, setselectLabelData] = useState([]);
  const addfield = function () {
    const newfield = ["Labeled Data Column", "Labeled Data Column"];
    setselectLabelData([...selectLabelData, ...selectLabelData]);
  };
  ///body
  return (
    <>
      <Context.Provider
        value={{
          dataForm,
          setdataForm,
          fetch_data,
          setting,
          setmode,
          point,
          mode,
          showComment,
          setshowComment,
          startDate,
          setStartDate,
          endDate,
          setEndDate,
          showThreeColumn,
          setShowThreeColumn,
          showFourColumn,
          setShowFourColumn,
          showTwoColumn,
          setShowTwoColumn,
          showall,
          setshowall,
          filter,
          setfilter,
          admin,
          setadmin,
          favArray,
          setFavArray,
          favMenuBtn,
          setFavMenuBtn,
          StepperStep,
          setStepperStep,
          selectLabelData,
          setselectLabelData,
          addfield,
          classselect,
          setclassselect,
          defaultclass,
          setdefaultclass,
          createcollectiontemplate,
          setcreatecollectiontemplate,
          assignCollectionTemplate,
          datapointtable,
          setdatapointtable,
          assignedtemplatecollection,
          setassignedtemplatecollection,
          assignedto,
          setassignedto,
          assign,
          cycle,
          setcycle,
          customLabel,
          setCustomLabel,
          createDataArr,
          setCreateDataArr,
          selectedDataPoints,
          setSelectedDataPoints,
          selectedDataPointsObj,
          setSelectedDataPointsObj,
          setSelectedUsers,
          selectedUsers,
          setItems,
          items,
          Labels,
          setLabels,
          Data,
          setData
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default DashboardState;