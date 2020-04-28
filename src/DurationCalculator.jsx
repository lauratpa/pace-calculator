import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput.jsx";

const App = () => {
  const [distance, DistanceInput] = useInput("Distance", "", false);
  const [paceHours, PaceHoursInput] = useInput("Hours", "", false);
  const [paceMinutes, PaceMinutesInput] = useInput("Minutes", "", false);
  const [paceSeconds, PaceSecondsInput] = useInput("Seconds", "", false);
  const [, DurationInput, setDuration] = useInput("Duration", "", false);

  useEffect(() => {
    const pace = paceHours * 60 + paceMinutes + paceSeconds / 60;
    setDuration((distance / 1000) * pace);
  }, []);

  return (
    <div>
      <DistanceInput />
      <PaceHoursInput />
      <PaceMinutesInput />
      <PaceSecondsInput />
      <DurationInput />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
