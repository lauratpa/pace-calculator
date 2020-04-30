import React from "react";
import NumberInput from "./NumberInput.jsx";

const DistanceNumberInput = ({ value, setValues, disabled }) => {
  const onChange = (e) => {
    setValues("distance", +e.target.value);
  };

  return (
    <div>
      <NumberInput
        label="Distance"
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      meters
    </div>
  );
};

export default DistanceNumberInput;
