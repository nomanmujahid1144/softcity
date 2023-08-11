import React from "react";
import { PieChart, Pie } from "recharts";
import { Form } from "react-bootstrap";
import ChartButtons from "../chartButtons/ChartButtons";

export default function PieChartContainer () {
  const piColData = [
    { name: "yellow", colorArea: 80, fill: "rgb(255, 205, 86)" },
    { name: "blue", colorArea: 40, fill: "rgb(54, 162, 235)" },
    { name: "pink", colorArea: 200, fill: "rgb(255, 99, 132)" },
  ];

  return (
    <div className="bg-white mt-2 border rounded-2">
      <div className="headingOfData" style={{ margin: "25px" }}>
        <h5 className="header-before mx-6">Text Content here</h5>
      </div>
      <div>
        <div>
          <span
            className="headingOfLineGraph"
            style={{ marginLeft: "170px", fontSize: "10px", color: "#24c8bf" }}
          >
            {" "}
            Yellow Blue Pink
          </span>
          <Form className="">
            <PieChart width={475} height={280}>
              <Pie
                data={piColData}
                dataKey="colorArea"
                outerRadius={135}
                innerRadius={60}
                fill="green"
              />
            </PieChart>
          </Form>
		  <hr />
		  <ChartButtons/>
        </div>
      </div>
    </div>
  );
};
