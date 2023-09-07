import React, { useEffect } from "react";
import Table_Grid from "../collection-templates/Table_Grid";
import TitleHeader from "../collection-templates/TitleHeader";
import PaginationDefault from "../pagination/PaginationDefault";
import PaginationRounded from "../pagination/PaginationMui";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/createUserSlice";

const AllUsersComp = () => {

  const dispatch = useDispatch();

  const { users } = useSelector(
    (state) => state.users
  );

  useEffect(() => {
    dispatch(getAllUsers());
  },[])

  return (
    <div>
      <div>
        <TitleHeader title={"All Users"} subTitle={390} assignBtn={false} />
      </div>
      {console.log(users.data, 'USERS')}
      <div style={{ marginTop: "30px" }}>
        <Table_Grid
          heading1={"SN"}
          heading2={"Full Name"}
          heading3={"Phone"}
          heading4={"Email"}
          heading5={"User Group Type"}
          heading6={"Create Timestamp"}
          heading7={"Last Updated"}
          heading8={"Created By"}
          heading9={"Action"}
          data={users?.data?.length > 0 ? users?.data : []}
          users={true}
        />
      </div>

      <div className="py-2 table-pagination d-flex justify-content-end">
        <PaginationRounded />
      </div>
    </div>
  );
};

export default AllUsersComp;
