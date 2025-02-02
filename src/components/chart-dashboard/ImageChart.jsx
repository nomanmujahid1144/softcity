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
import WarningModal from "../modal/WarningModal";
import CarouselChartFull from "./fullscreen/CarouselChartFull";
import { Carousel } from "react-bootstrap";

const images = [
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1663054774427-55adfb2be76f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://plus.unsplash.com/premium_photo-1678117814281-34964288a077?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjl8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1679679008383-6f778fe07828?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8NDJ8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDd8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
];

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
function ImageChart({
  className,
  showtitle,
  button,
  fullwidth,
  fullHeight,
  hideButtons,
  showCarousel,
  chartId = 9,
}) {
  const { showThreeColumn, showFourColumn, mode } = useContext(Context);

  // dark and light mode
  const [show, setShow] = useState(false);

  //**for going forward */
  const [smShow, setSmShow] = useState(false);

  // For Displaying popup message
  const [message, setmessage] = useState();

  // For Displaying selected image in full screen mode
  const [selectedImage, setSelectedImage] = useState(null);

  // To access image chart
  const chartref = useRef();

  //**for showing the table */
  const [showBarModal, setShowBarModal] = useState(false);

  // for getting image array current index
  const [start, setStart] = useState(0);

  // Get to know index of selected image
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  //*!buttons logic start
  //**download image logic completed */
  const DownlaodChartImage = function () {
    const ctx = chartref.current;
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseClick = () => {
    setSelectedImage(null);
  };

  //** forward and next logic */
  function forward(e) {
    if (start < images.length - 3) {
      setSmShow(false);
      setStart(start + 1);
    } else {
      setSmShow(true);
      setmessage("No more images available");
    }
  }

  function backward(e) {
    if (start > 0) {
      setSmShow(false);
      setStart(start - 1);
    } else {
      setSmShow(true);
      setmessage(
        "No more previous images data available for now. you can check future data anytime."
      );
    }
  }

  function fullscreen(e) {
    setShow(!show);
  }

  const windowImages = images.slice(start, start + 3);

  const handleCarouselSelect = (selectedIndex) => {
    setSelectedImageIndex(selectedIndex);
  };

  //to download csv file
  const csvData = [["image1", "image2", "image3"], windowImages];

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
                  Image Chart
                </span>
              </div>
            )}

            {showCarousel ? (
              <div>
                <Carousel
                  activeIndex={selectedImageIndex}
                  onSelect={handleCarouselSelect}
                  style={{
                    width: "100%",
                    maxHeight: "100vh",
                    overflow: "hidden",
                  }}
                >
                  {images.map((image, index) => (
                    <Carousel.Item key={index}>
                      <img
                        src={image}
                        alt="Carousel Item"
                        style={{
                          width: "100%",
                          height: "50%",
                          aspectRatio: 9 / 5,
                          objectFit: "cover",
                          objectPosition: "top center",
                        }}
                      />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </div>
            ) : (
              <>
                <div
                  className="grid-container"
                  style={{
                    width: "100%",
                    height:
                      (showThreeColumn && "77%") ||
                      (showFourColumn && "77%") ||
                      "77%",
                    overflow: "hidden",
                  }}
                >
                  <div
                    className="full-image"
                    style={{
                      backgroundImage: `url(${windowImages[0]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(windowImages[0])}
                  />
                  <div
                    className="small-image"
                    style={{
                      backgroundImage: `url(${windowImages[1]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(windowImages[1])}
                  />
                  <div
                    className="small-image"
                    style={{
                      backgroundImage: `url(${windowImages[2]})`,
                      backgroundSize: "cover",
                      backgroundPosition: "top center",
                      cursor: "pointer",
                    }}
                    onClick={() => handleImageClick(windowImages[2])}
                  />
                </div>
                {selectedImage && (
                  <div
                    style={{
                      position: "fixed",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "rgba(10, 10, 10, 0.6)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      zIndex: "40",
                      backdropFilter: "blur(3px)",
                    }}
                    onClick={handleCloseClick}
                  >
                    <img
                      src={selectedImage}
                      alt="Selected Image"
                      style={{
                        maxWidth: "90%",
                        maxHeight: "90%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>
          <div
            className="text-center"
            style={{ marginLeft: (showFourColumn && "5px") || "10px" }}
          >
            {!hideButtons && (
              <ChartButtons
                setShowBarModal={setShowBarModal}
                func={DownlaodChartImage}
                func1={forward}
                func2={backward}
                func3={fullscreen}
                // func4={removedata}
                // func5={adddata}
                data={csvData}
                show={button}
                fullscreen={fullHeight}
                chartId={chartId}
              />
            )}
          </div>
          {/* {showComment &&
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

                    {comment?.show && !comment.mycomment && (
                      <span
                        style={widthmodal.comment}
                        className={`text-dark position-absolute comment-box containeredit-comment`}
                      >
                        <EditCommentModal
                          style={widthmodal.arrow}
                          func={commentclick}
                          index={index}
                          funcretrieve={higherorder}
                          text={comment.mycomment}
                        />
                      </span>
                    )}
                    {comment.show && comment?.mycomment && (
                      <span
                        style={widthmodal.comment}
                        className={`text-dark position-absolute comment-box containeredit-comment`}
                      >
                        <EditCommentModal
                          style={widthmodal.arrow}
                          func={commentclick}
                          index={index}
                          text={comment.mycomment}
                          funcretrieve={higherorder}
                        />
                      </span>
                    )}
                  </div>
                </div>
              );
            })} */}
        </div>
        {show && (
          <CarouselChartFull show={show} setShow={setShow} Chart={ImageChart} />
        )}
      </div>
      <WarningModal smShow={smShow} setSmShow={setSmShow} message={message} />
    </>
  );
}
export default ImageChart;
ImageChart.defaultProps = {
  showtitle: true,
};
