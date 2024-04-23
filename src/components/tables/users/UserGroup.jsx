import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencilFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";

export default function UserGroup() {
  const userInList = [
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
    { sno: "1", groupNo: "name of template", collections: "23" },
  ];
  const EditUserGroup = () => {
    console.log("Edit User Group");
  };
  const DeleteUserGroup = () => {
    console.log("Delete User Group");
  };
  return (
    <div className="userGroup">
      <Card>
        <Card.Header
          style={{
            fontSize: "20px",
            paddingTop: "20px",
            boxSizing: "border-box",
          }}
        >
          User Group (DashBoard Name)
        </Card.Header>
        <Card.Body style={{ borderRadius: "40px", background: "white" }}>
          <div style={{ textAlign: "start", marginBottom: "20px" }}>
            <span className="header-before">User Group (Template Name)</span>
            <span style={{ marginLeft: "37%" }}>Total Users:390</span>
            <Button
              variant="secondry"
              style={{
                background: "#14365D",
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
                  background: "#14365D",
                  color: "white",
                  border: "grey",
                  margin:"10px"
                }}
              >
                <td style={{ width: "6%" }}>S no</td>
                <td>Group Of User</td>
                <td>Collections</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {userInList.map((userGrp, index) => (
                <tr key={index} style={{ border: "solid 1px grey" }}>
                  <td>{userGrp.sno}</td>
                  <td>{userGrp.groupNo}</td>
                  <td>{userGrp.collections}</td>
                  <td style={{ textAlign: "end" }}>
                    <button onClick={EditUserGroup} className="border-0 bg-transparent">
                      <BsPencilFill className="fs-5 border-0 " />
                    </button>
                    <button onClick={DeleteUserGroup} className="border-0 bg-transparent">
                      <TiDelete className="fs-3 border-0 text-danger " />
                    </button>
                  </td>
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

