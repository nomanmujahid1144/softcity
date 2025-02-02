import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencilFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

export default function Users() {
  const userRegistered = [
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
    {
      sno: "1",
      fName: "milaiosi",
      lName: "joshgun",
      phone: "9389389348",
      email: "triconv@.com",
      groupNo: "name of template",
      collections: "23",
    },
  ];
  const EditUserDetails = () => {
    console.log("Edit Details");
  };
  const DeleteUserDetails = () => {
    console.log("Edit Details");
  };
  return (
    <div>
      <Card>
        <Card.Header
          style={{
            fontSize: "25px",
            paddingTop: "20px",
          }}
        >
          Users (DashBoard Name)
        </Card.Header>
        <Card.Body style={{ borderRadius: "40px", background: "white" }}>
          <div style={{ textAlign: "start", marginBottom: "20px" }}>
            <span className="header-before">
              User's (Template Name)
            </span>
            <span style={{ marginLeft: "41%" }}>Total Users:390</span>
            <Button
              variant="secondry"
              style={{
                background: "rgb(10 48 90)",
                color: "white",
                border: "solid 0.5px grey",
                borderRadius: "4px",
                margin: "3px",
              }}
            >
              Back To DashBoard
            </Button>
          </div>
          <Table striped bordered>
            <thead>
              <tr
                style={{
                  background: "rgb(10 48 90)",
                  color: "white",
                  border: "grey",
                }}
              >
                <td style={{ width: "5%" }}>S.no.</td>
                <td>First Name</td>
                <td>Last Name</td>
                <td>Phone</td>
                <td>Email</td>
                <td>UserGroup</td>
                <td>Collections</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {userRegistered.map((userRgd, index) => (
                <tr key={index} style={{ border: "solid 1px grey" }}>
                  <td>{userRgd.sno}</td>
                  <td>{userRgd.fName}</td>
                  <td>{userRgd.lName}</td>
                  <td>{userRgd.phone}</td>
                  <td>{userRgd.email}</td>
                  <td>{userRgd.groupNo}</td>
                  <td>{userRgd.collections}</td>
                  <td style={{ textAlign: "end" }}>
                  <button onClick={EditUserDetails} className="border-0 bg-transparent">
                      <BsPencilFill className="fs-5 border-0 " />
                    </button>
                    <button onClick={DeleteUserDetails} className="border-0 bg-transparent">
                      <TiDelete className="fs-3 border-0 text-danger " />
                    </button>                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer style={{ textAlign: "end", background: "none" }}>
          <span style={{ marginRight: "40%" }}>Total:390</span>
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
  );
}

