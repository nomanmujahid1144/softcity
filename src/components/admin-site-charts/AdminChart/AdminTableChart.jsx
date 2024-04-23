import React, { useRef, useState, useContext, useEffect } from "react";
import Context from "../../../Context/DashboardContext";

import { useForm } from "react-hook-form";
import { BsCheckCircleFill } from "react-icons/bs";

import ChartTableAdmin from "./adminTable/ChartTableAdmin";
import ChartsOverlay from "../../AdminDashboard/overlay/ChartsOverlay";

const AdminTableChart = ({
  className,

  showtitle,
  create,
  fullwidth,
  fullHeight,
}) => {
  const {
    showComment,
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    filter,
    startDate,
    endDate,
    mode,
  } = useContext(Context);
  const [checkChart, setCheckChart] = useState(false);

  //**for going forward in time in graph */
  const chart = useRef();

  const [length, setlength] = useState({ start: 0, end: 7 });
  //**for showing the table */
  const [showBarModal, setShowBarModal] = useState(false);
  //**for adding data logic */
  const [chartdata, setchartdata] = useState([
    {
      title: "January",
      value: "62",
    },
    {
      title: "February",
      value: "54",
    },
    {
      title: "March",
      value: "62",
    },
    {
      title: "April",
      value: "54",
    },
    {
      title: "May",
      value: "62",
    },
    {
      title: "June",
      value: "54",
    },
    {
      title: "July",
      value: "62",
    },
    {
      title: "August",
      value: "54",
    },
    {
      title: "September",
      value: "62",
    },
    {
      title: "October",
      value: "54",
    },
    {
      title: "November",
      value: "62",
    },
    {
      title: "December",
      value: "54",
    },
  ]);

  let data = chartdata.slice(length.start, length.end);

  const handleCheck = () => {
    setCheckChart((curr) => !curr);
  };

  return (
    <>
      <div
        onClick={() => {
          handleCheck();
        }}
        className={`layout-transition  ${className}
             chart-main-div 
             `}
        style={{
          width: fullwidth,
          height: fullHeight,
          position: "relative",
        }}
      >
        {checkChart && (
          <button className="after-clicked z-2">
            <ChartsOverlay />
          </button>
        )}

        <div
          className="headingOfData "
          style={{
            marginTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <span className={`header-before chart-text-div  `}>Table Chart</span>
        </div>

        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative `}
          style={{ height: (create && "87%") || "60%" }}
        >
          <ChartTableAdmin data={data} adminTableChart={true} />
        </div>
      </div>
    </>
  );
};

export default AdminTableChart;
AdminTableChart.defaultProps = {
  showtitle: true,
};
