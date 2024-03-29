import React from "react";

function TextAreaField(props) {
  const {
    label,
    id,
    extra,
    rows,
    extraClasses,
    style,
    placeholder,
    state,
    disabled,
    defaultValue,
    required,
    value,
    onChange,
    onInput,
    onKeyDown,
  } = props;

  return (
    <div className={`${extra}`}>
      <label
        htmlFor={id}
        className={`form-label fw-semibold fs-7-5`}
      >
        {label}
      </label>
      <textarea
        disabled={disabled}
        id={id}
        name={id}
        required={required}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        defaultValue={defaultValue}
        onKeyDown={onKeyDown}
        onInput={onInput}
        style={style}
        className={`form-control form-input-height ${extraClasses} ${
          disabled === true
            ? "!border-none !bg-gray-100 dark:!bg-white/5 dark:placeholder:!text-[rgba(255,255,255,0.15)]"
            : state === "error"
            ? "border-red-500 text-red-500 placeholder:text-red-500 dark:!border-red-400 dark:!text-red-400 dark:placeholder:!text-red-400"
            : state === "success"
            ? "border-green-500 text-green-500 placeholder:text-green-500 dark:!border-green-400 dark:!text-green-400 dark:placeholder:!text-green-400"
            : "border-gray-200 dark:!border-white/10 dark:text-white"
        }`}
      ></textarea>
    </div>
  );
}

export default TextAreaField;
