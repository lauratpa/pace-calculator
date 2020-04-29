import React, { useState } from "react";
import ReactDOM from "react-dom";
import DistanceCalculator from "./DistanceCalculator.jsx";
import DurationCalculator from "./DurationCalculator.jsx";
import PaceCalculator from "./PaceCalculator.jsx";
import useFormFields from "./useFormFields.jsx";

const App = () => {
  const [fields, setFields] = useFormFields({
    duration: "",
    distance: "",
    paceHours: "",
    paceMinutes: "",
    paceSeconds: "",
  });

  const [targetVariable, setTargetVariable] = useState("distance");

  const pickCalculator = () => {
    if (targetVariable === "distance") {
      return <DistanceCalculator fields={fields} setFields={setFields} />;
    } else if (targetVariable === "duration") {
      return <DurationCalculator fields={fields} setFields={setFields} />;
    } else if (targetVariable === "pace") {
      return <PaceCalculator fields={fields} setFields={setFields} />;
    } else {
      null;
    }
  };

  return (
    <div id="calculator">
      <div>{JSON.stringify(fields)}</div>
      <label>
        <select
          onChange={(e) => setTargetVariable(e.target.value.toLowerCase())}
          onBlur={(e) => setTargetVariable(e.target.value.toLowerCase())}
        >
          <option>Distance</option>
          <option>Duration</option>
          <option>Pace</option>
        </select>
      </label>
      {pickCalculator()}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
