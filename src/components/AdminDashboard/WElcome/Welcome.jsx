import React, { useContext, useRef, useState } from "react";
import Context from "../../../Context/DashboardContext";
import cloud from '../../../assets/images/cloud.png'
import { HeartFill } from "react-bootstrap-icons";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

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
icon: cloud,
counting:150,
text:"Total Charts Created"
  },
    {
      id:2,
icon: cloud,
counting:25,
text:"Total Dashboards Created"
  },
    {
      id:3,
icon: cloud,
counting:45,
text:"Total User Groups Created"
  },
    {
      id:4,
icon: cloud,
counting:30,
text:"Total Approving Officers"
  },
    {
      id:5,
icon: cloud,
counting:72,
text:"Total Users Created"
  },
    {
      id:6,
icon: cloud,
counting:196,
text:"Total Datapoints Created"
  },
    {
      id:7,
icon: cloud,
counting:124,
text:"Total Collection Templates"
  },
    {
      id:8,
icon: cloud,
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
  return (
    <div className="" style={{}}>
      {/* <h4
        className={`header-beforeAdmin ${mode === "dark-mode" && "text-white"}`}
      >
        Welcome Home ad;fka;sdkfn;j
      </h4> */}
      <div  style={{display:"flex",columnGap:120, justifyContent:"center", flexWrap:"wrap", margin:"0px 40px", rowGap:20 }}>
{
       cardData?.map((i)=>{
        return(
<div className="px-10 py-4 bg-dashboard rounded items-center" style={{display:"flex", flexDirection:"column", justifyContent:"center", alignItems:"center", width:120, height:120}}>
          <img style={{backgroundColor:"white"}} color="white" src={cloud} width={25} height={25} />
          <span style={{color:"white", fontWeight:"700", fontSize:16, marginTop:10}}>{i.counting}</span>
          <span style={{textAlign:"center", color:"white", fontWeight:"500", fontSize:13}}>{i.text}</span>
        </div>
        )
       }) 
        }
      </div>
      <div style={{justifyContent:"flex-end", display:"flex", gap:20, marginTop:20, margin:"20px 130px"}}>
        <div className="bg-dashboard rounded" style={{padding:"5px 10px", width:100, height:40, alignItems:"center", justifyContent:"center", display:"flex"}}>
          <span style={{fontSize:11, color:"white", textAlign:"center"}}>Create User Group</span>
        </div>
        <div className="bg-dashboard rounded" style={{padding:"5px 10px", width:100, height:40, alignItems:"center", justifyContent:"center", display:"flex"}}>
          <span style={{fontSize:11, color:"white", textAlign:"center"}}>Create Dashboard</span>
        </div>
        <div className="bg-dashboard rounded" style={{padding:"5px 10px", width:120, height:40, alignItems:"center", justifyContent:"center", display:"flex"}}>
          <span style={{fontSize:11, color:"white", textAlign:"center"}}>Create Collection Template</span>
        </div>
      </div>
      <div style={{padding:"0px 80px"}}>
      <div
              ref={chart}
              className={`d-flex flex-column align-items-center position-relative ${
                chartdark && mode === "dark-mode" && "bg-dark"
              }`}
              // onMouseDown={handleChartClick}
              style={{
                width: "25%",
                height:
                  "100%",
              }}
            >
              <Line ref={chartref} options={options} data={data} />
            </div>
      </div>
    </div>
  );
};

export default Welcome;
