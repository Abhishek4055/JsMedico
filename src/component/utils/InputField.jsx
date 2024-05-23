import React from "react";
import "./inputField.css";

function InputField({ value, onchange }) {
  return (
    <div className="input-container">
      <input type="text" name="text" className="input" />
      <label className="label"> Enter Details</label>
    </div>
  );
}

export default InputField;
