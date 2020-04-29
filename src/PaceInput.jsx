import React from "react";
import UseInput from "./useInput.jsx";

const PaceInput = ({ value, setValues, disabled }) => {
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
      <UseInput
        label="Hours"
        value={hours}
        onChange={onHoursChange}
        disabled={disabled}
      />
      <UseInput
        label="Minutes"
        value={minutes}
        onChange={onMinutesChange}
        disabled={disabled}
      />
      <UseInput
        label="Seconds"
        value={seconds}
        onChange={onSecondsChange}
        disabled={disabled}
      />
    </div>
  );
};

export default PaceInput;
