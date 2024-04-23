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

import { Bar, Line } from "react-chartjs-2";
import Context from "../../../Context/DashboardContext";
import { BsCheckCircleFill } from "react-icons/bs";
import "./adminchart.css";
import ChartsOverlay from "../../AdminDashboard/overlay/ChartsOverlay";
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
function AdminSimpleBarChart({
  className,

  showtitle,
  create,
  fullwidth,
  fullHeight,
  chartdark,
}) {
  const { filter, startDate, endDate, mode, Labels, Data } = useContext(Context);
  const [checkChart, setCheckChart] = useState(false);

  //**for going forward in time in graph */
  const chart = useRef();
  const chartref = useRef();
  const iconRef = useRef();

  const [length, setlength] = useState({ start: 0, end: 7 });
  //**for showing the table */
  //**for adding data logic */
  const [chartdata, setchartdata] = useState({
    Labels: ["January", "February", "March", "April", "May", "June", "July"],
    Data: [21, 37, 35, 48, 31, 22, 32],
  });

  //** necesasry for add button */
  //

  const data = {
   labels: Labels.length > 0 ? Labels :chartdata.Labels,
    datasets: [
      {
        label: "Dataset 1",
        data: Data.length ? Data: chartdata.Data,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 10,
          },
        },
      },

      title: {
        display: false,
      },
      options: {
        aspectRatio: 2 | 1,
      },
    },

    scales: {
      y: {
        ticks: {
          font: {
            // size: 18,
            size: 10,
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          beginAtZero: true,
          font: {
            size: 10,
          },
        },
      },
    },
  };

  const handleCheck = () => {
    setCheckChart((curr) => !curr);
  };

  return (
    <>
      <div
        onClick={() => {
          handleCheck();
        }}
        className={` layout-transition ${className}
             chart-main-div 
             `}
        style={{
          width: fullwidth,
          height: fullHeight,
          position: "relative",
        }}
      >
        {checkChart && (
          <button className="after-clicked">
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
          <span
            className={`header-beforeAdmin layout-transition chart-text-div  `}
          >
            Simple Bar Chart
          </span>
        </div>

        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative`}
          style={{ height: (create && "70%") || "60%" }}
        >
          <Bar options={options} data={data} ref={chartref} />
        </div>
      </div>
    </>
  );
}
export default AdminSimpleBarChart;
