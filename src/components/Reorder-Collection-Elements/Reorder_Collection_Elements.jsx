import React from "react";
import "./reorder-collection.css";
import CustomTextField from "./CustomTextField/CustomTextField";
import CustomRadioCheckBtns from "./CustomRadioCheckBtns";

const Reorder_Collection_Elements = () => {
  return (
    <div className="row">
      <div class="mb-3 col-md-12"><h5 class="header-beforeAdmin text-white">Re-order your collection elements</h5></div>
      <div className="main-container-div mb-4 px-3 mx-2">
        <div className="my-3">
          <CustomTextField textField textFieldTitle={"1. Data Point name"} />
        </div>
        <div className="my-3">
          <CustomTextField textDescField descFieldTitle="2. Data Point name" />
        </div>

        <div>
          <CustomRadioCheckBtns radioBtn radioBtnTitle={" 3. Data Points Name"} />
        </div>
        <div className="my-3">
          <CustomRadioCheckBtns checkBox checkBoxTitle={"4. Data Points Name"} />
        </div>
        <div className="my-3">
          <CustomTextField selectField selectFieldTitle="5. Data Point name" />
        </div>

        {/*  */}
        <div className="my-3">
          <CustomTextField textField textFieldTitle={"6. Data Point name"} />
        </div>
        <div className="my-3">
          <CustomTextField textDescField descFieldTitle="7. Data Point name" />
        </div>

        <div>
          <CustomRadioCheckBtns radioBtn radioBtnTitle={" 8. Data Points Name"} />
        </div>
        <div className="my-3">
          <CustomRadioCheckBtns checkBox checkBoxTitle={"9. Data Points Name"} />
        </div>
        <div className="my-3">
          <CustomTextField selectField selectFieldTitle="10. Data Point name" />
        </div>
      </div>
    </div>
  
  );
};

export default Reorder_Collection_Elements;
