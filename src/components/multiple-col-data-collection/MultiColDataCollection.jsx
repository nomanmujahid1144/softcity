import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import { InputGroup } from "react-bootstrap";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "./MultiColDataCollection.css";

export default function MultiColDataCollection() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="headingOfData" style={{ marginLeft: "25px" }}>
        <h4 className="header-before">Multi-Column Data Collection</h4>
      </div>
      {/* Data Points For Input Fields  */}
      <div className="d-flex  gap-5 mx-2 align-items-center">
        <p className=" primary-btns rounded-2 text-white px-1 py-1">
          DataPoint 1
        </p>
        <Carousel
          interval={null}
          className=" w-75"
          prevIcon={
            <span className="bg-none text-dark">
              <MdKeyboardArrowLeft
                style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
          nextIcon={
            <span className=" bg-none  text-dark">
              <MdKeyboardArrowRight
                style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
        >
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 1
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 2
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 3
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 4
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 5
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 6
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 7
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 8
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 9
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex  gap-5 mx-2 align-items-center">
        <p className=" primary-btns rounded-2 text-white px-1 py-1">
          DataPoint 2
        </p>
        <Carousel
          interval={null}
          className="w-75"
          prevIcon={
            <span className="bg-none text-dark">
              <MdKeyboardArrowLeft
                style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
          nextIcon={
            <span className=" bg-none  text-dark">
              <MdKeyboardArrowRight
                style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
        >
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3 ">
                  Text/Num Field 1
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 2
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 3
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 4
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 5
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 6
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 7
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 8
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 9
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="d-flex  gap-5 mx-2 align-items-center">
        <p className=" primary-btns rounded-2 text-white px-1 py-1">
          DataPoint 3
        </p>
        <Carousel
          interval={null}
          className=" w-75"
          prevIcon={
            <span className="bg-none text-dark">
              <MdKeyboardArrowLeft
                style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
          nextIcon={
            <span className=" bg-none  text-dark">
              <MdKeyboardArrowRight
                style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                className="fs-5 border-0"
              />
            </span>
          }
        >
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 1
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 2
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 3
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 4
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 5
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 6
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
          <Carousel.Item className="">
            <div className="d-flex gap-3">
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 7
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 8
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
              <Form.Group className="mb-3 w-100 d-inline">
                <Form.Label className="fw-semibold mb-3">
                  Text/Num Field 9
                </Form.Label>
                <Form.Control
                  placeholder=""
                  className="p-3 primary-inputs border-0"
                />
              </Form.Group>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <hr />
      {/* TextArea for Input or Description */}
      <div className="textArea">
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p className=" primary-btns rounded-2 text-white px-1 py-1">
            DataPoint 1
          </p>
          <Carousel
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 1
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 2
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 3
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 4
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 5
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 6
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 7
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 8
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 9
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p className=" primary-btns rounded-2 text-white px-1 py-1">
            DataPoint 2
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 1
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 2
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 3
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 4
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 5
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 6
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 7
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 8
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 9
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p className=" primary-btns rounded-2 text-white px-1 py-1">
            DataPoint 3
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 1
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 2
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text Area 3
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 4
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 5
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 6
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 7
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 8
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Text/Num Field 9
                  </Form.Label>
                  <Form.Control
                    style={{ background: "rgb(245 245 245)" }}
                    as="textarea"
                    rows={3}
                  />
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* Radio Buttons for Selecting Groups */}
      <div className="radiobuttons">
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p
            className=" primary-btns rounded-2 text-white px-1 py-1"
            style={{ width: "15%" }}
          >
            Data Group Name Goes Here
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-2">
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 1
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 2
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 3
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 4
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 5
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 1
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 2
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 3
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 4
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 5
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 1
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 2
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 3
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 4
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Data Point 5
                  </Form.Label>
                  {["radio"].map((type) => (
                    <div key={`inline-${type}`} className="mb-2">
                      <Form.Check
                        inline
                        label="Radio1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="Radio2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="Radio3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="Radio4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* checkBoxes for Selecting Data  */}
      <div className="checkBoxes">
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p
            className=" primary-btns rounded-2 text-white px-1 py-1"
            style={{ width: "15%" }}
          >
            Data Group Name Goes Here
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-1">
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 1
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox 1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 2
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    DataPoint 3
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-1">
                    DataPoint 4
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-2 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-1">
                    DataPoint 5
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-7">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 1
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox 1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 2
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 3
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Data Point 4
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Data Point 5
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-7">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 1
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox 1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 2
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 3
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    Data Point 4
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-3">
                    DataPoint 5
                  </Form.Label>
                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="checkbox1"
                        name="group1"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="checkbox2"
                        name="group1"
                        type={type}
                        id={`inline-${type}-2`}
                      />
                      <Form.Check
                        inline
                        label="checkbox3"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="checkbox4"
                        type={type}
                        id={`inline-${type}-4`}
                      />
                    </div>
                  ))}
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* dropdown Lists  */}
      <div className="dropDown">
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p
            className=" primary-btns rounded-2 text-white px-1 py-1"
            style={{ width: "15%" }}
          >
            Data Group Name Goes Here
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 1
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 2
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 3
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 4
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 5
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 6
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 7
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 8
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 9
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* DropdownList For Selecting second inputs */}
      <div className="dropDown2">
        <div className="d-flex  gap-5 mx-2 align-items-center">
          <p
            className=" primary-btns rounded-2 text-white px-1 py-1"
            style={{ width: "15%" }}
          >
            Data Group Name Goes Here
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 1
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 2
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 3
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 4
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 5
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 6
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 7
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 8
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mt-4 custom-form-control w-100">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Dropdown 9
                  </Form.Label>
                  <Form.Select className="p-3 primary-inputs border-0">
                    <option value="" disabled selected></option>
                    <option value="">User Group 1</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* input fields with prefixes */}
      <div className="inputFieldPrefix">
        <div className="d-flex  gap-5 mx-2 align-items-end">
          <p
            className=" primary-btns rounded-2 text-white px-1 py-1"
            style={{ width: "15%" }}
          >
            Data Group Name Goes Here
          </p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-75"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 1
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-sm"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 2
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 3
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 4
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 5
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 6
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 7
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 8
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fw-semibold mb-2">
                    Text/Num Field 9
                  </Form.Label>
                  <InputGroup size="sm">
                    <InputGroup.Text
                      id="inputGroup-sizing-lg"
                      style={{ background: "#14365D", color: "white" }}
                    >
                      NGN
                    </InputGroup.Text>
                    <Form.Control
                      aria-label="Large"
                      aria-describedby="inputGroup-sizing-sm"
                      className="p-3 primary-inputs border-0"
                    />
                  </InputGroup>
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <hr />
      {/* select Date by choosing on calender */}
      <div className="dateInputs">
        <div className="d-flex  gap-5 mx-3 align-items-end">
          <p
            style={{ width: "10%" }}
            className=" light-btns rounded-2 text-white px-1 py-1"
          ></p>
          <Carousel
            activeIndex={index}
            onSelect={handleSelect}
            interval={null}
            className=" w-100"
            prevIcon={
              <span className="bg-none text-dark">
                <MdKeyboardArrowLeft
                  style={{ width: "35px", height: "35px", marginRight: "7rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
            nextIcon={
              <span className=" bg-none  text-dark">
                <MdKeyboardArrowRight
                  style={{ width: "35px", height: "35px", marginLeft: "9rem" }}
                  className="fs-5 border-0"
                />
              </span>
            }
          >
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    DatePoint 1
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    DatePoint 2
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    DatePoint 3
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date Point 4
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date Point 5
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date Point 6
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
              </div>
            </Carousel.Item>
            <Carousel.Item className="">
              <div className="d-flex gap-3">
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date point 7
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date point 8
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
                <Form.Group className="mb-3 w-100 d-inline">
                  <Form.Label className="fs-5 fw-semibold mb-3">
                    Date point 9{" "}
                  </Form.Label>
                  <span className="d-flex align-items-end">
                    {/* <div className='fs-5 border primary-btns text-white rounded-start disabled price-tag'>NGN</div> */}
                    <Form.Control
                      placeholder=""
                      type="date"
                      className="p-3 primary-inputs border-0 rounded-0 rounded-end"
                    />
                  </span>
                </Form.Group>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </div>
  );
}
