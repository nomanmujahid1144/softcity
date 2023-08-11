import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
const Inputs = (props) => {
  const { register } = useFormContext();
  const [checked, setchecked] = useState(false);
  return (
    <>
      <div>
        <label htmlFor="DataPointname" className="form-label form-text">
          Data Point name
        </label>
        <input
          {...register(`dataPoint.${props.index}`)}
          autofocus="true"
          // value={props.res.dataPointName}
          // onChange={(event) => handleFormChange(props.index, event)}
          placeholder="Data point name"
          type="text"
          className="form-control form-placeholder inputs-data"
          id="DataPointname"
          name={`dataPoint.${props.index}`}
          aria-describedby="Data-Point-name"
        />
        <div className="mb-2 form-check mt-4">
          <label className="form-check-label check-label" htmlFor="check">
            Description
          </label>
          <input
            // {...register(`description-Check ${props.index + 1}`)}
            // onChange={(event) => handleFormChange(props.index, event)}
            type="checkbox"
            onChange={(e) => {
              setchecked(!checked);
              // setValue(`des-Check${props.index + 1}`, e.target.value);
            }}
            name={`des-Check${props.index + 1}`}
            className="form-check-input "
            id="check"
            // checked={checked}
          />
        </div>
        <textarea
          {...register(`${checked && `Description.${props.index}`}`)}
          // disabled={!checked}
          // onChange={tte!xt}
          // onChange={(event) => handleFormChange(props.index, event)}
          // value={props.res.description}
          // onChange={(e) => {
          //   checked &&
          //     setValue(`Description-${props.index + 1}`, e.target.value);
          // }}
          className="text-area form-control mb-3"
          name={`Description.${props.index}`}
          id="dropdown"
          cols="40"
          rows="3"
          minLength="5"
          maxLength="30"
          placeholder="Description"
        ></textarea>
      </div>
    </>
  );
};

export default Inputs;
