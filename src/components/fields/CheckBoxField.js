import React from "react";

function CheckBoxField(props) {
  const {
    label,
    id,
    extra,
    state,
    disabled,
    value,
    onChange,
  } = props;

  return (
      <div className="form-check checkbox-label">
          <input
              className={`form-check-input`}
              type="checkbox"
              id={id}
              name={id}
              value={value}
              onChange={onChange}
              disabled={disabled}
              checked={value}
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
  );
}

export default CheckBoxField;
