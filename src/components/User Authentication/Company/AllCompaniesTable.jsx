import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../../collection-templates/Table-grid.css";
import { BsThreeDots } from "react-icons/bs";
import "../../All-user-groups/Stepper/stepper.css";
import Stepper from "../../All-user-groups/Stepper";
import Context from "../../../Context/DashboardContext";
import PaginationRounded from "../../pagination/PaginationMui";
import TitleHeader from "../../collection-templates/TitleHeader";
const AllCompaniesTable = () => {
  const { createcollectiontemplate } = useContext(Context);

  const [tabledata, settabledata] = useState([
    {
      no: 1,
      companyName: "Election Questionnaire",
      contactPerson: "Banji Odeyemi",
      phone: "08029292929",
      email: "banjiodeyemi@yahoo.com",
      totalUsers: 12,
      CreateTimestamp: new Date().toLocaleDateString("en-GB"),
      LastUpdated: "15/03/2023",
      CreatedBy: "Adeola Hopewell",
    },
    {
      no: 1,
      companyName: "Election Questionnaire",
      contactPerson: "Banji Odeyemi",
      phone: "08029292929",
      email: "banjiodeyemi@yahoo.com",
      totalUsers: 12,
      CreateTimestamp: new Date().toLocaleDateString("en-GB"),
      LastUpdated: "15/03/2023",
      CreatedBy: "Adeola Hopewell",
    },
    {
      no: 1,
      companyName: "Election Questionnaire",
      contactPerson: "Banji Odeyemi",
      phone: "08029292929",
      email: "banjiodeyemi@yahoo.com",
      totalUsers: 12,
      CreateTimestamp: new Date().toLocaleDateString("en-GB"),
      LastUpdated: "15/03/2023",
      CreatedBy: "Adeola Hopewell",
    },
    {
      no: 1,
      companyName: "Election Questionnaire",
      contactPerson: "Banji Odeyemi",
      phone: "08029292929",
      email: "banjiodeyemi@yahoo.com",
      totalUsers: 12,
      CreateTimestamp: new Date().toLocaleDateString("en-GB"),
      LastUpdated: "15/03/2023",
      CreatedBy: "Adeola Hopewell",
    },
    {
      no: 1,
      companyName: "Election Questionnaire",
      contactPerson: "Banji Odeyemi",
      phone: "08029292929",
      email: "banjiodeyemi@yahoo.com",
      totalUsers: 12,
      CreateTimestamp: new Date().toLocaleDateString("en-GB"),
      LastUpdated: "15/03/2023",
      CreatedBy: "Adeola Hopewell",
    },
  ]);
  // useEffect(() => {
  //   settabledata(createcollectiontemplate);
  // }, []);

  return (
    <>
      <div className="div">
        <div>
          <TitleHeader title={"All Comapny"} subTitle={390} assignBtn={true} />
        </div>
      </div>
      <div className="my-3">
        <Table
          responsive="sm md lg xl"
          className="mytable"
          style={{ overflowX: "scroll" }}
        >
          <thead class="tHead">
            <tr>
              <th>{"SN"}</th>
              <th>{"Company Name"}</th>
              <th>{"Contact Person"}</th>
              <th>{"Phone"}</th>
              <th>{"Email"}</th>
              <th>{"Total Users"}</th>
              <th>{"Create Timestamp"}</th>
              <th>{"Last Updated"}</th>
              <th>{"Created By"}</th>
              <th>{"Action"}</th>
            </tr>
          </thead>
          <tbody className="tbody">
            {tabledata?.map((res, ind) => {
              return (
                <>
                  <tr className="first-tr" key={ind}>
                    <td>{ind + 1}</td>
                    <td>{res.companyName}</td>
                    <td>{res.contactPerson}</td>
                    <td>{res.phone}</td>
                    <td>{res.email}</td>
                    <td>{res.totalUsers}</td>
                    <td>{res.CreateTimestamp}</td>
                    <td>{res.LastUpdated}</td>
                    <td>{res.CreatedBy}</td>
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
                          style={{ width: "13rem" }}
                          class="dropdown-menu ul-dropdown"
                          aria-labelledby="dropdownMenu2"
                        >
                          <li>
                            <button
                              class="dropdown-item dropdown-menu-buttons py-2"
                              type="button"
                            >
                              Launch Company Tenant
                            </button>
                          </li>
                          <li>
                            <button
                              class="dropdown-item dropdown-menu-buttons py-2"
                              type="button"
                            >
                              Manage Company Profile
                            </button>
                          </li>
                          <li>
                            <button
                              class="dropdown-item dropdown-menu-buttons py-2"
                              type="button"
                            >
                              Suspend Company
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
      </div>
      <footer>
        <div className=" d-flex align-items-center justify-content-end ">
          <div className="py-2 table-pagination">
            <PaginationRounded />
          </div>
        </div>
      </footer>
    </>
  );
};

export default AllCompaniesTable;
