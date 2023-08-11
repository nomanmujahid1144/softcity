import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "./adminRoleManagementContainer.css";
import { BsThreeDots } from "react-icons/bs";
const Admin_Role_table = ({
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9,
}) => {
  const [tabledata, settabledata] = useState([
    {
      no: 1,
      RoleName: "Election Questionnaire",
      AssignedUsers: 23,
    },
    {
      no: 1,
      RoleName: "Election Questionnaire",
      AssignedUsers: 23,
    },
    {
      no: 1,
      RoleName: "Election Questionnaire",
      AssignedUsers: 23,
    },
    {
      no: 1,
      RoleName: "Election Questionnaire",
      AssignedUsers: 23,
    },
  ]);
  return (
    <div>
      <Table
        responsive="sm md lg xl"
        className="mytable admin-table"
        style={{ overflowX: "scroll" }}
      >
        <thead class="tHead table">
          <tr>
            <th>{heading1 ?? "SN"}</th>
            <th>{heading2 ?? "Role Name"}</th>
            <th>{heading3 ?? "Assigned Users"}</th>
            <th>{heading9 ?? "Action"}</th>
          </tr>
        </thead>
        <tbody className="tbody ">
          {tabledata?.map((res, ind) => {
            return (
              <tr key={ind}>
                <td>{ind + 1}</td>
                <td>{res.RoleName}</td>
                <td>{res.AssignedUsers}</td>
                <td>
                  <div class="dropdown dropdown-ul">
                    <button
                      class="btn btn-icon"
                      type="button"
                      id="dropdownMenu2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <BsThreeDots color="#8C8C8C" size={22} />
                    </button>
                    <ul
                      class="dropdown-menu ul-dropdown"
                      aria-labelledby="dropdownMenu2"
                    >
                      <li>
                        <button
                          class="dropdown-item dropdown-menu-buttons"
                          type="button"
                        >
                          View Assigned Users
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item dropdown-menu-buttons"
                          type="button"
                        >
                          Edit Collection Template
                        </button>
                      </li>
                      <li>
                        <button
                          class="dropdown-item dropdown-menu-buttons"
                          type="button"
                        >
                          Delete Collection Template
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Admin_Role_table;
