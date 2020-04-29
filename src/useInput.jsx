import React from "react";

const useInput = ({ label, field, value, updateValues, disabled }) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => {
          updateValues(field, +e.target.value);
        }}
      />
    </label>
  );
};

export default useInput;
