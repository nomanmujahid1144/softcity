import React, { useEffect, useState } from "react";
import Table_Grid from "../collection-templates/Table_Grid";
import TitleHeader from "../collection-templates/TitleHeader";
import PaginationRounded from "../pagination/PaginationMui";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/createUserSlice";

const AllUsersComp = () => {

  const dispatch = useDispatch();
  const [handleRefresh, setHandleRefresh] = useState(false);
  const [allUsers, setAllUsers] = useState([])
  const { roles } = useSelector((state) => state.auth);

  const { users } = useSelector(
    (state) => state.user
  );

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh)
  };

  useEffect(() => {
    // Dispatch the action to get all users
    dispatch(getAllUsers());
  }, [handleRefresh]);

  useEffect(() => {
    if (users.length > 0) {
      setAllUsers(users);
    }
  }, []);

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
      setAllUsers(users);
    } else {
      const filteredItems = users.filter(item => {
        return item.firstName.toLowerCase().includes(lowercasedValue);
      });
      setAllUsers(filteredItems);
    }
  };

  return (
    <div>
      <div>
        <TitleHeader
          title={"All Users"}
          subTitle={allUsers?.length > 0 ? allUsers?.length : 0}
          assignBtn={false}
          createBtn={roles == null || roles?.createCompanyUser}
          navigationToLink={"/admin/create-user"}
          filterData={filterData}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Table_Grid
          heading1={"SN"}
          heading2={"Full Name"}
          heading3={"Phone"}
          heading4={"Email"}
          heading5={"Country"}
          heading10={"Company Name"}
          heading6={"Create Timestamp"}
          heading7={"Last Updated"}
          heading8={"Created By"}
          heading9={"Action"}
          handleRefresh={handleRefreshfun}
          data={allUsers?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)}
          users={true}
        />
      </div>

      <PaginationRounded
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalItems={allUsers?.length || 0}
        onChangePage={handleChangePage}
      />
    </div>
  );
};

export default AllUsersComp;
