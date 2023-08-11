import React, { useRef, useState, useContext, useEffect } from "react";
import Context from "../../Context/DashboardContext";
import { MdEditLocationAlt } from "react-icons/md";
import "./container.css";
import { useForm } from "react-hook-form";
import "./container.css";
import DashboardContext from "../../Context/DashboardContext";
import CommentModal from "../modal/CommentModal";
import EditCommentModal from "../modal/EditCommentModal";
import $ from "jquery";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { BsArrowRight } from "react-icons/bs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";
import ChartButtons from "./../chartButtons/ChartButtons";
import BarChartModal from "./../modal/BarChartModal";
import ChartFull from "./fullscreen/ChartFull";
import { Filler } from "chart.js";
import WarningModal from "../modal/WarningModal";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
//** registring custom logic */

const SimpleBarChart = ({
  width,
  className,
  height,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  chartdark,
  chartId = 1,
}) => {
  const [show, setShow] = useState(false);
  //**for commenting */
  const [comments, setComments] = useState([]);
  const {
    showComment,
    setShowThreeColumn,
    setShowFourColumn,
    showThreeColumn,
    showFourColumn,
    filter,
    startDate,
    endDate,
    mode,
    setmode,
    setcommentsOff,
    commentsOff,
  } = useContext(Context);

  // dark and light mode

  //** */
  //**for going forward in time in graph */

  const [smShow, setSmShow] = useState(false);
  const [showfullchart, setshowfullchart] = useState(false);
  //** */
  const [handlemodal, sethandlemodal] = useState(false);
  //
  const [widthmodal, setwidthmodal] = useState({ comment: {}, arrow: {} });
  const [message, setmessage] = useState();
  const [indexcomment, setindexcomment] = useState(0);
  //**for going forward in time in graph */
  const chart = useRef();
  const chartref = useRef();
  const iconRef = useRef();

  const [length, setlength] = useState({ start: 0, end: 7 });
  //**for showing the table */
  const [showBarModal, setShowBarModal] = useState(false);
  const [chartdata, setchartdata] = useState({
    Labels: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    Data: [-21, -37, -35, 48, 31, -22, 32, -33, 34, 55, 32, 67],
  });

  //** necesasry for add button */

  const { register, handleSubmit } = useForm();
  //
  let labels = chartdata.Labels.slice(length.start, length.end);

  const dataArray = chartdata.Data.slice(length.start, length.end);
  const data = {
    labels,
    datasets: [
      {
        label: "My First DataSet",
        data: dataArray,
        borderColor: [
          "rgb(255, 99, 132)",
          "rgb(255, 159, 64)",
          "rgb(255, 205, 86)",
          "rgb(75, 192, 192)",
          "rgb(54, 162, 235)",
          "rgb(153, 102, 255)",
          "rgb(201, 203, 207)",
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(255, 205, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(201, 203, 207, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    //     aspectRatio: 2 | 2,

    plugins: {
      legend: {
        position: "top",
        labels: {
          color: (mode === "light-mode" && "black") || "white",
          font: {
            size:
              (showThreeColumn || showFourColumn) && window.innerWidth == 1024
                ? 6
                : 10,
          },
        },
      },

      title: {
        display: false,
      },
      options: {
        aspectRatio: 2 | 1,
      },
    },

    scales: {
      y: {
        ticks: {
          color: (mode === "light-mode" && "black") || "white",
          font: {
            // size: 18,
            size:
              (showThreeColumn || showFourColumn) && window.innerWidth == 1024
                ? 6
                : 10,
          },
          beginAtZero: true,
        },
      },
      x: {
        ticks: {
          color: (mode === "light-mode" && "black") || "white",
          beginAtZero: true,
          font: {
            size:
              (showThreeColumn || showFourColumn) && window.innerWidth == 1024
                ? 6
                : 10,
          },
        },
      },
    },
  };
  //filter
  useEffect(() => {
    if (filter) {
      const ctx = chartref.current;

      const newlabel = chartdata.Labels.indexOf(
        startDate.toLocaleString("default", { month: "long" })
      );
      const lastlabel = chartdata.Labels.indexOf(
        endDate.toLocaleString("default", { month: "long" })
      );
      const newlabels = chartdata.Labels.slice(newlabel, lastlabel + 1);
      const newdata = chartdata.Data.slice(newlabel, lastlabel + 1);
      // setlength({
      //   start: newlabel,
      //   end: lastlabel + 1,
      // });
      ctx.data.labels = newlabels;
      ctx.data.datasets.data = newdata;
      ctx.update();
    }
    // const resize = function () {
    //   if (window.innerWidth < 350) {
    //     chart.options.legend.labels.fontSize = 10;
    //   } else {
    //     chart.options.legend.labels.fontSize = 20;
    //   }
    // };
    // window.addEventListener("resize", resize);

    return () => {
      // window.removeEventListener("resize", resize);
    };
  }, [startDate, endDate]);
  //*!buttons logic start
  //**download image logic completed */
  const DownlaodChartImage = function () {
    const ctx = chartref.current;
    // let res = ctx.toBase64Image();

    // const downloadLink = document.createElement("a");
    // downloadLink.href = res;
    // downloadLink.download = "myChart.png";
    // downloadLink.click();

    // const labels = chartdata.Labels;
    // const dataset = chartdata.Data;
    // const datasets = ctx.data.datasets[0].label;

    // // Convert the data to CSV format
    // const csvData = [];
    // dataset.forEach((value, index) => {
    //   if (!csvData[index]) {
    //     csvData[index] = { label: labels[index] };
    //   }
    //   csvData[index][datasets] = value;
    // });
    // const csvString = json2csv.parse(csvData, {
    //   fields: Object.keys(csvData[0]),
    // });

    // // Download the CSV file
    // const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
    // saveAs(blob, "chart-data.csv");
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // link.setAttribute("href", url);
    // link.setAttribute("download", "chart-data.csv");
    // link.style.visibility = "hidden";
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  //** forward and next logic */
  let index = chartdata.Labels.length;
  //
  function forward(e) {
    const ctx = chart.current;
    setmessage(
      "You are Currently Viewing the Latest data in the Database For This Year"
    );
    setlength({
      start: length.end * 2 > index ? index - 7 : length.end,
      end: length.end * 2 < index ? length.end * 2 : index,
    });
    // if (length.end === index) {
    //   setchartdata({
    //     Labels: [
    //       "January 22",
    //       "February 22",
    //       "March 22",
    //       "April 22",
    //       "May 22",
    //       "June 22",
    //       "July 22",
    //       "August 22",
    //       "September 22",
    //       "October 22",
    //       "November 22",
    //       "December 22",
    //     ],
    //     Data: [30, -45, -22, -32, -31, 34, -55, 32, -17, 32, 47, -44],
    //   });
    //   setlength({
    //     start: 0,
    //     end: 7,
    //   });
    // }
    if (length.end === index) {
      setSmShow(true);
      setlength({
        start: index - 7,
        end: index,
      });
    }
  }
  function backward(e) {
    const ctx = chartref.current;

    setlength({
      start: length.start > 0 ? length.start - 7 > 0 && length.start - 7 : 0,
      end: length.start > 7 ? length.start : 7,
    });
    if (length.end <= 7) {
      setSmShow(true);
      setmessage(
        "No more previous data available for now. you can check future data anytime."
      );
    }
    ctx.update();
  }

  //**working on add and remove data */
  const adddata = function () {
    if (index >= 7) {
      setlength({
        start: 0,
        end: (length.end + 1 <= index && length.end + 1) || index,
      });
    }
  };
  const removedata = function () {
    // const newlabels = chartdata.Labels;
    // const newdata = chartdata.Data;
    // newlabels.pop();
    // newdata.pop();
    // setchartdata({ Labels: newlabels, Data: newdata });
    if (index < 7) {
      setlength({
        start: 0,
        end: index,
      });
    }
    if (index >= 7) {
      setlength({
        start: length.start,
        end: (length.end - 1 > 7 && length.end - 1) || 7,
      });
    }
  };
  useEffect(() => {
    let { clickX, clickY } = handlemodal;
    if (!showComment) {
      let rest = comments.map((res) => {
        return (res.commentbox = false);
      });
    }
  }, [showComment, handlemodal, comments]);
  //*!ending
  const handleChartClick = (event) => {
    event.preventDefault();

    if (!showComment) return;

    // $(`.commentmodal-${length - 1}`).hide();

    ///setting up comment placement
    const chartContainer = chart.current;
    const chartRect = chartContainer.getBoundingClientRect();
    const parentRect = chartContainer.parentNode.getBoundingClientRect();
    //z-index
    // $(".fixed-top").css({ zIndex: 5 });
    //

    //
    const clickX = event.clientX - chartRect.left;

    console.log(clickX);
    console.log(event.clientX - chartRect.left, event.clientY - parentRect.top);

    const containerX = chartContainer.offsetLeft;
    const containerY = chartContainer.offsetTop;
    //
    const clickY = event.clientY - chartRect.top + (containerY - 15);
    console.log("offsets", containerX, containerY);
    const leftPercentage = (clickX / parentRect.width) * 100;
    let finalLeftPercentage;
    if (clickX < 30) {
      finalLeftPercentage = ((clickX + 14) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100;
      }
    } else if (clickX < 40) {
      finalLeftPercentage = ((clickX + 8) / chartRect.width) * 100;
      if (showFourColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100;
      }
    } else if (clickX > 40 && clickX < 77) {
      finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX + 10) / chartRect.width) * 100;
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX + 1) / chartRect.width) * 100;
      }
    } else if (clickX > 80 && clickX < 140) {
      finalLeftPercentage = ((clickX + 1) / chartRect.width) * 100;
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 10) / chartRect.width) * 100;
      }
    } else if (clickX >= 160 && clickX < 200) {
      finalLeftPercentage = ((clickX - 8) / chartRect.width) * 100;
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100;
      }
    } else if (clickX >= 200 && clickX < 270) {
      finalLeftPercentage = ((clickX - 13) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100;
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 25) / chartRect.width) * 100;
      }
      if (showFourColumn && clickX > 240) {
        finalLeftPercentage = ((clickX - 30) / chartRect.width) * 100;
      }
    } else if (clickX >= 270 && clickX < 330) {
      finalLeftPercentage = ((clickX - 20) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 27) / chartRect.width) * 100;
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 30) / chartRect.width) * 100;
      }
      if (showFourColumn && clickX > 290) {
        finalLeftPercentage = ((clickX - 40) / chartRect.width) * 100;
      }
    } else if (clickX >= 330 && clickX < 390) {
      finalLeftPercentage = ((clickX - 29) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 34) / chartRect.width) * 100;
      }
      if (showFourColumn) {
        finalLeftPercentage = ((clickX - 44) / chartRect.width) * 100;
      }
    } else if (clickX >= 390 && clickX < 420) {
      finalLeftPercentage = ((clickX - 35) / chartRect.width) * 100;
      if (showThreeColumn) {
        finalLeftPercentage = ((clickX - 40) / chartRect.width) * 100;
      }
    } else if (clickX >= 420 && clickX < 500) {
      finalLeftPercentage = ((clickX - 46) / chartRect.width) * 100;
    } else if (clickX >= 500 && clickX < 560) {
      finalLeftPercentage = ((clickX - 50) / chartRect.width) * 100;
    } else if (clickX >= 560 && clickX < 600) {
      finalLeftPercentage = ((clickX - 60) / chartRect.width) * 100;
    } else if (clickX >= 600) {
      finalLeftPercentage = ((clickX - 60) / chartRect.width) * 100;
    } else {
      finalLeftPercentage = leftPercentage;
    }
    sethandlemodal({ clickX, clickY });
    comments.map((res) => {
      return (res.commentbox = false), (res.show = false);
    });
    let placement = "top";
    ///
    if (
      (showThreeColumn && clickX < 55 && clickY > 100) ||
      (showFourColumn && clickX > 40 && clickY > 60) ||
      (clickX < 100 && clickY > 150)
    ) {
      placement = "top-start";
    }
    if (
      (showThreeColumn && clickX > 380 && clickY > 100) ||
      (showFourColumn && clickX > 260 && clickY > 60) ||
      (clickX > 540 && clickY > 150)
    ) {
      console.log("click x condition");
      placement = "top-end";
      if (clickX > 540 && clickY > 150) {
        setwidthmodal({
          comment: {
            transform: "translate(-80%,-100%)",
          },
          arrow: {
            transform: "translate(130%, 47%)",
          },
        });
      }
      if (
        (showThreeColumn && clickX > 380 && clickY > 100) ||
        (showFourColumn && clickX > 260 && clickY > 60)
      ) {
        console.log("yoo");
        placement = "top-end";
        setwidthmodal({
          comment: {
            transform: "translate(-80%,-100%)",
          },
          arrow: {
            transform: "translate(120%, 60%) ",
          },
        });
      }
    } else if (
      (showThreeColumn && clickX > 55 && clickX < 380 && clickY > 100) ||
      (showFourColumn && clickX > 40 && clickX < 260 && clickY > 65) ||
      (!showFourColumn &&
        !showThreeColumn &&
        clickX > 100 &&
        clickX < 540 &&
        clickY > 150)
    ) {
      console.log("click middle condition");
      placement = "top";
      setwidthmodal({});
    }

    if (
      !showThreeColumn &&
      !showFourColumn &&
      clickY < 150 &&
      clickX > 100 &&
      clickX < 540
    ) {
      console.log("click Y for 2 column condition");
      placement = "bottom";
      setwidthmodal({
        comment: {
          transform: "translate(-80%,20%)",
        },
        arrow: {
          transform: "translate(79%, -47%) rotate(180deg)",
          top: 0,
        },
      });
    }
    if (!showThreeColumn && !showFourColumn && clickY < 150 && clickX < 100) {
      console.log("click less greater column condition");
      placement = "bottom-start";
      setwidthmodal({
        comment: {
          transform: "translate(0%,20%)",
        },
        arrow: {
          transform: "translate(-58%, 24%) rotate(135deg)",
          top: 0,
        },
      });
    }
    if (!showThreeColumn && !showFourColumn && clickY < 150 && clickX > 540) {
      console.log("click Y for 2 column condition");
      placement = "bottom-end";
      setwidthmodal({
        comment: {
          transform: "translate(-80%,20%)",
        },
        arrow: {
          transform: "translate(79%, -47%) rotate(180deg)",
          top: 0,
        },
      });
    }
    if (
      (showThreeColumn && clickX < 55 && clickY < 100) ||
      (showFourColumn && clickX < 40 && clickY < 60)
    ) {
      console.log("for 2 3 column ");
      placement = "bottom-start";
      setwidthmodal({
        comment: {
          transform: "translate(-7%,20%)",
        },
        arrow: {
          transform: "translate(-57%, -47%) rotate(180deg)",
          top: 0,
        },
      });
    }

    if (
      (showThreeColumn && clickX > 55 && clickX < 380 && clickY < 100) ||
      (showFourColumn && clickX > 40 && clickX < 260 && clickY < 60)
    ) {
      console.log("click layout condition");
      placement = "bottom";
      setwidthmodal({
        comment: {
          transform: "translate(-60%,25%)",
        },
        arrow: {
          transform: "translate(35%, -47%) rotate(180deg)",
          top: 0,
        },
      });
    }
    ///
    const newComment = {
      placement: placement,
      next: false,
      show: false,
      modal: true,
      x: finalLeftPercentage,
      y: (clickY / parentRect.height) * 100,
      commentbox: true,
    };
    setTimeout(() => {
      return setComments([...comments, newComment]);
    }, 300);
  };

  function commentclick(index) {
    const newitems = comments.map((e, ind) => {
      // *! Might be useful in future
      if (index === ind) {
        return { ...e, show: !e.show, commentbox: false };
      }
      if (e) {
        return { ...e, commentbox: false, show: false };
      }
      return e;
    });

    setComments(newitems);
  }
  function fullscreen(e) {
    setShow(!show);
  }
  //to download csv file
  const csvData = [
    ["firstname", "lastname", "email"],
    chartdata.Labels,
    chartdata.Data,
  ];
  function higherorder(data, index) {
    console.log(data);
    const newitems = comments.map((e, ind) => {
      if (index === ind) {
        return { ...e, mycomment: data.Comment, commentbox: false };
      }
      return e;
    });
    setComments(newitems);
  }

  const commentbox = function (index) {
    const newitems = comments.map((e, ind) => {
      if (index === ind) {
        return { ...e, commentbox: false };
      }
      return e;
    });
    setComments(newitems);
  };
  const onSubmit = (data) => {
    higherorder(data, indexcomment.index);
    if (data) {
    }
  };
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
                  Simple Bar Chart
                </span>
              </div>
            )}
            <div
              ref={chart}
              className={`d-flex flex-column align-items-center position-relative ${
                chartdark && mode === "dark-mode" && "bg-dark"
              }`}
              onMouseDown={handleChartClick}
              style={{
                width: "100%",
                height:
                  (fullHeight && "100%") ||
                  (showThreeColumn && "77%") ||
                  (showFourColumn && "77%") ||
                  "70%",
              }}
            >
              <Bar options={options} data={data} ref={chartref} />
            </div>
          </div>
          <div
            className="text-center"
            style={{ marginLeft: (showFourColumn && "5px") || "10px" }}
          >
            <ChartButtons
              setShowBarModal={setShowBarModal}
              func={DownlaodChartImage}
              func1={forward}
              func2={backward}
              func3={fullscreen}
              func4={removedata}
              func5={adddata}
              data={csvData}
              show={button}
              fullscreen={fullHeight}
              chartId={chartId}
            />
          </div>

          {showComment &&
            comments?.map((comment, index, array) => {
              return (
                <div
                  key={index}
                  className="position-absolute text-white text-container fs-8"
                  style={{
                    top: `${
                      showFourColumn ? `${comment.y + 1}` : `${comment.y}`
                    }%`,
                    left: `${comment.x - 1}%`,
                    zIndex: 7,
                  }}
                >
                  <div>
                    <OverlayTrigger
                      key={index}
                      trigger="click"
                      placement={comment.placement}
                      show={comment.show}
                      rootClose={true}
                      transition={false}
                      hasDoneInitialMeasure={true}
                      overlay={
                        <Popover
                          id={`popover-positioned-${indexcomment.placement}`}
                          className="container-comment editmodal rounded-0 border"
                        >
                          <div>
                            <Popover.Header
                              as="h5"
                              className="mt-2 mb-1 border-0 editmodal-heading comment-header comment-heading-view pb-0 bg-white d-flex justify-content-between"
                            >
                              <span className="header-beforeComment">
                                View/Update Comment
                              </span>

                              <button
                                type="button"
                                role="button"
                                onClick={() => commentbox(index)}
                                className="btn-close tooltip-close bg-gray text-center"
                              ></button>
                            </Popover.Header>
                            <Popover.Body>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-container d-flex flex-column gap-1">
                                  {show && (
                                    <input
                                      {...register("Comment")}
                                      type="text"
                                      className="comment-input mt-1 ps-0 border-bottom  pb-1 mb-2 text-primary "
                                      placeholder="Your Comment"
                                      autoFocus={true}
                                      defaultValue={comment.mycomment}
                                    />
                                  )}
                                  {!show && (
                                    <p className="comment-input comment-texted mt-1 pb-1 mb-1 border-bottom comment-para fs-7 text-muted">
                                      {comment.mycomment ?? "No Comment"}
                                    </p>
                                  )}
                                  <button
                                    type="submit"
                                    onClick={() => {
                                      setShow(!show);
                                      setindexcomment({ index: index });
                                    }}
                                    className="btn text-white btn-color btn-sm align-self-end p-2 "
                                  >
                                    <span className="comment-button">
                                      Update
                                    </span>
                                    <BsArrowRight className="fw-semibold ms-1" />
                                  </button>
                                </div>
                              </form>
                            </Popover.Body>
                          </div>
                        </Popover>
                      }
                    >
                      <span
                        ref={iconRef}
                        className="icon-rotate position-relative"
                        onClick={(e) => {
                          commentclick(index);
                          // $(`.comment${index}`).toggle();
                        }}
                      >
                        <MdEditLocationAlt
                          className={`icon-comment ${
                            showFourColumn ? "fs-6" : "fs-5"
                          } `}
                        />
                      </span>
                    </OverlayTrigger>

                    {comment.commentbox && (
                      <div
                        style={widthmodal.comment}
                        className={`position-absolute container-comment comment-box commentmodal-${index}`}
                      >
                        <CommentModal
                          style={widthmodal.arrow}
                          index={index}
                          funcretrieve={higherorder}
                          close={commentbox}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
        {show && (
          <ChartFull show={show} setShow={setShow} Chart={SimpleBarChart} />
        )}
      </div>
      <WarningModal smShow={smShow} setSmShow={setSmShow} message={message} />
    </>
  );
};

export default SimpleBarChart;
SimpleBarChart.defaultProps = {
  showtitle: true,
};
