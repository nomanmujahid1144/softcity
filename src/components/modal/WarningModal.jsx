import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Context from "../../Context/DashboardContext";
import { IoMdAlert } from "react-icons/io";
function WarningModal({ smShow, setSmShow, message }) {
  const { mode } = useContext(Context);
  return (
    <>
      <Modal
        show={smShow}
        onHide={() => setSmShow(false)}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header
          closeButton
          className={`${mode === "dark-mode" ? "bg-dark text-white" : ""}`}
        >
          <Modal.Title className="d-flex align-items-center fs-4">
            <IoMdAlert
              className={`${
                mode === "dark-mode" ? "text-warning" : "text-danger"
              } fs-2 me-2`}
            />
            NO MORE DATA
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`${mode === "dark-mode" ? "bg-dark text-white" : ""} `}
        >
          {message}
        </Modal.Body>
        <Modal.Footer
          className={`${
            mode === "dark-mode" ? "bg-dark text-white" : ""
          } border-0`}
        >
          <Button
            className="rounded-3"
            variant="secondary"
            onClick={() => setSmShow(false)}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default WarningModal;
