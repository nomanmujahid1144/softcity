import React from "react";
import Table from "react-bootstrap/Table";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
const PaginationDefault = () => {
  return (
    <div>
      <Card.Footer style={{ textAlign: "end", background: "none" }}>
        <Button
          style={{
            background: "none",
            color: "grey",
            border: "solid 0.5px grey",
            margin: "3px",
            borderRadius: "4px",
            width: "50px",
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
            border: "solid 0.5px grey",
            borderRadius: "4px",
            margin: "3px",
          }}
        >
          1
        </Button>
        <Button
          variant="secondry"
          style={{
            border: "solid 0.5px grey",
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
            border: "solid 0.5px grey",
            borderRadius: "4px",
            margin: "3px",
          }}
        >
          4
        </Button>
        <Button
          variant="secondry"
          style={{
            border: "solid 0.5px grey",
            borderRadius: "4px",
            margin: "3px",
          }}
        >
          ...
        </Button>
        <Button
          variant="secondry"
          style={{
            border: "solid 0.5px grey",
            borderRadius: "4px",
            margin: "3px",
          }}
        >
          20
        </Button>
        <Button
          style={{
            background: "none",
            color: "grey",
            border: "solid 0.5px grey",
            margin: "3px",
            borderRadius: "4px",
            width: "50px",
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
  );
};

export default PaginationDefault;
