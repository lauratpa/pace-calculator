import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput.jsx";

const App = () => {
  const [distance, DistanceInput] = useInput("Distance", "", false);
  const [, PaceHoursInput, setPaceHours] = useInput("Hours", "", true);
  const [, PaceMinutesInput, setPaceMinutes] = useInput("Minutes", "", true);
  const [, PaceSecondsInput, setPaceSeconds] = useInput("Seconds", "", true);
  const [duration, DurationInput] = useInput("Duration", "", false);

  useEffect(() => {
    const resultPace = duration / (distance / 1000);
    const hours = Math.floor(resultPace / 60);
    const minutes = Math.floor(resultPace - hours * 60);
    const seconds = (resultPace - hours * 60 - minutes) * 60;

    setPaceHours(hours);
    setPaceMinutes(minutes);
    setPaceSeconds(seconds);
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
