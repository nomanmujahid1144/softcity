import React from "react";
import { Col, Row } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import "./singleColDataCollection.css";
import DatePicker from "react-datepicker";
import { Calendar3 } from "react-bootstrap-icons";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import Table from "react-bootstrap/Table";
const SingleColDataCollection = () => {
  return (
    <>
      <Row>
        <Col md={12} className="mb-3">
          <h5 className="header-beforeAdmin text-white">
            Single Column Data Collection
          </h5>
        </Col>

        <Form className="d-flex flex-column gap-4">
          <div className="bg-white rounded-3 p-4">
            <Form.Group className="mb-3">
              <Form.Label className="fs-7 mb2-5 fw-semibold text-secondary">
                Text / Number Field
              </Form.Label>
              <Form.Control placeholder="Enter Collection Title" type="text" />
            </Form.Group>
          </div>
          <div className="bg-white rounded-3 p-4">
            <Form.Group className="mb-3">
              <Form.Label className="fs-7 mb2-5 fw-semibold text-secondary">
                Text Area
              </Form.Label>
              <Form.Control
                className="text-area-Scollection"
                as="textarea"
                rows={4}
                placeholder="Description"
              />
            </Form.Group>
          </div>
          <div className="bg-white  rounded-3 p-4">
            <Form.Group className="mb-3">
              <Form.Label className="fs-7  mb2-5 fw-semibold text-secondary">
                Collection Cycle
              </Form.Label>
              <div className="d-flex flex-wrap gap-2">
                <Form.Check
                  inline
                  label="Hourly"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Daily"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Weekly"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Monthly"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Quarterly"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Bi-Annually"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
                <Form.Check
                  inline
                  label="Yearly"
                  type="radio"
                  id=""
                  className=""
                  name="cycle"
                />
              </div>
            </Form.Group>
          </div>
          <div className="bg-white rounded-3 p-4">
            <Form.Label className="fw-semibold fs-7 mb2-5">
              Checkboxes
            </Form.Label>
            <div className="d-flex flex-wrap gap-2">
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Data Collecters" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Dashboard Viewers" />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Administrators" />
              </Form.Group>
            </div>
          </div>
          <div className="d-flex flex-row gap-5">
            <div className="col bg-white rounded-3 p-4 ">
              <Form.Group className="mb-3" controlId="">
                <Form.Label className="fs-7 mb2-5 fw-semibold text-secondary">
                  Dropdown
                </Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  className="form-control"
                >
                  <option selected disabled hidden>
                    Select
                  </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </div>
            <div className="col bg-white rounded-3 p-4 date-collection">
              <Form.Group className="mb2-5">
                <Form.Label className="fw-semibold mb2-5">Price</Form.Label>
              </Form.Group>
              <div className="d-flex flex-row align-items-center date-container gap-2 ">
                <Calendar3 className="fs-5" />
                <DatePicker closeOnScroll={true} placeholderText="MM/DD/YY" />
              </div>
            </div>
            <div className=" col bg-white  rounded-3 p-4">
              <Form.Group className="mb-3">
                <Form.Label className="fw-semibold mb2-5">Price</Form.Label>
                <InputGroup className="mb-3">
                  <InputGroup.Text
                    id="basic-addon1"
                    className="border-0 bg-theme text-white"
                  >
                    NGN
                  </InputGroup.Text>
                  <Form.Control
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Form.Group>
            </div>
          </div>
          <div className="bg-white rounded-3 p-4">
            <Form.Label className="fw-semibold fs-7 mb-3">
              Multi-column Sheet
            </Form.Label>
            <div>
              <Table className="collection-table-container" bordered striped>
                <tbody className="table-collection">
                  <tr>
                    <td>1</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>4</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>6</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>7</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                  <tr>
                    <td>8</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </Form>
      </Row>
    </>
  );
};

export default SingleColDataCollection;
