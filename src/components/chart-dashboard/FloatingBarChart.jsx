import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import * as Utils from "./Utils";
import ChartButtons from "../chart-listing/ChartButtons";
import ChartsOverlay from "../AdminDashboard/overlay/ChartsOverlay";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);
const FloatingBarChart = ({ width, className }) => {
  let labels = Utils.months({ count: 6 });

  const options = {
    type: "bar",

    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Floating Bar Chart",
        },
      },
    },
  };
  const data = {
    labels: labels,

    datasets: [
      {
        label: "Dataset 1",
        data: labels.map(() => {
          return [Utils.rand(-30, 50), Utils.rand(-50, 50)];
        }),
        backgroundColor: Utils.CHART_COLORS.red,
      },
      {
        label: "Dataset 2",
        data: labels.map(() => {
          return [Utils.rand(-10, 20), Utils.rand(-50, 50)];
        }),
        backgroundColor: Utils.CHART_COLORS.blue,
      },
    ],
  };
  return (
    <>
      <div className={`px-2 pb-2 ${className} bg-white align-self-stretch`}>
        <div className="headingOfData align-self-stretch">
          <span className="header-before">Text Content here</span>
        </div>
        <div style={{ width: width || 400 }} className="groupcharthover">
          <Bar options={options} data={data} />
          <ChartsOverlay />
        </div>
      </div>
    </>
  );
};

export default FloatingBarChart;
