import React, { useContext, useRef, useState } from "react";
import Context from "../../../Context/DashboardContext";
import groupUsers from '../../../assets/images/groupusers.png'
import user from '../../../assets/images/userIcon.png'
import db from '../../../assets/images/db.png'
import chartIcon from '../../../assets/images/chart.png'
import dashboard from '../../../assets/images/dashboard.png'
import { HeartFill } from "react-bootstrap-icons";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Pie, Bar } from 'react-chartjs-2';
import { Chart } from "react-google-charts";

const Welcome = ({
  width,
  className,
  height,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  chartdark,
  chartId = 5,
}) => {
  
  const { mode,  showComment,
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    filter,
    startDate,
    endDate,
    setmode, } = useContext(Context);
  const [length, setlength] = useState({ start: 0, end: 7 });

    const [chartdata, setchartdata] = useState({
      Labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      Data: [-21, -37, -35, 48, 31, -22, 32, -33, 34, 55, 32, 67],
    });
    let labels = chartdata.Labels.slice(length.start, length.end);
    const dataArray = chartdata.Labels.map(() =>
      faker.datatype.number({ min: -50, max: 50 })
    ).slice(length.start, length.end);
    const dataArray2 = chartdata.Labels.map(() =>
      faker.datatype.number({ min: -50, max: 50 })
    ).slice(length.start, length.end);
    const dataArray3 = chartdata.Labels.map(() =>
      faker.datatype.number({ min: -50, max: 50 })
    ).slice(length.start, length.end);
    const chart = useRef();
  const chartref = useRef();
  const cardData = [
    {
      id:1,
icon: chartIcon,
counting:150,
text:"Total Charts Created"
  },
    {
      id:2,
icon: dashboard,
counting:25,
text:"Total Dashboards Created"
  },
    {
      id:3,
icon: groupUsers,
counting:45,
text:"Total User Groups Created"
  },
    {
      id:4,
icon: user,
counting:30,
text:"Total Approving Officers"
  },
    {
      id:5,
icon: user,
counting:72,
text:"Total Users Created"
  },
    {
      id:6,
icon: db,
counting:196,
text:"Total Datapoints Created"
  },
    {
      id:7,
icon: db,
counting:124,
text:"Total Collection Templates"
  },
    {
      id:8,
icon: db,
counting:375,
text:"Total Data Submitted"
  },
]
const data = {
  labels: labels,
  datasets: [
    {
      label: "First",
      data: dataArray,
      borderColor: "rgb(200,120,10,0.4)",
      backgroundColor: "rgb(200,100,10,0.4)",
      fill: true,
    },
    {
      label: "Second ",
      data: dataArray2,
      borderColor: "rgb(10,120,200,0.4)",
      backgroundColor: "rgb(10,100,200,0.4)",
      fill: true,
    },
    {
      label: "Third",
      data: dataArray3,
      borderColor: "rgb(10,20,100,0.4)",
      backgroundColor: "rgb(10,20,100,0.4)",
      fill: true,
    },
  ],
};
// const chartData = [
//   ["Task", "Hours per Day"],
//   ["Work", 11],
//   ["Eat", 2],
//   ["Commute", 2],
//   ["Watch TV", 2],
//   ["Sleep", 7],
// ];
const chartData= {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [{
    data: [210, 130, 120, 160, 120],
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
  }]
}
const options = {
  type: "line",
  responsive: true,

  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "top",
      maxWidth: 5,
      maxHeight: 30,
      labels: {
        font: { size: 8 },
        boxWidth: 20,
        boxHeight: 8,
        textAlign: "start",
      },
    },
    legend: {
      position: "top",
      labels: {
        color: (mode === "light-mode" && "black") || "white",
        font: {
          size:
            (showThreeColumn || showFourColumn) && window.innerWidth == 1024
              ? 6
              : 10,
        },
      },
    },
    title: {
      display: false,
      text: (ctx) =>
        "Chart.js Line Chart - stacked=" + ctx.chart.options.scales.y.stacked,
    },
    tooltip: {
      mode: "index",
    },
  },
  interaction: {
    mode: "nearest",
    axis: "x",
    intersect: false,
  },
  scales: {
    y: {
      ticks: {
        color: (mode === "light-mode" && "black") || "white", // not 'fontColor:' anymore
        font: {
          size:
            (showThreeColumn || showFourColumn) && window.innerWidth == 1024
              ? 6
              : 10,
        },
        beginAtZero: true,
      },
    },
    x: {
      ticks: {
        color: (mode === "light-mode" && "black") || "white", // not 'fontColor:' anymore
        font: {
          size:
            (showThreeColumn || showFourColumn) && window.innerWidth == 1024
              ? 6
              : 10,
        },
        beginAtZero: true,
      },
    },
  },
};
const pieChart = {
  labels: ["Red", "Green", "Yellow", "Grey", "Dark Grey"],
  datasets: [{
    data: [210, 130, 120, 160, 120],
    backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C", "#949FB1", "#4D5360"],
    hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870", "#A8B3C5", "#616774"]
  }]
};

const pieChartOptions = {
  responsive: true,
  legend: {
    position: 'left',
    labels: {
      padding: 20,
      boxWidth: 10
    }
  },
  plugins: {
    datalabels: {
      formatter: (value, ctx) => {
        let sum = 0;
        let dataArr = ctx.chart.data.datasets[0].data;
        dataArr.map(data => {
          sum += data;
        });
        let percentage = (value * 100 / sum).toFixed(2) + "%";
        return percentage;
      },
      color: 'white',
      labels: {
        title: {
          font: {
            size: '16'
          }
        }
      }
    }
  },
  maintainAspectRatio: false,
  aspectRatio: 1,
};
const barColors = [
  "#3AB3FA",
  "#77E4F5",
  "#10896C",

  // Add more colors as needed
];

const barChartData = {
  labels: labels,
  datasets: [
    {
      label: "Bar Chart",
      data: dataArray,
      backgroundColor: barColors, // Use the array of colors
      borderColor: "rgba(75, 192, 192, 0.2)",
      borderWidth: 1,
      
    },
  ],
};
const barChartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      ticks: {
        color: (mode === "light-mode" && "black") || "white",
        font: {
          size:
            (showThreeColumn || showFourColumn) && window.innerWidth == 1024
              ? 6
              : 10,
        },
        beginAtZero: true,
      },
    },
    y: {
      ticks: {
        color: (mode === "light-mode" && "black") || "white",
        font: {
          size:
            (showThreeColumn || showFourColumn) && window.innerWidth == 1024
              ? 6
              : 10,
        },
        beginAtZero: true,
      },
    },
  },
  layout: {
    padding: {
      left: 10, // Adjust the left padding as needed
      right: 10, // Adjust the right padding as needed
    },
  },
  scales: {
    x: {
      barThickness: 20, // Adjust this value to decrease the bar width (in pixels)
    },
  },
};
return (
  <div className="">
    {/* <h4
      className={`header-beforeAdmin ${mode === "dark-mode" && "text-white"}`}
    >
      Welcome Home
    </h4> */}
    <div  style={{display:"flex",columnGap:120, justifyContent:"center", flexWrap:"wrap", margin:"0px 40px", rowGap:20 }}>
 {
        cardData?.map((i)=>{
         return(
 <div className="px-10 py-4 bg-dashboard rounded items-center" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:135, height:130}}>
           <img style={{}} color="white" src={i.icon} width={30} height={30} />
           <span style={{color:"white", fontWeight:"700", fontSize:16, marginTop:10}}>{i.counting}</span>
           <span style={{textAlign:"center", color:"white", fontWeight:"500", fontSize:13}}>{i.text}</span>
         </div>
         )
        }) 
         }
       </div>
    <div style={{margin:"0px 120px"}} className="d-flex justify-content-end  mt-4 gap-3">
      <div className="bg-dashboard rounded d-flex align-items-center justify-content-center py-2 px-3" style={{ width: "100px", height: "40px" }}>
        <span className="text-white" style={{ fontSize: "11px", textAlign: "center" }}>Create User Group</span>
      </div>
      <div className="bg-dashboard rounded d-flex align-items-center justify-content-center px-3 cursor-pointer" style={{ width: "100px", height: "40px" }}>
        <span className="text-white" style={{ fontSize: "11px", textAlign: "center" }}>Create Dashboard</span>
      </div>
      <div className="bg-dashboard rounded d-flex align-items-center justify-content-center px-3 cursor-pointer" style={{ width: "135px", height: "40px" }}>
        <span className="text-white" style={{ fontSize: "11px", textAlign: "center" }}>Create Collection Template</span>
      </div>
    </div>
    <div className="mx-4 mt-4" style={{ padding: "0px 80px" }}>
      <div
        ref={chart}
        className={`d-flex align-items-center position-relative ${
          chartdark && mode === "dark-mode" && "bg-dark"
        }`}
        style={{
          width: "100%",
          height: "20%",
          flexDirection: "row",
          display: "flex",
        }}
      >
        <div className="flex-1" style={{ width: "50%", height: "350px" }}>
          <Pie
            options={pieChartOptions}
            data={pieChart}
          />
        </div>
        <div className="flex-1" style={{ width: "50%", height: "350px" }}>
          <Line ref={chartref} options={options} data={data} />
        </div>
      </div>
      <div className="flex-1" style={{ width: "100%", height: "350px", marginTop: "20px" }}>
        <Bar
          options={barChartOptions}
          data={barChartData}
        />
      </div>
    </div>
  </div>
);


};

export default Welcome;
