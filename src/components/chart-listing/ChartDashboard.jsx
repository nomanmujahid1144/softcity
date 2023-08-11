import React from "react";
import {  Form } from "react-bootstrap";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip, 
  LineChart,
  Line,
  Legend,
} from "recharts";
import BarChartButtons from "../chartButtons/BarChartButtons";
import BarChartHorizontalCon from "./BarChartHorizontalCon";
import ChartButtons from "../chartButtons/ChartButtons";
import PieChartContainer from "./PieChartContainer";

export default function ChartDashboard () { 
  const monthsData = [
    { month: "Jan", monthValue: "71",fill:'rgba(255, 99, 132, 0.2)',stroke: 'rgba(255, 99, 132)', strokeWidth: 1 },
    { month: "Feb", monthValue: "60",fill:'rgba(255, 159, 64, 0.2)',stroke: 'rgb(255, 159, 64)', strokeWidth: 1},
    { month: "Mar", monthValue: "85",fill: 'rgba(255, 205, 86, 0.2)' ,stroke: 'rgb(255, 205, 86)', strokeWidth: 1},
    { month: "Apr", monthValue: "93",fill: 'rgba(75, 192, 192, 0.2)' ,stroke: 'rgb(75, 192, 192)', strokeWidth: 1},
    { month: "May", monthValue: "61",fill: 'rgba(54, 162, 235, 0.2)' ,stroke: 'rgb(54, 162, 235)', strokeWidth: 1},
    { month: "Jun", monthValue: "51",fill: 'rgba(153, 102, 255, 0.2)' ,stroke: 'rgb(153, 102, 255)', strokeWidth: 1},
    { month: "Jul", monthValue: "40",fill: 'rgba(201, 203, 207, 0.2)' ,stroke: 'rgb(201, 203, 207)', strokeWidth: 1},
  ];
  return (

    <div className='container d-flex flex-xl-row flex-lg-row flex-md-row flex-column flex-wrap gap-3' style={{justifyContent:"center"}}>
      <Form className="bg-white mt-3 border rounded-2"  >
      <div className="headingOfData" style={{margin:"25px"}}>
      <h5 className='header-before mx-6'>Text Content here</h5>
      </div>
        <span className="headingOfLineGraph"style={{marginLeft:"200px",fontSize:"10px",color:"#24c8bf"}}>My First Dataset</span>
        <BarChart
                    width={475}
                    height={280}
                    data={monthsData}
                    margin={{
                        top: 20,
                        right: 30,
                        // left: 20,
                        bottom: 5
                    }}
                    style={{ stroke: 'rgba(255, 99, 132, 0.2)', strokeWidth: 1 }}
                >
                    <CartesianGrid strokeDasharray="0.2" />
                    <XAxis dataKey="month" interval="preserveStartEnd" />
                    <YAxis  />
                    <Tooltip />
                    <Legend />
                    <Bar strokeOpacity={1} dataKey="monthValue" fill='rgba(153, 102, 255, 255)' />
                </BarChart>
        <div/>
        <hr />
      <BarChartButtons/>
        <div/>
      </Form>
        <BarChartHorizontalCon/>
        <PieChartContainer/>
      <Form className="bg-white mt-2 border rounded-2">
      <div className="headingOfData" style={{margin:"25px"}}>
      <h5 className='header-before mx-6'>Text Content here</h5>
      </div>
        <div>
            <div>
        <span className="headingOfLineGraph"style={{marginLeft:"200px",fontSize:"10px",color:"#24c8bf"}}>My First Dataset</span>
          <LineChart data={monthsData}  width={475} height={280}>
            <CartesianGrid strokeDasharray="0.2" />
            <XAxis dataKey="month" interval={"preserveStartEnd"} />
            <YAxis />
            <Line dataKey="monthValue" type="monotone" stroke="#24c8bf" dot="11" activeDot={{r:7}} strokeWidth={1.5} fill='rgb(75, 192, 192)'/>
            <Tooltip/>
            <Legend/>
          </LineChart>
        </div>
        <hr/>
        <ChartButtons/>
        </div>
      <div/>
      </Form>
    </div>
  );
};
