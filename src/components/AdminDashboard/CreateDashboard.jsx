// import { AiOutlineSearch } from 'react-icons/ai'
import React from "react";
import Form from "react-bootstrap/Form";

import CreateCollectionTemplate from "../CollectionTemplate/CreateCollectionTemplate";

import ContainerHeading from "../DataPointscontainer/ContainerHeading";
import AssignedUserTemplate from "../AssignedTemplateTable/AssignedUserTemplate";
import AssignedTo from "./AssignedTo";
import DoughnutChart from "../chart-dashboard/DoughnutChart";
import PaginationRounded from "../pagination/PaginationMui";
import GroupedBarChart from "../chart-dashboard/GroupedBarChart";
import FloatingBarChart from "../chart-dashboard/FloatingBarChart";
import AdminHBarChart from "../admin-site-charts/AdminChart/AdminHBarChart";
import AdminDoughnutChart from "../admin-site-charts/AdminChart/AdminDougnutChart";
import AdminSimpleBarChart from "../admin-site-charts/AdminChart/AdminSimpleBarChart";
import AdminTableChart from "../admin-site-charts/AdminChart/AdminTableChart";
import AdminSteppedLineChart from "../admin-site-charts/AdminChart/AdminSteppedLineChart";
import AdminLineChart from "../admin-site-charts/AdminChart/AdminLineChart";

const CreateDashboard = () => {
  return (
    <>
      <main className=" d-flex flex-column gap-3">
        <div className="">
          <CreateCollectionTemplate
            title={"Create a Dashboard"}
            assign={false}
            create={true}
          />
          <div className="d-flex flex-column border rounded-3 py-4 px-3 mt-4 gap-4 bg-white shadow-sm">
            <div className="row gap-3">
              <div className="col-5 col-md-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 w-49">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="templatename"
                >
                  Dashboard Title
                </label>
                <input
                  class="form-control form-input-height "
                  type="text"
                  id="templatename"
                  placeholder="Dashboard"
                  aria-label="default input example"
                />
              </div>
              <div className="col-5 col-md-5 col-md-5 col-lg-5 col-xl-5 col-xxl-5 w-49">
                <label
                  className="form-label fw-semibold fs-7-5"
                  htmlFor="description"
                >
                  Description
                </label>
                <input
                  class="form-control form-input-height"
                  type="text"
                  id="description"
                  placeholder="Description"
                  aria-label="default input example"
                />
              </div>
            </div>
            <div className="d-flex flex-column gap-2 flex-md-row flex-lg-column flex-xl-column ">
              <h6 className="fs-6 fw-semibold">Assign to User Group</h6>
              <div className=" p-1 d-flex flex-row flex-wrap gap-2 align-items-center bg-gray rounded">
                <AssignedTo title={"Customer Service team"} />
                <AssignedTo title={"Business Development"} />
                <AssignedTo title={"Analytics team"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <ContainerHeading title={"Select Collection template"} />
          <div
            className=" bg-white shadow-sm rounded-3 p-2 d-flex flex-wrap gap-2 pb-3"
            style={{ minHeight: "50vh" }}
          >
            <div>
              <AdminSimpleBarChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminDoughnutChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminTableChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminLineChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminTableChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminSimpleBarChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminDoughnutChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminTableChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminLineChart create={true} fullwidth={"310px"} />
            </div>
            <div>
              <AdminTableChart create={true} fullwidth={"310px"} />
            </div>
          </div>
        </div>
        <div className="py-2 d-flex justify-content-end table-pagination">
          <PaginationRounded />
        </div>
      </main>
    </>
  );
};

export default CreateDashboard;