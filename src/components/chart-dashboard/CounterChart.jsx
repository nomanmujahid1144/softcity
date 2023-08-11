import React, { useRef, useState, useContext, useEffect } from "react";
import Context from "../../Context/DashboardContext";
import "./container.css";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import ChartButtons from "./../chartButtons/ChartButtons";
import BarChartModal from "./../modal/BarChartModal";
import ChartFull from "./fullscreen/ChartFull";
import WarningModal from "../modal/WarningModal";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
//** registring custom logic */
function CounterChart({
  className,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  chartId = 10,
}) {
  const { showThreeColumn, showFourColumn, mode } = useContext(Context);

  // dark and light mode
  const [show, setShow] = useState(false);

  //**for going forward */
  const [smShow, setSmShow] = useState(false);

  // For Displaying popup message
  const [message, setmessage] = useState();

  // To access image chart
  const chartref = useRef();

  //**for showing the table */
  const [showBarModal, setShowBarModal] = useState(false);

  // For incrementing and decrementing data
  const [counter, setCounter] = useState(0);

  //*!buttons logic start
  //**download image logic completed */
  const DownlaodChartImage = function () {
    const ctx = chartref.current;
  };

  //**working on add and remove data */
  const adddata = function () {
    setCounter((prev) => prev + 1);
  };
  const removedata = function () {
    if (!(counter == 0)) {
      setCounter((prev) => prev - 1);
    }
  };

  function fullscreen(e) {
    setShow(!show);
  }

  //to download csv file
  const csvData = [["counter_value"], [counter]];

  return (
    <>
      <div className={` mb-2 box-main ${mode || "light-mode"}`}>
        <div
          className={`container d-flex justify-content-center position-relative `}
        >
          <div
            className={` layout-transition  ${className} box-main__inner main-div ${
              showThreeColumn && "three-col-main-div"
            } ${showFourColumn && "four-col-main-div"} `}
            style={{
              width: fullwidth,
              height: fullHeight,
            }}
          >
            {showBarModal && (
              <div>
                <BarChartModal />
              </div>
            )}
            {showtitle && (
              <div
                className="headingOfData "
                style={{
                  marginTop:
                    ((showFourColumn || showThreeColumn) && "12px") || "20px",

                  paddingBottom:
                    ((showFourColumn || showThreeColumn) && "0px") || "30px",
                }}
              >
                <span
                  style={{
                    color: (mode === "light-mode" && "black") || "white",
                  }}
                  className={`header-before layout-transition text-div ${
                    (showFourColumn && "four-col-text-div") ||
                    (showThreeColumn && "three-col-text-div")
                  } `}
                >
                  Counter Chart
                </span>
              </div>
            )}
            <div
              className="center-counter"
              style={{
                color: (mode === "light-mode" && "black") || "white",
                width: "100%",
                height:
                  (fullHeight && "100%") ||
                  (showThreeColumn && "77%") ||
                  (showFourColumn && "77%") ||
                  "70%",
              }}
            >
              {counter}
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginLeft: (showFourColumn && "5px") || "10px" }}
          >
            <ChartButtons
              setShowBarModal={setShowBarModal}
              func={DownlaodChartImage}
              // func1={forward}
              // func2={backward}
              func3={fullscreen}
              func4={removedata}
              func5={adddata}
              data={csvData}
              show={button}
              fullscreen={fullHeight}
              chartId={chartId}
            />
          </div>
        </div>
        {show && (
          <ChartFull show={show} setShow={setShow} Chart={CounterChart} />
        )}
      </div>
      <WarningModal smShow={smShow} setSmShow={setSmShow} message={message} />
    </>
  );
}
export default CounterChart;
CounterChart.defaultProps = {
  showtitle: true,
};
