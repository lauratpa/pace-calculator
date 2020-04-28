import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import useInput from "./useInput.jsx";

const App = () => {
  const [distance, DistanceInput, setDistance] = useInput(
    "Distance",
    "",
    targetVariable === "distance"
  );
  const [paceHours, PaceHoursInput, setPaceHours] = useInput(
    "Hours",
    "",
    targetVariable === "pace"
  );
  const [paceMinutes, PaceMinutesInput, setPaceMinutes] = useInput(
    "Minutes",
    "",
    targetVariable === "pace"
  );
  const [paceSeconds, PaceSecondsInput, setPaceSeconds] = useInput(
    "Seconds",
    "",
    targetVariable === "pace"
  );
  const [time, setTime] = useState("");
  const [targetVariable, setTargetVariable] = useState("time");

  useEffect(() => {
    const pace = paceHours * 60 + paceMinutes + paceSeconds / 60;

    if (targetVariable === "time" && distance > 0 && pace > 0) {
      setTime((distance / 1000) * pace);
    } else if (targetVariable === "distance" && time > 0 && pace > 0) {
      setDistance((time / pace) * 1000);
    } else if (targetVariable === "pace" && time > 0 && distance > 0) {
      const resultPace = time / (distance / 1000);
      const hours = Math.floor(resultPace / 60);
      const minutes = Math.floor(resultPace - hours * 60);
      const seconds = (resultPace - hours * 60 - minutes) * 60;

      setPaceHours(hours);
      setPaceMinutes(minutes);
      setPaceSeconds(seconds);
    }
  }, [distance, paceHours, paceMinutes, paceSeconds, time, targetVariable]);

  return (
    <div id="calculator">
      <label>
        <select
          onChange={(e) => setTargetVariable(e.target.value.toLowerCase())}
          onBlur={(e) => setTargetVariable(e.target.value.toLowerCase())}
        >
          <option>Time</option>
          <option>Distance</option>
          <option>Pace</option>
        </select>
      </label>
      <DistanceInput />
      <PaceHoursInput />
      <PaceMinutesInput />
      <PaceSecondsInput />
      <label>
        Time:
        <input
          type="text"
          value={time}
          disabled={targetVariable === "time"}
          onChange={(e) => {
            setTime(+e.target.value);
          }}
        />
      </label>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
