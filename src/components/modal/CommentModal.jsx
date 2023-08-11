import React, { useEffect, useState } from "react";
import "./BarChartModal.css";
import { BsArrowRight } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
import $ from "jquery";
import { useRef } from "react";
const CommentModal = ({ index, funcretrieve, close, style }) => {
  const [hidebox, sethidebox] = useState("");

  const { register, handleSubmit } = useForm();
  function commentbox(index) {
    close(index);
  }

  const [show, setShow] = useState(true);
  const onSubmit = (data) => {
    funcretrieve(data, index);
    if (data) {
      setShow(false);
    }
  };
  // Get the position of the element that triggers the comment box
  const modal = useRef();

  // Set the position of the comment box

  return (
    <React.Fragment>
      {show && (
        <div
          className={`${hidebox} border modal-container bg-white shadow edit-comment text-secondary p-3 pb-2 rounded w-100 border position-relative`}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="input-container d-flex flex-column gap-1 ">
              <Modal.Header>
                <Modal.Title
                  id="example-custom-modal-styling-title"
                  className="comment-header"
                >
                  <span className="comment-before"></span> Type in The Box
                </Modal.Title>
                <button
                  className="btn-close close-comment"
                  onClick={() => commentbox(index)}
                ></button>
              </Modal.Header>
              <input
                {...register("Comment", { required: true })}
                type="text"
                className="form-control form-control-sm mt-2 comment-input py-2 border-bottom"
                placeholder="Your Comment"
              />
              <button
                type="submit"
                className="btn btn-resize text-white btn-color btn-sm align-self-end p-2"
              >
                <span className="comment-button">Comment</span>
                <BsArrowRight className="fw-semibold arrow ms-1" />
              </button>
            </div>
            <div style={style} className="pointing-arrow"></div>
          </form>
        </div>
      )}
    </React.Fragment>
  );
};

export default CommentModal;
