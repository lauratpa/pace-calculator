import React, { useEffect } from "react";
import useInput from "./useInput.jsx";

const DistanceCalculator = () => {
  const [, DistanceInput, setDistance] = useInput("Distance", "", true);
  const [paceHours, PaceHoursInput] = useInput("Hours", "", false);
  const [paceMinutes, PaceMinutesInput] = useInput("Minutes", "", false);
  const [paceSeconds, PaceSecondsInput] = useInput("Seconds", "", false);
  const [duration, DurationInput] = useInput("Duration", "", false);

  useEffect(() => {
    const pace = paceHours * 60 + paceMinutes + paceSeconds / 60;

    if (duration > 0 && pace > 0) {
      setDistance((duration / pace) * 1000);
    }
  }, [duration, paceHours, paceMinutes, paceSeconds, setDistance]);

  return (
    <div id="distance-calculator">
      <DistanceInput />
      <PaceHoursInput />
      <PaceMinutesInput />
      <PaceSecondsInput />
      <DurationInput />
    </div>
  );
};

export default DistanceCalculator;
