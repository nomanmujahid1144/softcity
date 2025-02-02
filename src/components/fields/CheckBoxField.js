import React from "react";

function CheckBoxField(props) {
  const {
    label,
    id,
    extra,
    style,
    state,
    disabled,
    value,
    checked,
    onChange,
  } = props;

  return (
    <div className={`form-check checkbox-label ${extra}`}>
          <input
              className={`form-check-input`}
              type="checkbox"
              id={id}
              name={id}
              value={value}
              onChange={onChange}
              disabled={disabled}
              checked={checked}
        />
        <label className="form-check-label" style={style} htmlFor={id}>
          {label}
        </label>
      </div>
  );
}

export default CheckBoxField;
