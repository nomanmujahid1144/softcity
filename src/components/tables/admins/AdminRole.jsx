import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsPencilFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

export default function AdminRole() {
  const AdminRoleList = [
    {
      sno: "1",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "2",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "3",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "4",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "5",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "6",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "7",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "8",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "9",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
    {
      sno: "10",
      admintemp: "name of template",
      functions: "23",
      assignedto: "12",
    },
  ];
  const EditAdminRole = () => {
    console.log("Edited Admin Role");
  };
  const DeleteAdminRole = () => {
    console.log("Deleted Admin Role");
  };
  const CreateRole = () => {
    console.log("Create Admin Role");
  };
  const ResetTheRole = () => {
    console.log("Reset The Role");
  };
  return (
    <div style={{ height: "auto" }} className="bg-light">
      <Card.Header
          className="bg-light"
        style={{
          fontSize: "1.7rem",
          padding: ".5rem",
          background: "white",
        }}
      >
        Admin Role Managment
        <span style={{ marginLeft: "44rem", fontSize: ".8rem" }}>
          Total Users : 390
        </span>
      </Card.Header>
      <div
        className="mainAdminDiv d-flex gap-2 "
        style={{ display: "flex", flexWrap: "",justifyContent:"center" }}
      >
        <div className="tableOfAdmin d-flex bg-light">
          <Card>
            <Card.Body style={{ borderRadius: "40px", height: "auto",width:"37rem" }}>
              <Table striped bordered>
                <thead>
                  <tr
                    style={{
                      background: "rgb(10 48 90)",
                      color: "white",
                      border: "grey",
                      fontStyle: "normal",
                    }}
                  >
                    <td style={{ width: "9%" }}>S.no.</td>
                    <td>Admin Template</td>
                    <td>Functions</td>
                    <td>Assigned To</td>
                    <td>Actions</td>
                  </tr>
                </thead>
                <tbody>
                  {AdminRoleList.map((adminRole, index) => (
                    <tr key={index} style={{ border: "solid 1px grey" }}>
                      <td style={{textAlign:"center"}}>{adminRole.sno}</td>
                      <td>{adminRole.admintemp}</td>
                      <td>{adminRole.functions}</td>
                      <td>{adminRole.assignedto}</td>
                      <td style={{ textAlign: "start" }}>
                        <button
                          onClick={EditAdminRole}
                          className="border-0 bg-transparent"
                        >
                          <BsPencilFill className="fs-5 border-0 " />
                        </button>
                        <button
                          onClick={DeleteAdminRole}
                          className="border-0 bg-transparent"
                        >
                          <TiDelete className="fs-3 border-0 text-danger " />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Card.Body>
            <Card.Footer style={{ textAlign: "end", background: "none" }}>
              <Button
                style={{
                  background: "none",
                  color: "black",
                  border: "solid 0.5px #dee2e6",
                  margin: "3px",
                  borderRadius: "4px",
                  width: "70px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                  />
                </svg>
              </Button>
              <Button
                variant="secondry"
                style={{
                  background: "rgb(10 48 90)",
                  color: "white",
                  border: "solid 0.5px grey",
                  borderRadius: "4px",
                }}
              >
                3
              </Button>
              <Button
                style={{
                  background: "none",
                  color: "black",
                  border: "solid 0.5px #dee2e6",
                  margin: "3px",
                  borderRadius: "4px",
                  width: "70px",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Button>
            </Card.Footer>
          </Card>
        </div>
        <div
          className="createRole"
          style={{
            display: "flex",
            width: "37rem",
            background: "white",
            height: "auto",
          }}
        >
          <Card>
            <div className="d-flex ml-5 ms-3">
              <div className="header-before ms-4" style={{ margin: "20px" }}>
                Create Role
              </div>
            </div>
            <span
              style={{ fontSize: "16px", paddingLeft: "15px" }}
              className="headingOfName"
            >
              Data Point Name
            </span>
            <div className="dataPointName">
              <input
                type="text"
                className="form-control"
                placeholder="Data Point Name"
                aria-label="Username"
                aria-describedby="basic-addon1"
                id="input Name"
                style={{
                  width: "65%",
                  background: "rgb(248 246 246)",
                  border: "grey",
                  padding: "17px",
                  margin: "9px",
                  fontSize: "12px",
                }}
              />
            </div>
            <div className="checkBoxes">
              <Form style={{ margin: "10px", fontSize: "13px" }}>
                {["checkbox"].map((type) => (
                  <div key={`inline-${type}`} className="mb-3">
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Data Collectors"
                      name="group1"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create Data Points "
                      name="group2"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group3"
                      label="Delete Data Points"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create Data Template"
                      name="group4"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Edit Delete Template"
                      name="group5"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group6"
                      label="Create Charts"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="View Dashboard"
                      name="group7"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Assign Dashboards"
                      name="group8"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group9"
                      label="View User Groups"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Edit User Group"
                      name="group10"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create User"
                      name="group11"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group12"
                      label="View Admins"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Suspend/Delete Admin"
                      name="group13"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create Roles"
                      name="group14"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group15"
                      label="View Approval Trials"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="View Activity Log"
                      name="group16"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Dashboard Views"
                      name="group17"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group18"
                      label="View Data Points"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="View Data Template"
                      name="group19"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Assign Data Template"
                      name="group20"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group21"
                      label="View Charts"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Delete Charts"
                      name="group22"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create Dashboards"
                      name="group23"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group24"
                      label="Edit/Delete Dashboard"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create User Groups"
                      name="group25"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="View Users"
                      name="group26"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group27"
                      label="Suspend/Delete User"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="Create Admin"
                      name="group28"
                      type={type}
                      id={`inline-${type}-1`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      label="View Roles"
                      name="group29"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%", margin: "5px" }}
                      name="group30"
                      label="Manage Roles"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "36%" }}
                      label="View Authentication Log"
                      name="group31"
                      type={type}
                      id={`inline-${type}-2`}
                    />
                    <Form.Check
                      inline
                      style={{ width: "30%" }}
                      name="group32"
                      label="View Session Log"
                      type={type}
                      id={`inline-${type}-3`}
                    />
                  </div>
                ))}
              </Form>
            </div>
            <div className="buttons" style={{ textAlign: "end" }}>
              <Button
                onClick={CreateRole}
                variant="secondry"
                style={{
                  background: "rgb(10 48 90)",
                  color: "white",
                  border: "solid 0.5px #dee2e6",
                  borderRadius: "4px",
                  marginRight: "27px",
                }}
              >
                Create
                <svg
                  style={{ marginLeft: "10px" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </Button>
              <Button
                onClick={ResetTheRole}
                variant="secondry"
                style={{
                  background: "black",
                  color: "white",
                  border: "solid 0.5px ",
                  borderRadius: "4px",
                  marginRight: "19px",
                }}
              >
                Reset
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
