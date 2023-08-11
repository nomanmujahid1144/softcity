import React from "react";
import "../chart-dashboard/container.css";
const Spinner = () => {
  return (
    <>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  );
};

export default Spinner;
