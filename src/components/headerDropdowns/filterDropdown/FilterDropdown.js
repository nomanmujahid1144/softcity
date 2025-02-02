import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import { Calendar3 } from "react-bootstrap-icons";
import "react-datepicker/dist/react-datepicker.css";
import "./filter.css";
import Context from "../../../Context/DashboardContext";
function FilterDropdown() {
  const { startDate, setStartDate, endDate, setEndDate } = useContext(Context);

  const [show, setshow] = useState(true);

  return (
    <>
      <div
        className="bg-white rounded shadow p-3 d-flex flex-row justify-content-around"
        style={{ overflow: "visible" }}
      >
        <div className="d-flex flex-column">
          <p className="mb-1 fs-8">From</p>
          <div className="d-flex flex-row align-items-center date-container gap-2 ">
            <Calendar3 className="fs-5" />
            <DatePicker
              closeOnScroll={true}
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              selectsStart
              startDate={startDate}
              endDate={endDate}
            />
          </div>
        </div>
        <div className="d-flex flex-column ">
          <p className="mb-1 fs-8 fw-normal">To</p>
          <div className="d-flex flex-row align-items-center date-container gap-2">
            <Calendar3 className="fs-5" />
            <DatePicker
              closeOnScroll={true}
              onChange={(date) => setEndDate(date)}
              selectsEnd
              startDate={startDate}
              endDate={endDate}
              minDate={startDate}
              selected={endDate}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default FilterDropdown;
