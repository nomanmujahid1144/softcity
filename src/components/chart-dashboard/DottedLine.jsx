import React from "react";
import { Chart } from "react-chartjs-2";
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

const DottedLine = ({ width, className }) => {
  const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };
  let labels = Utils.months({ count: 6 });
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Unfilled",
        fill: false,
        backgroundColor: Utils.CHART_COLORS.blue,
        borderColor: Utils.CHART_COLORS.blue,
        data: Utils.numbers(NUMBER_CFG),
        borderWidth: 1.5,
      },
      {
        label: "Dashed",
        fill: false,
        backgroundColor: Utils.CHART_COLORS.green,
        borderColor: Utils.CHART_COLORS.green,
        borderDash: [5, 5],
        data: Utils.numbers(NUMBER_CFG),
      },
      {
        label: "Filled",
        backgroundColor: Utils.CHART_COLORS.red,
        borderColor: Utils.CHART_COLORS.red,
        data: Utils.numbers(NUMBER_CFG),
        fill: true,
      },
    ],
  };
  const options = {
    type: "line",
    data: Utils.numbers(NUMBER_CFG),
    options: {
      responsive: false,
      plugins: {
        title: {
          display: true,
          text: "Chart.js Line Chart",
        },
      },
      interaction: {
        mode: "index",
        intersect: false,
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
          <Chart type="line" options={options} data={data} />
          <div className="">
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
};

export default DottedLine;
