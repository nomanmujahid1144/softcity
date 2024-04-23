import React, { useContext, useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "../../collection-templates/Table-grid.css";
import { BsThreeDots } from "react-icons/bs";
import "../../All-user-groups/Stepper/stepper.css";
import Stepper from "../../All-user-groups/Stepper";
import Context from "../../../Context/DashboardContext";
import PaginationRounded from "../../pagination/PaginationMui";
import TitleHeader from "../../collection-templates/TitleHeader";
import { useDispatch, useSelector } from "react-redux";
import { deleteCompanies, getCompanies } from "../../../redux/slices/Company/createCompanySlice";
import { useNavigate } from "react-router-dom";
import DeleteAlert from "../../alertProceed/DeleteAlert";
import { useAlert } from "react-alert";
const AllCompaniesTable = () => {
  const { createcollectiontemplate } = useContext(Context);
  const { roles } = useSelector((state) => state.auth);

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

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const alert = useAlert();
  
  const [show, setShow] = useState(false);
  const [headingMessage, setHeadingMessage] = useState('');
  const [buttonLabel, setButtonLabel] = useState('');
  const [triggerFunction, setTriggerFunction] = useState('');
  const [deleteId, setDeleteId] = useState(null);
  const [allCompanies, setAllCompanies] = useState([]);
  
  const { companies, loading } = useSelector((state) => state.company);

  useEffect(() => {
    dispatch(getCompanies());
  }, []);

  useEffect(() => {
    setAllCompanies(companies);
  }, []);


  const handleDeleteClick = (id, Message, label, functionTrigger) => {
    setDeleteId(id);
    setHeadingMessage(Message);
    setButtonLabel(label);
    setTriggerFunction(functionTrigger);
    setShow(true);
  }

  const deleteCompany = (id) => {
    let ids = [];
    ids.push(id);
    dispatch(deleteCompanies(ids)).then((response) => {
      if (response?.payload?.success) {
        alert.success('Successfully Delete Company');
        navigate(`/admin/all-companies`);
        setShow(false);
      }
    });
  };

  // Pagination state
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  // Change page function
  const handleChangePage = (event, page) => {
    setCurrentPage(page - 1);
  };

  const filterData = (value) => {
    const lowercasedValue = value.toLowerCase().trim();
    if (lowercasedValue === "") {
      setAllCompanies(companies);
    } else {
      const filteredItems = companies.filter(item => {
        return item.companyName.toLowerCase().includes(lowercasedValue);
      });
      setAllCompanies(filteredItems);
    }
  };

  return (
    <>
      <DeleteAlert
        show={show} setShow={setShow}
        heading={headingMessage}
        deleteButton={buttonLabel}
        id={deleteId}
        getDeleteId={deleteCompany}
      />
      <div className="div">
        <div>
          <TitleHeader
            title={"All Comapny"}
            subTitle={allCompanies?.length > 0 ? allCompanies?.length : 0}
            assignBtn={false}
            createBtn={roles == null || roles?.createCompany}
            navigationToLink={"/admin/create-company"}
            filterData={filterData}
          />
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
            {allCompanies?.length > 0 ? 
              <>
                {allCompanies?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((res, ind) => {
                  return (
                    <>
                      <tr className="first-tr" key={ind}>
                        <td>{ind + 1}</td>
                        <td>{res.companyName}</td>
                        <td>{res.firstName}</td>
                        <td>{res.phoneNumber}</td>
                        <td>{res.email}</td>
                        <td>0</td>
                        <td>{res.createdAt?.split('T')[0]}</td>
                        <td>{res.updatedAt?.split('T')[0]}</td>
                        <td>Admin</td>
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
                              {(roles == null || roles?.updateCompany) && (
                                <li>
                                  <button
                                    class="dropdown-item dropdown-menu-buttons py-2"
                                    type="button"
                                    onClick={(e) => navigate(`/admin/update-company/${res._id}`)}
                                  >
                                    Manage Company Profile
                                  </button>
                                </li>
                              )}
                              {(roles == null || roles?.deleteCompany) && (
                                <li>
                                  <button
                                    class="dropdown-item dropdown-menu-buttons py-2"
                                    type="button"
                                    onClick={() => handleDeleteClick(res._id, "Do you want to Suspend this Company", "Delete", "User")}
                                  >
                                    Suspend Company
                                  </button>
                                </li>
                              )}
                            </ul>
                          </div>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </>
            :null}
          </tbody>
        </Table>
      </div>
      <PaginationRounded
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={allCompanies?.length || 0}
        onChangePage={handleChangePage}
      />
    </>
  );
};

export default AllCompaniesTable;
