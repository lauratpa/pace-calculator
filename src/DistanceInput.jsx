import React from "react";
import UseInput from "./useInput.jsx";

const DistanceInput = ({ value, setValues, disabled }) => {
  const onChange = (e) => {
    setValues("distance", +e.target.value);
  };

  return (
    <div>
      <UseInput
        label="Distance"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
};

export default DistanceInput;
