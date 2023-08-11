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
function AdminHBarChart({
  width,
  className,
  height,
  showtitle,
  create,
  fullwidth,
  fullHeight,
  chartdark,
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
    Labels: ["January", "February", "March", "April", "May"],
    Data: [-21, -37, -35, 48, 31],
  });

  //** necesasry for add button */
  //
  const options = {
    indexAxis: "y",
    backgroundColor: "transparent",
    elements: {
      bar: {
        borderWidth: 1,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
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
        min: 0,
        max: 70,
      },

      y: {
        ticks: {
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          font: {
            size: 10,
          },
          beginAtZero: true,
        },
      },
    },
  };

  const data = {
    labels: chartdata.Labels,
    datasets: [
      {
        label: "Sales",
        data: chartdata.Data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        borderRadius: 1,
      },
    ],
  };

  //** forward and next logic */

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

        <div
          className="headingOfData "
          style={{
            marginTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <span className={`header-before layout-transition chart-text-div  `}>
            Horizontal Bar Chart
          </span>
        </div>

        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative `}
          style={{ height: (create && "70%") || "60%" }}
        >
          <Bar options={options} data={data} ref={chartref} />
        </div>
      </div>
    </>
  );
}
export default AdminHBarChart;
AdminHBarChart.defaultProps = {
  showtitle: true,
};
