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
const GridScaleChart = ({ width, className }) => {
  const DATA_COUNT = 6;
  const data = {
    labels: Utils.months({ count: DATA_COUNT }),
    datasets: [
      {
        label: "Dataset 1",
        data: [10, 30, 39, 20, 25, 34, -10],
        fill: false,
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      },
      {
        label: "Dataset 2",
        data: [18, 33, 22, 19, 11, -39, 30],
        fill: false,
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      },
    ],
  };

  const DISPLAY = true;
  const BORDER = true;
  const CHART_AREA = true;
  const TICKS = true;

  const options = {
    type: "line",
    responsive: true,
    plugins: {
      title: {
        display: false,
        text: "Grid Line Settings",
      },
    },
    scales: {
      x: {
        border: {
          display: BORDER,
        },
        grid: {
          display: DISPLAY,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        },
      },
      y: {
        border: {
          display: false,
        },
        grid: {
          color: function (context) {
            if (context.tick.value > 0) {
              return Utils.CHART_COLORS.green;
            } else if (context.tick.value < 0) {
              return Utils.CHART_COLORS.red;
            }

            return "#000000";
          },
        },
      },
    },
  };

  return (
    <>
      <div className={`px-2 pb-2 bg-white ${className}`}>
        <div className="headingOfData" style={{ margin: "25px" }}>
          <span className="header-before">Text Content here</span>
        </div>
        <div
          style={{ width: width || 400 }}
          className="d-flex flex-column align-items-center gap-3 "
        >
          <Line type="line" options={options} data={data} />
        </div>
      </div>
    </>
  );
};

export default GridScaleChart;
