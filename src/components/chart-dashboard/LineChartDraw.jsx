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
const LineChartDraw = ({ width, className }) => {
  const inputs = {
    min: -50,
    max: 70,
    count: 6,
    decimals: 2,
    continuity: 1,
  };

  const generateLabels = () => {
    return Utils.months({ count: inputs.count });
  };

  Utils.srand(3);
  const generateData = () => Utils.numbers(inputs);

  const data = {
    labels: generateLabels(),
    datasets: [
      {
        label: "Dataset 1",
        data: generateData(),
        borderColor: Utils.CHART_COLORS.red,
        backgroundColor: Utils.CHART_COLORS.red,
        fill: true,
      },
      {
        label: "Dataset 2",
        data: generateData(),
        borderColor: Utils.CHART_COLORS.blue,
        backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue),
        fill: true,
      },
    ],
  };
  const options = {
    type: "line",
    data: data,
    options: {
      plugins: {
        maxWidth: 5,
        maxHeight: 30,
        legend: {
          labels: {
            font: { size: 8 },
            boxWidth: 20,
            boxHeight: 8,
            textAlign: "start",
          },
        },
        filler: {
          propagate: false,
        },
        title: {
          display: false,
          text: (ctx) =>
            "drawTime: " + ctx.chart.options.plugins.filler.drawTime,
        },
      },
      pointBackgroundColor: "#fff",
      radius: 10,
      interaction: {
        intersect: false,
      },
    },
  };

  return (
    <>
      <div
        className={` pb-2 bg-white ${className}`}
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

export default LineChartDraw;
