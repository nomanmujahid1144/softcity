import React from "react";
import { Line } from "react-chartjs-2";
import * as Utils from "./Utils";
import ChartButtons from "../chart-listing/ChartButtons";

import { faker } from "@faker-js/faker";
import {
  Chart as My,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController,
} from "chart.js";
My.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  Filler,
  LineController,
  BarController
);
const MultiAxisChart = ({ width, className }) => {
  const DATA_COUNT = 6;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 70 };
  let labels = Utils.months({ count: 6 });
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => faker.datatype.number({ min: -50, max: 70 })),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        yAxisID: "y",
      },
      {
        label: "Dataset 2",
        data: labels.map(() => faker.datatype.number({ min: -50, max: 50 })),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
        yAxisID: "y1",
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: "index",
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: false,
        text: "Chart.js Line Chart - Multi Axis",
      },
    },
    scales: {
      y: {
        type: "linear",
        display: true,
        position: "left",
      },
      y1: {
        type: "linear",
        display: true,
        position: "right",
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };
  return (
    <>
      <div
        className={`px-2 pb-2 bg-white ${className}`}
        style={{ width: width || 400 }}
      >
        <div className="headingOfData" style={{ margin: "25px" }}>
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3 ">
          <Line type="line" options={options} data={data} />
          <div className="">
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default MultiAxisChart;
