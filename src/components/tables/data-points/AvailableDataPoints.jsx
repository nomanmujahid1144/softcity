import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsPencilFill } from "react-icons/bs";
import { TiDelete } from "react-icons/ti";
export default function AvailableDataPoints() {
  const availableDate = [
    {
      sno: "1",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "2",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "3",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "4",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "5",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "6",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
    {
      sno: "7",
      template: "name of template",
      datapoints: "23",
      daatgroup: "122",
      assigneduser: "42542",
      collection: "32",
      created: "mamilaila",
    },
  ];
  const EditAvailableData = () => {
    console.log("Edit Available Data");
  };
  const deleteAvailableData = () => {
    console.log("Delete Available Data");
  };
  return (
    <div>
      <Card>
        <Card.Header
          style={{
            fontSize: "25px",
            paddingTop: "20px",
            boxSizing: "border-box",
          }}
        >
          Data Points 
        </Card.Header>
        <Card.Body style={{ borderRadius: "40px", background: "white" }}>
          <div className="  px-3 ">
            <div
              className="header-before"
              style={{ fontWeight: "400", fontSize: "25px", }}
            >
              Available Data Points
            </div>
            <div
              className="d-flex justify-content-end align-items-center "
              style={{
                widthLeft:"100%",
                height:"20px",
                color: "#8A8F96",
                borderRadius: "5px",
                border: "none",
                fontSize: "12px",
                fontWeight: "800",
                marginTop:"15px"
                
              }}
            >
              Total: 390
              <Button
                variant="secondry"
                style={{
                  background: "rgb(10 48 90)",
                  color: "white",
                  border: "solid 0.5px grey",
                  borderRadius: "4px",
                  margin: "3px",
                  marginTop:"-49px"
                }}
              >
                Create
              </Button>
              <Button
                variant="secondry"
                style={{
                  background: "black",
                  color: "white",
                  border: "solid 0.5px grey",
                  borderRadius: "4px",
                  margin: "3px",
                  marginTop:"-49px"
                }}
              >
                Assign
              </Button>
            </div>
          </div>
          <Table striped bordered>
            <thead>
              <tr style={{ background: "#14365D", color: "white" }}>
                <td style={{ width: "5%" }}>S.no.</td>
                <td>Template Name Here</td>
                <td>Data Points</td>
                <td>Data Group</td>
                <td>Assigned Users</td>
                <td>Collection</td>
                <td>Created By</td>
                <td>Actions</td>
              </tr>
            </thead>
            <tbody>
              {availableDate.map((availData, index) => (
                <tr key={index} style={{ border: "solid 1px grey" }}>
                  <td>{availData.sno}</td>
                  <td>{availData.template}</td>
                  <td>{availData.datapoints}</td>
                  <td>{availData.daatgroup}</td>
                  <td>{availData.assigneduser}</td>
                  <td>{availData.collection}</td>
                  <td>{availData.created}</td>
                  <td style={{ textAlign: "end" }}>
                    <button
                      onClick={EditAvailableData}
                      className="border-0 bg-transparent"
                    >
                      <BsPencilFill
                        className="fs-5 border-0 "
                        style={{ width: "15px", height: "15px" }}
                      />
                    </button>

                    <button
                      onClick={deleteAvailableData}
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
              border: "solid 0.5px grey",
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
              color="black"
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
