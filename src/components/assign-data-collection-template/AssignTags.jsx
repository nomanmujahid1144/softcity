import React, { useContext, useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import Context from "../../Context/DashboardContext";
const AssignTags = ({ title, index }) => {
  const [deletetag, setdeletetag] = useState(true);
  const { assignedto, setassignedto } = useContext(Context);

  const onclick = function (e) {
    const newassign = assignedto.filter((res, ind) => {
      return ind != index;
    });
    setassignedto(newassign);
  };

  return (
    <>
      <div>
        <p className="bg-lightdark mt-1 d-inline-block p-1 px-2 fs-9 rounded-4 ">
          {title}
          <span style={{ cursor: "pointer" }} className="ms-1 tags-cross">
            <RxCross2 onClick={onclick} />
          </span>
        </p>
      </div>
    </>
  );
};
export default AssignTags;
