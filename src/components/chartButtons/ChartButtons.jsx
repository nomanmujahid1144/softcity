import React, { useContext, useEffect, useRef, useState } from "react";

import Context from "./../../Context/DashboardContext";
import { CSVLink, CSVDownload } from "react-csv";
import { Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import "./chartButtons.css";

export default function ChartButtons({
  setShowBarModal,
  func,
  func1,
  func2,
  func3,
  func4,
  func5,
  show,
  setlength,
  data,
  fullHeight,
  chartId,
}) {
  const {
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    mode,
    favArray,
    setFavArray,
  } = useContext(Context);
  const [favourite, setfavourite] = useState(false);
  // dark and light mode

  const buttonStyle = {
    background: mode === "light-mode" ? "white" : "rgb(128,128,128, 0.4)",
    color: (mode === "light-mode" && "black") || "#ffffff",
    border: show && "solid 1px #000",
    borderRadius: "4px",
  };

  // width:
  //   (show && "32px") ||
  //   (showThreeColumn && "33px") ||
  //   (showFourColumn && "28px") ||
  //   "auto",
  // height:
  //   (show && "32px") ||
  //   (showThreeColumn && "33px") ||
  //   (showFourColumn && "28px") ||
  //   "auto",
  // padding:
  //   (show && "0px 0px") ||
  //   ((showThreeColumn || showFourColumn) && "0px") ||
  //   "6px 10px",

  //favorite
  const tooltip = useRef();
  const favFunc = function (id) {
    setfavourite((curr) => !curr);
    const isInclude = favArray.includes(id);
    if (isInclude === false) {
      favArray.push(id);
      console.log("fav Array", favArray);
    }
    localStorage.setItem("fav", favArray);
    console.log("local", localStorage.getItem("fav", favArray));
    console.log("local", localStorage.getItem("fav", favArray).includes(7));
  };

  // or
  const renderTooltip = (title) => (
    <Tooltip id="button-tooltip" style={{ fontSize: "12px" }}>
      {title}
    </Tooltip>
  );

  return (
    <div>
      <div
        className={`${
          mode === "dark-mode" && "dark-mode"
        } button-hover d-flex flex-column gap-1`}
      >
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 100, hide: 100 }}
            overlay={renderTooltip("Add Data")}
          >
            <Button
              onClick={func5}
              variant="secondry"
              className={`shadow-sm ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              }`}
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                viewBox="0 0 16 16"
                strokeWidth="0"
              >
                <path d="M6 13a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v10zM1 8a.5.5 0 0 0 .5.5H6v-1H1.5A.5.5 0 0 0 1 8zm14 0a.5.5 0 0 1-.5.5H10v-1h4.5a.5.5 0 0 1 .5.5z" />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Remove Data")}
          >
            <Button
              onClick={func4}
              className={`shadow-sm  ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-usb-c-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3 5a3 3 0 0 0 0 6h10a3 3 0 1 0 0-6H3Zm.5 2.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1 0-1Z" />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Previous Data")}
          >
            <Button
              onClick={func2}
              className={`shadow-sm  ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-caret-left-fill"
                viewBox="0 0 16 16"
              >
                <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z" />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Next Data")}
          >
            <Button
              onClick={func1}
              className={`shadow-sm  ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-caret-right-fill"
                viewBox="0 0 16 16"
              >
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Full Screen")}
          >
            <Button
              disabled={show}
              onClick={func3}
              className={`shadow-sm   ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-hdd-stack-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Download Data")}
          >
            <Button
              onClick={func}
              className={`shadow-sm   ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <CSVLink data={data}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={
                    (show && "13") ||
                    ((showThreeColumn || showFourColumn) && "10px") ||
                    "16"
                  }
                  height={
                    (show && "13") ||
                    ((showThreeColumn || showFourColumn) && "10px") ||
                    "16"
                  }
                  // fill="#555"
                  fill={(mode === "light-mode" && "black") || "#ffffff"}
                  className="bi bi-cloud-arrow-down-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 2a5.53 5.53 0 0 0-3.594 1.342c-.766.66-1.321 1.52-1.464 2.383C1.266 6.095 0 7.555 0 9.318 0 11.366 1.708 13 3.781 13h8.906C14.502 13 16 11.57 16 9.773c0-1.636-1.242-2.969-2.834-3.194C12.923 3.999 10.69 2 8 2zm2.354 6.854-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 9.293V5.5a.5.5 0 0 1 1 0v3.793l1.146-1.147a.5.5 0 0 1 .708.708z" />
                </svg>
              </CSVLink>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Table Form")}
          >
            <Button
              className={`shadow-sm ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              onClick={() => setShowBarModal((current) => !current)}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
        <div style={{ padding: "0px" }}>
          <OverlayTrigger
            placement="auto"
            delay={{ show: 140, hide: 100 }}
            overlay={renderTooltip("Add to Favourites")}
          >
            <Button
              // onClick={() => setfavourite(true)}
              onClick={() => favFunc(chartId)}
              className={`shadow-sm ${
                favourite && mode === "light-mode" && "btn-favourite"
              } ${favourite && mode === "dark-mode" && "bg-danger"} ${
                (showThreeColumn && "three-col-btn-div") ||
                (showFourColumn && "four-col-btn-div") ||
                "main-button-div"
              } `}
              variant="secondry"
              style={buttonStyle}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                height={
                  (show && "13") ||
                  ((showThreeColumn || showFourColumn) && "10px") ||
                  "16"
                }
                fill="currentColor"
                className="bi bi-star"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
                />
              </svg>
            </Button>
          </OverlayTrigger>
        </div>
      </div>
    </div>
  );
}
