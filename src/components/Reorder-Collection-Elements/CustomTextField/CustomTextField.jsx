import React from "react";
import "./custom-textfield.css";
import CustomButtonGroup from "../CustomButtonGroup";

const CustomTextField = ({
  textField,
  textDescField,
  selectField,
  textFieldTitle = "1. Data Point name",
  descFieldTitle = "2. Data Point name",
  selectFieldTitle = "1. Data Point name",
}) => {
  return (
    <div>
      {textField && (
        <div className="text1-div">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <label for="exampleInput1" class="form-label fw-semibold text-lbl1">
              {textFieldTitle}
            </label>
            <div style={{ marginBottom: "6px" }}>
              <CustomButtonGroup />
            </div>
          </div>
          <input
            type="text"
            class="form-control text-inp1"
            id="exampleInput1"
            aria-describedby="textHelp"
          />
        </div>
      )}

      {textDescField && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <label for="exampleInput1" class="form-label fw-semibold text-lbl1">
              {descFieldTitle}
            </label>
            <div style={{ marginBottom: "6px" }}>
              <CustomButtonGroup />
            </div>
          </div>
          <textarea
            style={{ resize: "none" }}
            class="form-control"
            rows="5"
            id="exampleInput2"
            name="text"
            placeholder="Description"
          ></textarea>
        </div>
      )}

      {selectField && (
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <label for="exampleInput1" class="form-label fw-semibold text-lbl1">
              {selectFieldTitle}
            </label>
            <div style={{ marginBottom: "6px" }}>
              <CustomButtonGroup />
            </div>
          </div>
          <select class="form-select  select-lbl">
            <option selected disabled>
              Select
            </option>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default CustomTextField;
