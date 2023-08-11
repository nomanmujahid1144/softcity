import React from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
  Legend,
} from "recharts";
import { Form } from "react-bootstrap";
import ChartButtons from "../chartButtons/ChartButtons";

export default function BarChartHorizontalCon() {
  const monthsData = [
    { monthName: "Jan", monthValue: 90 },
    { monthName: "Feb", monthValue: 60 },
    { monthName: "Mar", monthValue: 29 },
    { monthName: "Apr", monthValue: 68 },
  ];

  return (
        <Form className="bg-white mt-3 border rounded-2">
          <div className="headingOfData" style={{ margin: "25px" }}>
            <h5 className="header-before mx-6">Text Content here</h5>
          </div>
          <span
            className="headingOfLineGraph"
            style={{marginLeft:"150px", fontSize: "10px", color: "#24c8bf" }}
          >
            Horizontal Bar Chart
          </span>
          <BarChart width={475} height={270} data={monthsData} layout="vertical" className="bg-white">
            <CartesianGrid strokeDasharray={.2} />
            <XAxis type="number" orientation="bottom" stroke="#285A64" />
            <YAxis
              type="category"
              dataKey="monthName"
              axisLine={true}
              dx={-10}
              tickLine={false}
              style={{ fill: "#285A64" }}
            />
            <Tooltip />
            <Legend />
            <Bar dataKey="monthValue" fill='rgba(255, 99, 132, 0.4)' stroke="rgba(255, 99, 132)" strokeWidth={2} barSize={{ height: 26 }}></Bar>
          </BarChart>
          <hr />
          <ChartButtons />
        </Form>
        
  );
}
