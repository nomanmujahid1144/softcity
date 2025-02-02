import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, XCircleFill } from "react-bootstrap-icons";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
function DataPointsTable() {
  const dataPointsRgd = [
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "1",
      template: "name of template",
      charts: "23",
      datagroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
  ];
  const deleteDataPOints = () => {
    console.log("Deleted Data points");
  };
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Row>
        <Col md={12} className="mb-3">
          <h4>Data Points</h4>
        </Col>
        <Col>
          <Card className="border-0">
            <Card.Body>
              <Row className="align-items-center mb-4">
                <Col md={6}>
                  <Card.Title className="mb-0">
                    User Assigned (Template Name)
                  </Card.Title>
                </Col>
                <Col md={6}>
                  <div className="d-flex align-items-center justify-content-end">
                    <span>Total Users:390</span>
                    <Button className="btn-theme ms-3" type="button">
                      Back to Template
                    </Button>
                  </div>
                </Col>
              </Row>
              <Table striped bordered>
                <thead>
                  <tr style={{ background: "rgb(10 48 90)", color: "white" }}>
                    <th style={{ width: "5%" }}>S no</th>
                    <th>DashBoard Name Here</th>
                    <th>Total Charts</th>
                    <th>Data Group</th>
                    <th>Assigned User Group</th>
                    <th>Collections</th>
                    <th>Created By</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {dataPointsRgd.map((data, index) => (
                    <tr key={index} style={{ border: "solid 1px grey" }}>
                      <td>{data.sno}</td>
                      <td>{data.template}</td>
                      <td>{data.charts}</td>
                      <td>{data.datagroup}</td>
                      <td>{data.assigneduser}</td>
                      <td>{data.collection}</td>
                      <td>{data.created}</td>
                      <td style={{ textAlign: "end" }}>
                        <XCircleFill
                          className="text-danger ms-2"
                          onClick={handleShow}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer className="bg-transparent">
              <div className="d-flex justify-content-between">
                <span>Total 390</span>
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-end mb-0 pagination-sm">
                    <li className="page-item">
                      <Link className="page-link">
                        <ArrowLeft />
                      </Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link">1</Link>
                    </li>
                    <li className="page-item active">
                      <Link className="page-link">2</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link">3</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link">...</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link">20</Link>
                    </li>
                    <li className="page-item">
                      <Link className="page-link">
                        <ArrowRight />
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </Card.Footer>
          </Card>
        </Col>
        <Modal show={show} onHide={handleClose} size="sm" centered>
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <div className="text-center">
              <h5 className="fw-bold">Please confirm your action</h5>
              <hr
                className="mx-auto"
                style={{
                  width: "30px",
                  borderTop: "3px solid #14365d",
                  opacity: "1",
                  borderRadius: "5px",
                }}
              />
            </div>
          </Modal.Body>
          <Modal.Footer className="justify-content-center">
            <Button className="btn-theme" onClick={deleteDataPOints}>
              Remove
            </Button>
            <Button
              variant="secondary"
              className="bg-dark"
              onClick={handleClose}
            >
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </Row>
    </>
  );
}
export default DataPointsTable;
