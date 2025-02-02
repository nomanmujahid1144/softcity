import React, { useState } from "react";
import "./BarChartModal.css";
import { BsArrowRight } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { useForm } from "react-hook-form";
const EditCommentModal = ({ func, index, text, funcretrieve, style }) => {
  const [show, setShow] = useState(false);

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    funcretrieve(data, index);
    if (data) {
      // func(index);
    }
  };
  return (
    <React.Fragment>
      <div
        className={`bg-white shadow text-secondary padding-custom rounded-3  border position-relative`}
      >
        <form action="" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-container d-flex flex-column gap-1">
            <Modal.Header>
              <Modal.Title
                id="example-custom-modal-styling-title"
                className="comment-heading-view py-1"
              >
                <span className="comment-before"></span>View / Update Comment
              </Modal.Title>
              <button
                type="button"
                role="button"
                className="btn-close"
                onClick={() => func(index)}
              ></button>
            </Modal.Header>

            {show && (
              <input
                {...register("Comment")}
                type="text"
                className="comment-input mt-1 ps-0 border-bottom  pb-1 mb-2 text-primary "
                placeholder="Your Comment"
                autoFocus="true"
                defaultValue={text}
              />
            )}
            {!show && (
              <p className="comment-input comment-texted mt-1 pb-1 mb-1 border-bottom comment-para fs-7 text-muted">
                {text ?? "No Comment"}
              </p>
            )}
            <button
              type="submit"
              onClick={() => setShow(!show)}
              className="btn text-white btn-color btn-sm align-self-end p-2 "
            >
              <span className="comment-button">Update</span>
              <BsArrowRight className="fw-semibold ms-1" />
            </button>
          </div>
          <div style={style} className="pointing-arrow"></div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default EditCommentModal;
