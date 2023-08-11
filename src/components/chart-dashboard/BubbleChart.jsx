import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { faker } from "@faker-js/faker";
import { Bubble } from "react-chartjs-2";
import * as Utils from "./Utils";
import ChartButtons from "../chart-listing/ChartButtons";
ChartJS.register(LinearScale, PointElement, Tooltip, Legend);

export default function App({ className, width }) {
  const options = {
    type: "bubble",
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bubble Chart",
        },
      },
    },
  };
  const data = {
    datasets: [
      {
        label: "Red dataset",
        data: Array.from({ length: 10 }, () => ({
          x: faker.datatype.number({ min: -20, max: 30 }),
          y: faker.datatype.number({ min: -40, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 10 }),
        })),
        backgroundColor: "rgba(255, 99, 13, 0.5)",
      },
      {
        label: "Blue dataset",
        data: Array.from({ length: 10 }, () => ({
          x: faker.datatype.number({ min: -10, max: 50 }),
          y: faker.datatype.number({ min: -30, max: 50 }),
          r: faker.datatype.number({ min: 5, max: 10 }),
        })),
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <>
      <div
        className={`px-2 pb-2 ${className} border bg-white`}
        style={{ width: width }}
      >
        <div
          className="headingOfData"
          style={{ padding: "20px 0 20px 0", margin: "0 25px" }}
        >
          <span className="header-before">Text Content here</span>
        </div>
        <div className="d-flex flex-column align-items-center gap-3">
          <Bubble options={options} data={data} />
          <div>
            <ChartButtons />
          </div>
        </div>
      </div>
    </>
  );
}
