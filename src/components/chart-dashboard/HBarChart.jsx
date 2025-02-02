import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import ChartButtons from "../chart-listing/ChartButtons";
import BarChartModal from "./../modal/BarChartModal";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function HBarChart({ width, className }) {
  const [showBarModal, setShowBarModal] = useState(false);
  const options = {
    indexAxis: "y",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
      title: {
        display: true,
        text: "Chart.js Horizontal Bar Chart",
      },
    },
  };
  const labels = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "Dataset 2",
        data: labels.map(() =>
          faker.datatype.number({ min: -1000, max: 1000 })
        ),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <>
      <div
        className={` bg-white ${className}`}
        style={{ width: 600, position: "relative", paddingLeft: 0 }}
      >
        {showBarModal && (
          <div>
            <BarChartModal />
          </div>
        )}
        <div
          className="headingOfData"
          style={{ margin: "25px", paddingTop: "10px" }}
        >
          <span className="header-before mx-7">Text Content here</span>
        </div>
        <div>
          <Bar options={options} data={data} />
          <hr />
          <ChartButtons setShowBarModal={setShowBarModal} />
        </div>
      </div>
    </>
  );
}

export default HBarChart;
