import React from "react";
import Table_Grid from "../collection-templates/Table_Grid";
import TitleHeader from "../collection-templates/TitleHeader";
import PaginationDefault from "../pagination/PaginationDefault";
import PaginationRounded from "../pagination/PaginationMui";

const AllUsersComp = () => {
  return (
    <div>
      <div>
        <TitleHeader title={"All Users"} subTitle={390} assignBtn={false} />
      </div>

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
        />
      </div>

      <div className="py-2 table-pagination d-flex justify-content-end">
        <PaginationRounded />
      </div>
    </div>
  );
};

export default AllUsersComp;
