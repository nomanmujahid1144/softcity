import React, { useEffect, useState } from "react";
import Table_Grid from "../collection-templates/Table_Grid";
import TitleHeader from "../collection-templates/TitleHeader";
import PaginationRounded from "../pagination/PaginationMui";
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../redux/slices/createUserSlice";

const AllUsersComp = () => {

  const dispatch = useDispatch();
  const [handleRefresh, setHandleRefresh] = useState(false);

  const { users } = useSelector(
    (state) => state.users
  );

  const handleRefreshfun = () => {
    setHandleRefresh(!handleRefresh)
  };

  useEffect(() => {
    dispatch(getAllUsers());
  },[handleRefresh])

  return (
    <div>
      <div>
        <TitleHeader title={"All Users"} subTitle={users.length > 0 ? users.length : 0} assignBtn={false} />
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
          data={users?.length > 0 ? users : []}
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
