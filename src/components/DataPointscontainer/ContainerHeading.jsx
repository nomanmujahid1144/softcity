import React, { useContext } from "react";
import Context from "../../Context/DashboardContext";
import "./containerheading.css";
import { CiSearch } from "react-icons/ci";
import Form from "react-bootstrap/Form";
import { BsArrowRight } from "react-icons/bs";
const ContainerHeading = ({ title, UserGroup, totalLength }) => {
  const finalData = useContext(Context);
  const { dataForm, mode } = finalData;
  


  return (
    <>
      <div className="Availabledata py-3">
        <div
          className={`${
            mode === "dark-mode" ? "text-white" : "text-dark"
          } d-flex w-100 align-items-center gap-4 flex-column flex-xl-row flex-lg-row flex-md-row`}
        >
          <div className="d-flex align-items-center gap-3">
            <h5 className="header-beforeAdmin fs-5 mb-0">{title}</h5>
            <p className="fs-7 total text-muted">Total: {totalLength}</p>
          </div>
          {UserGroup && (
            <div class="dropdown">
              <button
                className={`btn  dropdown-toggle d-flex align-items-center ${
                  mode === "dark-mode" ? "btn-secondary" : "btn-light"
                }`}
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <span className="fs-7">Filter By User Group</span>
              </button>
              <ul
                class={`dropdown-menu  ${
                  mode === "dark-mode" && "dropdown-menu-dark"
                }`}
              >
                <li>
                  <a class="dropdown-item active" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
                <li>
                  <hr />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Separated link
                  </a>
                </li>
              </ul>
            </div>
          )}
          <div className="d-flex  align-items-center justify-content-end flex-column flex-xl-row flex-lg-row flex-md-row margin-left gap-4 w-50">
            {UserGroup && (
              <button className="m-0 py-2 px-3 btn-darkblue text-white border-0 rounded-2 text-white fw-lighter fs-7">
                Add all Users <BsArrowRight />
              </button>
            )}

            <div className="border bg-white primary-inputs d-flex align-items-center rounded search-bar">
              <span className="px-2">
                <CiSearch className="search-icon" />
              </span>
              <Form.Control
                placeholder="Search"
                className="border-0 input primary-inputs bg-white "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContainerHeading;
