import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencilFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

export default function AdminsTable() {
  const adminOdList = [
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
    {
      sno: "1",
      fName: "johnberg",
      lName: "america",
      contact: "09809898909",
      email: "triconv@54.com",
      userRole: "12",
      groupOfUser: "42",
    },
  ];
  const EditAdmin = () => {
    console.log("Edited Admin");
  };
  const DeleteAdmin = () => {
    console.log("Deleted Admin");
  };
  return (
    <pre>
      <Card>
        <div>
          <Card.Header>
            <div className="d-flex ml-5 ms-3">
              <div
                className="header-before ms-4"
                style={{ margin: "5px", fontSize: "17px" }}
              >
                Admins
              </div>
            </div>
          </Card.Header>
          <Card.Body style={{ borderRadius: "40px" }}>
            <Table striped bordered>
              <thead>
                <tr
                  style={{
                    background: "rgb(10 48 90)",
                    color: "white",
                    border: "grey",
                  }}
                >
                  <td style={{ width: "4%" }}>S.no</td>
                  <td>First Name</td>
                  <td>Last Name</td>
                  <td>Phone</td>
                  <td>Email</td>
                  <td style={{ width: "13%" }}>Assign User Role</td>
                  <td>Assigned User Groups</td>
                  <td style={{ width: "13%" }}>Actions</td>
                </tr>
              </thead>
              <tbody>
                {adminOdList.map((admin, index) => (
                  <tr key={index} style={{ border: "solid 1px grey" }}>
                    <td>{admin.sno}</td>
                    <td>{admin.fName}</td>
                    <td>{admin.lName}</td>
                    <td>{admin.contact}</td>
                    <td>{admin.email}</td>
                    <td>{admin.userRole}</td>
                    <td>{admin.groupOfUser}</td>
                    <td style={{ textAlign: "end" }}>
                      <button
                        onClick={EditAdmin}
                        className="border-0 bg-transparent"
                      >
                        <BsPencilFill className="fs-5 border-0 " />
                      </button>
                      <button
                        onClick={DeleteAdmin}
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
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              1
            </Button>
            <Button
              variant="secondry"
              style={{
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              2
            </Button>
            <Button
              variant="secondry"
              style={{
                background: "rgb(10 48 90)",
                color: "white",
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              3
            </Button>
            <Button
              variant="secondry"
              style={{
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              4
            </Button>
            <Button
              variant="secondry"
              style={{
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              ...
            </Button>
            <Button
              variant="secondry"
              style={{
                border: "solid 0.5px #dee2e6",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              20
            </Button>
            <Button
              style={{
                background: "none",
                color: "black",
                border: "solid 1px  #dee2e6",
                margin: "3px",
                borderRadius: "5px",
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
        </div>
      </Card>
    </pre>
  );
}
