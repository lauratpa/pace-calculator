import React from "react";

const useInput = ({ label, value, onChange, disabled }) => {
  return (
    <label>
      {label}:
      <input
        type="text"
        value={value}
        disabled={disabled}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </label>
  );
};

export default useInput;
