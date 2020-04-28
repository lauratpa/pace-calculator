import React, { useState } from "react";
import ReactDOM from "react-dom";
import DistanceCalculator from "./DistanceCalculator.jsx";

const App = () => {
  const [targetVariable, setTargetVariable] = useState("duration");

  return (
    <div id="calculator">
      <label>
        <select
          onChange={(e) => setTargetVariable(e.target.value.toLowerCase())}
          onBlur={(e) => setTargetVariable(e.target.value.toLowerCase())}
        >
          <option>Duration</option>
          <option>Distance</option>
        </select>
      </label>
      <DistanceCalculator />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
