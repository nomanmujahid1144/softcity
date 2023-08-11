import React from "react";
import "./Collection_Templates_Comp.css";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import Context from "../../Context/DashboardContext";

const TitleHeader = ({ title, subTitle, assignBtn }) => {
  const { mode } = useContext(Context);
  return (
    <div>
      <div
        className="create-data-pointheader d-flex justify-content-between flex-grow-1"
        style={{ width: "100%" }}
      >
        <div
          className={`d-flex justify-content-start align-items-center flex-wrap ${
            mode === "dark-mode" && "text-white"
          } `}
        >
          <div className="d-flex">
            <div className="data-point-heading header-beforeAdmin">{title}</div>
          </div>
          <div className="total-head">Total: {subTitle}</div>
        </div>

        <div className="d-flex align-items-center justify-content-end flex-wrap ">
          <div className="primary-inputs-search d-flex align-items-center justify-content-end rounded search-bar border-0 bg-white">
            <span className=" px-2">
              <CiSearch className="search-icon" />
            </span>
            <Form.Control placeholder="Search" className="input " />
          </div>

          <div className="btns-main">
            <button className="btn btn-primary btn-darkblue">
              Create <BsArrowRight />
            </button>

            {assignBtn && (
              <button className="btn btn-primary  btn-darkblue ms-3">
                Assign <BsArrowRight />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleHeader;
