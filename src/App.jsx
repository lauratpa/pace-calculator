import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

const App = () => {
  const [distance, setDistance] = useState("");
  const [paceHours, setPaceHours] = useState("");
  const [paceMinutes, setPaceMinutes] = useState("");
  const [paceSeconds, setPaceSeconds] = useState("");
  const [time, setTime] = useState("");
  const [targetVariable, setTargetVariable] = useState("time");

  useEffect(() => {
    const pace = paceHours * 60 + paceMinutes + paceSeconds / 60;

    if (targetVariable === "time" && distance && pace) {
      setTime((distance / 1000) * pace);
    } else if (targetVariable === "distance" && time && pace) {
      setDistance((time / pace) * 1000);
    } else if (targetVariable === "pace" && time && distance) {
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
      <label>
        Distance:
        <input
          type="text"
          value={distance}
          disabled={targetVariable === "distance"}
          onChange={(e) => {
            setDistance(+e.target.value);
          }}
        />
        m
      </label>
      <label>
        Pace: Hours
        <input
          type="text"
          value={paceHours}
          disabled={targetVariable === "pace"}
          onChange={(e) => {
            setPaceHours(+e.target.value);
          }}
        />
        Minutes
        <input
          type="text"
          value={paceMinutes}
          disabled={targetVariable === "pace"}
          onChange={(e) => {
            setPaceMinutes(+e.target.value);
          }}
        />
        Seconds
        <input
          type="text"
          value={paceSeconds}
          disabled={targetVariable === "pace"}
          onChange={(e) => {
            setPaceSeconds(+e.target.value);
          }}
        />
        min/km
      </label>
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
        min
      </label>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
