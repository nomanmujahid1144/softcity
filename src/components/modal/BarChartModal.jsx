import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./BarChartModal.css";

const BarChartModal = () => {
  const data = [
    {
      title: "January",
      value: "62",
    },
    {
      title: "Febuary",
      value: "54",
    },
    {
      title: "March",
      value: "62",
    },
    {
      title: "April",
      value: "54",
    },
    {
      title: "May",
      value: "62",
    },
    {
      title: "June",
      value: "54",
    },
    {
      title: "July",
      value: "62",
    },
    {
      title: "August",
      value: "54",
    },
    {
      title: "September",
      value: "62",
    },
    {
      title: "October",
      value: "54",
    },
    {
      title: "November",
      value: "62",
    },
    {
      title: "December",
      value: "54",
    },
  ];

  return (
    <div className="border border-white scroll1">
      <div style={{ padding: 12 }}>
        <Table bordered hover>
          <tbody>
            {data &&
              data.map((val, ind) => {
                return (
                  <>
                    <tr className="text-secondary">
                      <td className="fs-7" width="60%">
                        {val.title}
                      </td>
                      <td className="fs-7 text-center">{val.value}</td>
                    </tr>
                  </>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default BarChartModal;
