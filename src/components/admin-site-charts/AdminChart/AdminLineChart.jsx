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
function AdminLineChart({
  className,
  fullwidth,
  fullHeight,
  create,
  chartId = 8,
}) {
  const { mode } = useContext(Context);
  const [checkChart, setCheckChart] = useState(false);

  //**for going forward in time in graph */
  const chart = useRef();
  const chartref = useRef();

  const [length, setlength] = useState({ start: 0, end: 7 });
  //**for showing the table */
  //**for adding data logic */
  const [chartdata, setchartdata] = useState({
    Labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Data: [-21, -37, -35, 48, 31, -22, 32, -33, 34, 55, 32, 67],
  });

  //** necesasry for add button */
  //
  let labels = chartdata.Labels.slice(length.start, length.end);

  const dataArray = chartdata.Labels.map(() =>
    faker.datatype.number({ min: -50, max: 50 })
  ).slice(length.start, length.end);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "my First DataSet",
        data: dataArray,
        backgroundColor: "#47b3a6",
        borderColor: "#24c8bf",
        pointBorderColor: "#47b3a6",
        tension: 0.3,
        fontColor: "pink",
      },
    ],
  };
  const options = {
    maintainAspectRatio: false,
    plugins: {
      // Legend: true,
      legend: {
        labels: {
          color: (mode === "light-mode" && "black") || "white",
          font: {
            size: 10,
          },
        },
      },
    },
    scales: {
      y: {
        min: 0,
        max: 50,
      },

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
          <span className={`header-before layout-transition chart-text-div  `}>
            Line Chart
          </span>
        </div>

        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative `}
          style={{ height: (create && "70%") || "60%" }}
        >
          <Line options={options} data={data} ref={chartref} />
        </div>
      </div>
    </>
  );
}
export default AdminLineChart;
AdminLineChart.defaultProps = {
  showtitle: true,
};
