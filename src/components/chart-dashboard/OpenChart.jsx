import React from "react";
import {
  Chart,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
const ChartWithImages = () => {
  const chartRef = React.useRef(null);

  const myChartRef = chartRef.current;

  const data = {
    labels: ["Image 1", "Image 2", "Image 3"],
    datasets: [
      {
        label: "Images in Chart",
        data: [1, 2, 3],
        backgroundColor: [
          "https://example.com/image1.jpg",
          "https://example.com/image2.jpg",
          "https://example.com/image3.jpg",
        ],
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
        display: false,
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    },
  };

  return (
    <div>
      <Bar ref={chartRef} options={options} data={data} />
    </div>
  );
};

export default ChartWithImages;
