import React, { useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Context from "../../../Context/DashboardContext";
import ChartButtons from "../../chartButtons/ChartButtons";
import "../container.css";
const ChartFull = ({ show, setShow, Chart }) => {
  const { mode } = useContext(Context);
  return (
    <>
      <Modal
        className="modal-dialog-centered"
        show={show}
        size="lg"
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header
          className={`${mode === "dark-mode" ? "bg-dark text-white" : ""}`}
          closeButton
        >
          <Modal.Title
            id="example-custom-modal-styling-title"
            className="header-before fs-5"
          >
            Chart Title Goes Here
          </Modal.Title>
        </Modal.Header>
        <Modal.Body
          className={`${mode === "dark-mode" ? "bg-dark text-white" : ""} `}
        >
          <Chart
            fullwidth={"100%"}
            showtitle={false}
            button={true}
            fullHeight={window.innerWidth <= 1200 ? 300 : 400}
            chartdark={true}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ChartFull;
