import React, { useContext, useEffect } from "react";
import "./select-from-labled-data-col.css";
import Context from "../../../../Context/DashboardContext";
import { useState } from "react";

const Select_from_labeled_data_col = () => {
  const {
    mode,
    StepperStep,
    setStepperStep,
    addfield,
    selectLabelData,
    setselectLabelData,
    Labels,
    setLabels,
    Data,
    setData
  } = useContext(Context);

  const handleLabels = function (e) {
    if (!Labels.includes(e.target.value)){
      setLabels([ ...Labels, e.target.value]);
    }
  };

  const handleColumns = function (e) {
    if (!Data.includes(e.target.value)){
      setData([ ...Data, e.target.value]);
    }
  };
  
  console.log(Data, Labels)

  return (
    <div>
      <div
        className={`create-data-points d-flex justify-content-between flex-grow-1 ${
          mode === "dark-mode" && "text-white"
        }`}
        style={{ width: "100%" }}
      >
        <div
          className={`data-point-heading header-beforeAdmin fw-400 ${
            mode === "dark-mode" && "text-white"
          }`}
        >
          Select From Labeled Data Columns
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        {selectLabelData.map((item, ind) => {
          return (
            <>
              <div style={{ marginBottom: "10px" }}>
                <div class="form-check">
                  {StepperStep == 4 && (
                    <div className="form-inp">
                      <input
                        class="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked
                      />
                    </div>
                  )}
                  {item.labels && item.labels.length > 0 && (
                    <div style={{ marginBottom: "10px" }}>
                      <select
                        onChange={handleLabels}
                        for="flexRadioDefault2"
                        class="form-select select-label"
                        aria-label="Default select example"
                      >
                        <option selected disabled>Select a Label</option>
                        {item.labels?.map((elem, ind) => (
                          <option>{elem}</option>
                        ))}
                      </select>
                    </div>
                  )}
                  {item.columns && item.columns.length > 0 && (
                    <div style={{ marginBottom: "10px" }}>
                      <select
                        onChange={handleColumns}
                        for="flexRadioDefault2"
                        class="form-select select-label"
                        aria-label="Default select example"
                      >
                        <option selected disabled>Select a Column</option>
                        {item.columns?.map((elem, ind) => (
                          <option>{elem}</option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {item.labels && item.labels.length > 0 && (
                <div style={{ marginBottom: "10px" }}>
                  <hr class="select-hr" />
                </div>
              )}
            </>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginTop: "10px",
        }}
      >
        <button onClick={addfield} className="add-another-btn">
          Add Another
        </button>
      </div>
    </div>
  );
};

export default Select_from_labeled_data_col;
