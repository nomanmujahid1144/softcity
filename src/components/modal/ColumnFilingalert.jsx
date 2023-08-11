import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsArrowRight } from "react-icons/bs";
import { BsArrowLeft } from "react-icons/bs";
import "./BarChartModal.css";
export default function ColumnFilingalert() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="d-flex flex-column align-items-center">
            <h6 className="fs-7">You have added multi-column data point</h6>
            <h5 className="modal-title">Will you like to prefil a column</h5>
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center border-0">
          <Button className="px-4" variant="secondary" onClick={handleClose}>
            Yes <BsArrowRight />
          </Button>
          <Button className="px-4" variant="primary" onClick={handleClose}>
            No <BsArrowRight />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
