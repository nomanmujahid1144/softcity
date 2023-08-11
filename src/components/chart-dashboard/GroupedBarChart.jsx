import React, { useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import "./container.css";
import Spinner from "../spinner/Spinner";
import Tick from "../spinner/Tick";
import ChartsOverlay from "../AdminDashboard/overlay/ChartsOverlay";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  plugins: {
    title: {
      display: false,
      text: "Chart.js Bar Chart - Stacked",
    },
  },
  responsive: true,
  interaction: {
    mode: "index",
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: -40, max: 40 })),
      backgroundColor: "rgb(255, 99, 132)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: -40, max: 40 })),
      backgroundColor: "rgb(75, 192, 192)",
      stack: "Stack 0",
    },
    {
      label: "Dataset 3",
      data: labels.map(() => faker.datatype.number({ min: -40, max: 40 })),
      backgroundColor: "rgb(53, 162, 235)",
      stack: "Stack 0",
    },
  ],
};

export default function GroupedBarChart({ width, className }) {
  return (
    <>
      <div
        className={`px-2  ${className}  bg-white `}
        style={{ width: width || 400, transition: "all 1s" }}
      >
        <div className="headingOfData">
          <span className="header-before">Text Content here</span>
        </div>

        <div style={{ width: width || 400 }} className="groupcharthover">
          <Bar options={options} data={data} />
          <ChartsOverlay />
        </div>
      </div>
    </>
  );
}
