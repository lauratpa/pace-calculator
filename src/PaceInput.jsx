import React from "react";
import NumberInput from "./NumberInput.jsx";

const PaceNumberInput = ({ value, setValues, disabled }) => {
  const onHoursChange = (e) => {
    setValues("paceHours", +e.target.value);
  };
  const onMinutesChange = (e) => {
    setValues("paceMinutes", +e.target.value);
  };
  const onSecondsChange = (e) => {
    setValues("paceSeconds", +e.target.value);
  };

  const hours = Math.floor(value / 60);
  const minutes = Math.floor(value - hours * 60);
  const seconds = (value - hours * 60 - minutes) * 60;

  return (
    <div>
      Pace:
      <NumberInput
        label="Hours"
        value={hours}
        onChange={onHoursChange}
        disabled={disabled}
      />
      <NumberInput
        label="Minutes"
        value={minutes}
        onChange={onMinutesChange}
        disabled={disabled}
      />
      <NumberInput
        label="Seconds"
        value={seconds}
        onChange={onSecondsChange}
        disabled={disabled}
      />
    </div>
  );
};

export default PaceNumberInput;
