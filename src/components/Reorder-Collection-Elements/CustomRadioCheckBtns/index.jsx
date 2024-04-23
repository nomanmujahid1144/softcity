import React from "react";
import "./custom-radio-check.css";
import CustomButtonGroup from "../CustomButtonGroup";

const radioData = [
  {
    title: "Hourly",
  },
  {
    title: "Daily",
  },
  {
    title: "Monthly",
  },
  {
    title: "Quartly",
  },
  {
    title: "Bi-Annually",
  },
  {
    title: "Yearly",
  },
];

const checkboxData = [
  {
    title: "Data Collectors",
  },
  {
    title: "Dashboard Viewer",
  },
  {
    title: "Administrators",
  },
  {
    title: "Data Collectors",
  },
  {
    title: "Dashboard Viewer",
  },
  {
    title: "Administrators",
  },
];

const CustomRadioCheckBtns = ({
  radioBtn,
  radioBtnTitle,
  checkBox,
  checkBoxTitle,
}) => {
  return (
    <div>
      {radioBtn && (
        <div>
          {/* <div className="mb-2"> */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "end",
            }}
          >
            <label class="form-label fw-semibold text-lbl1" for="form-check">
              {radioBtnTitle}
            </label>
            <div style={{ marginBottom: "6px" }}>
              <CustomButtonGroup />
            </div>
          </div>
          {/* </div> */}

          <div className="d-flex flex-wrap flex-grow-1 mx-auto ">
            {radioData.map((item) => {
              return (
                <>
                  <div class="form-check form-check-inline radio-div1">
                    <input
                      class="form-check-input radio1"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label
                      class="form-check-label fw-semibold radio-lbl "
                      for="inlineRadio1"
                    >
                      {item.title}
                    </label>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}

      <div>
        {checkBox && (
          <div>
            <div className="mb-2">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "end",
                }}
              >
                <label
                  class="form-label fw-semibold text-lbl1"
                  for="form-check"
                >
                  {checkBoxTitle}
                </label>
                <div style={{ marginBottom: "6px" }}>
                  <CustomButtonGroup />
                </div>
              </div>
            </div>

            <div className="d-flex flex-wrap flex-grow-1 mx-auto">
              {checkboxData.map((item) => {
                return (
                  <div class="form-check form-check-inline">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      id="inlineCheckbox1"
                      value="option1"
                    />
                    <label
                      class="form-check-label checkbox-lbl"
                      for="inlineCheckbox1"
                    >
                      {item.title}
                    </label>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CustomRadioCheckBtns;
