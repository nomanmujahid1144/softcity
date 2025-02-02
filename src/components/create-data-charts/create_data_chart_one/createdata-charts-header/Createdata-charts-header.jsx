import React, { useContext } from "react";
import "./createdata-charts-header.css";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import { BsArrowRight } from "react-icons/bs";
import Context from "./../../../../Context/DashboardContext";

const Createdata_charts_header = () => {
  const { mode } = useContext(Context);

  return (
    <div>
      <div
        className={`create-data-points d-flex justify-content-between  flex-grow-1 ${
          mode === "dark-mode" && "text-white"
        }`}
        style={{ width: "100%" }}
      >
        <div
          className="title-header"
          style={{ display: "flex", width: "100%" }}
        >
          <div className="d-flex justify-content-start align-items-center flex-wrap ">
            <div className="d-flex align-items-center">
              <div className="data-point-heading header-beforeAdmin">
                Select Data Point
              </div>
              <div className="total-head mt-2">Total: 390</div>
            </div>
          </div>

          <div className="select-header">
            <select class="form-select  select-lbl">
              <option selected disabled>
                Filter by Assigned User Group
              </option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
            </select>
          </div>
        </div>

        <div className="primary-inputs-search d-flex align-items-center rounded search-bar border-0 bg-white ">
          <span style={{ paddingLeft: "7px", paddingRight: "7px" }}>
            <CiSearch className="search-icon" />
          </span>
          <Form.Control placeholder="Search" className="input bg-white " />
        </div>
      </div>
    </div>
  );
};

export default Createdata_charts_header;
