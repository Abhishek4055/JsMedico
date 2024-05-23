import React from "react";

function Input({
  id,
  label,
  value,
  onChange,
  type,
  placeholder,
  name,
  error,
  onBlur,
  disabled,
  formConstainerStyle,
  inputFileldStyle,
  labelStyle,
}) {
  return (
    <div className={formConstainerStyle}>
      <label className={labelStyle} htmlFor={id}>
        {label}
      </label>
      <input
        className={inputFileldStyle}
        id={id}
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange(e)}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
      />
      {error}
    </div>
  );
}

export default Input;
