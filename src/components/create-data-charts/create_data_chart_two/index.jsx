import React, { useContext } from "react";
import "./create-data-chart-two.css";
import Createdata_chartTwo_header from "./createdata_chartTwo_header/createdata_chartTwo_header";
import Chart_two_Card from "./Chart-two-Card/Chart_two_Card";
import PaginationRounded from "../../pagination/PaginationMui";
import Context from "../../../Context/DashboardContext";

const Create_data_chart_two = () => {
  const indexData = useContext(Context);
  const { selectedDataPointsObj } = indexData;

  return (
    <div>
      <div>
        <Createdata_chartTwo_header />
      </div>

      <div style={{ marginTop: "20px", display: "flex", flexWrap: "wrap" }}>
        {selectedDataPointsObj.map((item) => {
          return (
            <>
              <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                <Chart_two_Card data={item} />
              </div>
            </>
          );
        })}
      </div>

      <div className="py-4 d-flex justify-content-end table-pagination">
        <PaginationRounded />
      </div>
    </div>
  );
};

export default Create_data_chart_two;
