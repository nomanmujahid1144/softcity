import React, { useRef, useState, useContext, useEffect } from "react";

import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import Context from "../../../Context/DashboardContext";
import { BsCheckCircleFill } from "react-icons/bs";
import "./adminchart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//** registring custom logic */
function AdminBarLineChart({
  className,

  showtitle,

  fullwidth,
  fullHeight,
  chartdark,
  create,
  chartId = 8,
}) {
  const { filter, startDate, endDate, mode, Labels, Data } = useContext(Context);
  const [checkChart, setCheckChart] = useState(false);

  //**for going forward in time in graph */
  const chart = useRef();
  const chartref = useRef();

  const [length, setlength] = useState({ start: 0, end: 7 });
  //**for showing the table */
  //**for adding data logic */
  const [chartdata, setchartdata] = useState({
    Labels: ["January", "February", "March"],
    Data: [-21, -37, -35, 48],
  });

  //** necesasry for add button
  //
  const options = {
    type: "bar",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        mode: "index",
      },
      legend: {
        position: "top",
        labels: {
          color: (mode === "light-mode" && "black") || "white",
          font: {
            size: 10,
          },
        },
      },

      title: {
        display: false,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
    scales: {
      y: {
        ticks: {
          color: (mode === "light-mode" && "black") || "white", // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: (mode === "light-mode" && "black") || "white", // not 'fontColor:' anymore
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
    labels: Labels.length > 0 ? Labels :chartdata.Labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Data.length ? Data: chartdata.Data,
        borderColor: "rgb(75, 150, 110)",
        backgroundColor: "rgba(201, 203, 207, 0.4)",
        order: 1,
      },
      {
        type: "bar",
        label: "Dataset 2",
        data: chartdata.Data,
        borderColor: "rgb(255, 205, 86)",
        backgroundColor: "rgba(255, 200, 86, 0.4)",
        order: 0,
      },
    ],
  };
  //** forward and next logic */
  let index = chartdata.Labels.length;
  //

  const handleCheck = () => {
    setCheckChart((curr) => !curr);
  };

  return (
    <>
      <div
        onClick={() => {
          handleCheck();
        }}
        className={` layout-transition  ${className}
             chart-main-div 
             `}
        style={{
          width: fullwidth,
          height: fullHeight,
          position: "relative",
        }}
      >
        <>
          {checkChart && (
            <div className="after-clicked">
              <BsCheckCircleFill
                color="#fff"
                style={{ width: "20%", height: "20%", zIndex: 3 }}
              />
            </div>
          )}
        </>
        {showtitle && (
          <div
            className="headingOfData "
            style={{
              marginTop: "20px",

              paddingBottom: "30px",
            }}
          >
            <span
              style={{
                color: (mode === "light-mode" && "black") || "white",
              }}
              className={`header-before layout-transition chart-text-div  `}
            >
              Bar Line Chart
            </span>
          </div>
        )}
        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative ${
            chartdark && mode === "dark-mode" && "bg-dark"
          }`}
          style={{
            width: "100%",
            height: (fullHeight && "100%") || "60%",
          }}
        >
          <Line ref={chartref} options={options} data={data} />
        </div>
      </div>
    </>
  );
}
export default AdminBarLineChart;
AdminBarLineChart.defaultProps = {
  showtitle: true,
};
