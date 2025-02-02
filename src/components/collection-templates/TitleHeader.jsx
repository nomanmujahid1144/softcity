import React, { useState } from "react";
import "./Collection_Templates_Comp.css";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import { BsArrowRight } from "react-icons/bs";
import { useContext } from "react";
import Context from "../../Context/DashboardContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TitleHeader = ({ title, subTitle, assignBtn, createBtn, navigationToLink, filterData }) => {
  const { roles } = useSelector((state) => state.auth);
  const { mode } = useContext(Context);
  const [searchText, setSearchText] = useState("");

  const handleChange = value => {
    setSearchText(value);
    filterData(value)
  };

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

        <div className="d-flex align-items-center justify-content-end ">
          <div className="primary-inputs-search d-flex align-items-center justify-content-end rounded search-bar border-0 bg-white">
            <span className=" px-2">
              <CiSearch className="search-icon" />
            </span>
            {/* <Form.Control placeholder="Search" className="input " /> */}
            <input placeholder="Type to search..."
                  value={searchText}
                  onChange={(e) => handleChange(e.target.value)}
                  type="text"
                  className="input form-control"
              />
          </div>

          <div className="btns-main">
            {createBtn && (
              <Link to={navigationToLink}>
                <button className="btn btn-primary d-flex align-items-center gap-2 btn-darkblue">
                  Create <BsArrowRight />
                </button>
              </Link>
            )}
            {assignBtn && (
              <button className="btn btn-primary d-flex align-items-center gap-2 btn-darkblue ms-3">
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
