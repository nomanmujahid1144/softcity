import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";
const AssignedTo = ({ title }) => {
  const [deletetag, setdeletetag] = useState(true);
  const onclick = function () {
    setdeletetag(false);
  };
  return (
    <>
      {deletetag && (
        <div>
          <p className="bg-lightdark mt-1 d-inline-block p-1 px-2 fs-9 rounded-4 ">
            {title}
            <span style={{ cursor: "pointer" }} className="ms-1 tags-cross">
              <RxCross2 onClick={onclick} />
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default AssignedTo;
