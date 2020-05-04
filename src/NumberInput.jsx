import React from "react";
import { DebounceInput } from "react-debounce-input";

const NumberInput = ({ label, value, onChange, disabled }) => {
  return (
    <label>
      {label}:
      <DebounceInput
        type="number"
        value={Math.round(value)}
        disabled={disabled}
        debounceTimeout={300}
        onChange={(e) => {
          onChange(e);
        }}
      />
    </label>
  );
};

export default NumberInput;
