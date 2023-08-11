import React, { useRef, useState, useContext, useEffect } from "react";

import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";
import Context from "../../../Context/DashboardContext";
import { BsCheckCircleFill } from "react-icons/bs";
import "./adminchart.css";
import ChartsOverlay from "../../AdminDashboard/overlay/ChartsOverlay";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//** registring custom logic */
function AdminDoughnutChart({
  className,

  showtitle,
  fullwidth,
  fullHeight,
  create,
  chartId = 7,
}) {
  const { showThreeColumn, showFourColumn, mode } = useContext(Context);
  const [checkChart, setCheckChart] = useState(false);

  //**for going forward in time in graph */
  const chart = useRef();
  const chartref = useRef();

  //**for adding data logic */
  const [chartdata, setchartdata] = useState({
    Labels: ["January", "February", "March", "April"],
    Data: [-21, -37, -35, 48],
  });

  //** necesasry for add button */
  //
  const data = {
    labels: chartdata.Labels,
    datasets: [
      {
        label: "Dataset 1",
        data: chartdata.Data,
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(255, 159,100, 0.6)",
          "rgba(255, 205, 100, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(100, 162, 235, 0.6)",
          "rgba(1, 102, 205, 0.6)",
          "rgba(100, 203, 207, 0.6)",
        ],
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
        maxWidth: 5,
        maxHeight: 40,
        labels: {
          font: { size: 8 },
          color: (mode === "light-mode" && "black") || "white",
          boxWidth: 20,
          boxHeight: 8,
          textAlign: "start",
        },
      },
      title: {
        display: false,
        text: "Chart.js Doughnut Chart",
      },
    },
  };

  //** forward and next logic */

  //

  const handleCheck = () => {
    setCheckChart((curr) => !curr);
  };

  return (
    <>
      <div
        onClick={() => {
          handleCheck();
        }}
        className={` layout-transition ${className} chart-main-div`}
        style={{
          width: fullwidth,
          height: fullHeight,
          position: "relative",
        }}
      >
        {checkChart && (
          <button className="after-clicked">
            <ChartsOverlay />
          </button>
        )}

        <div
          className="headingOfData "
          style={{
            marginTop: "20px",
            paddingBottom: "10px",
          }}
        >
          <span className={`header-beforeAdmin chart-text-div `}>
            Doughnut Chart
          </span>
        </div>

        <div
          ref={chart}
          className={`d-flex flex-column align-items-center position-relative`}
          style={{ height: (create && "70%") || "60%" }}
        >
          <Doughnut options={options} data={data} ref={chartref} />
        </div>
      </div>
    </>
  );
}
export default AdminDoughnutChart;
AdminDoughnutChart.defaultProps = {
  showtitle: true,
};
