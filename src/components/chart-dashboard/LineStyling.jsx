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

function LineStyling({ width, className }) {
  const DATA_COUNT = 8;
  const NUMBER_CFG = { count: DATA_COUNT, min: -50, max: 70 };
  let labels = Utils.months({ count: 6 });
  const data = {
    labels: labels,
    datasets: [
      {
        type: "bar",
        label: "Dataset 1",
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
        borderColor: Utils.CHART_COLORS.red,
        data: Utils.numbers(NUMBER_CFG),
      },
      {
        type: "bar",
        label: "Dataset 2",
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
        borderColor: Utils.CHART_COLORS.blue,
        data: Utils.numbers(NUMBER_CFG),
      },
      {
        type: "line",
        label: "Dataset 3",
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
        borderColor: Utils.CHART_COLORS.green,
        fill: false,
        data: Utils.numbers(NUMBER_CFG),
        borderWidth: 1.3,
      },
    ],
  };

  const options = {
    type: "line",
    options: {
      plugins: {
        title: {
          text: "Chart.js Combo Time Scale",
          display: true,
        },
      },
      scales: {
        x: {
          type: "time",
          display: true,
          offset: true,
          time: {
            unit: "day",
          },
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
          <Chart type="line" options={options} data={data} />
          <div className="">
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
}

export default LineStyling;
