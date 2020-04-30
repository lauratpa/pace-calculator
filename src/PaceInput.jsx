import React from "react";
import NumberInput from "./NumberInput.jsx";

const PaceNumberInput = ({ value, setValues, disabled }) => {
  const onHoursChange = (e) => {
    const pace = +e.target.value * 60 + minutes + seconds;
    setValues("pace", pace);
  };
  const onMinutesChange = (e) => {
    const pace = hours + +e.target.value + seconds;
    setValues("pace", pace);
  };
  const onSecondsChange = (e) => {
    const pace = hours + minutes + +e.target.value / 60;
    setValues("pace", pace);
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
