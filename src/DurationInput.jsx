import React from "react";
import UseInput from "./useInput.jsx";

const DurationInput = ({ value, setValues, disabled }) => {
  const onChange = (e) => {
    setValues("duration", +e.target.value);
  };

  return (
    <UseInput
      label="Duration"
      value={value}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default DurationInput;
