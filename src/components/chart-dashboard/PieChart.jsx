import React, { useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import ChartButtons from "../chart-listing/ChartButtons";
import BarChartModal from "./../modal/BarChartModal";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Red", "Blue", "yellow"],
  datasets: [
    {
      label: "Profit",
      data: [7, 1, 2],
      backgroundColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
      hoverOffset: 16,
    },
  ],
};

const PieChart = ({ width, className }) => {
  const [showBarModal, setShowBarModal] = useState(false);
  return (
    <>
      <div
        className={`bg-white ${className}`}
        style={{ width: width || 400, position: "relative", paddingLeft: 0 }}
      >
        {showBarModal && (
          <div>
            <BarChartModal />
          </div>
        )}
        <div
          className="headingOfData"
          style={{ margin: "23px", paddingTop: "10px" }}
        >
          <span className="header-before mx-7">Text Content here</span>
        </div>
        <div style={{ height: width / 2 }}>
          <Pie data={data} />
          <hr />
          <ChartButtons setShowBarModal={setShowBarModal} />
        </div>
      </div>
    </>
  );
};

export default PieChart;
