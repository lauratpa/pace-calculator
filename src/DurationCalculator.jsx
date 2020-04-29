import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const DistanceCalculator = ({ fields, setFields }) => {
  const [duration, setDuration] = useState("here");

  useEffect(() => {
    const pace =
      fields.paceHours * 60 + fields.paceMinutes + fields.paceSeconds / 60;

    if (fields.distance > 0 && pace > 0) {
      setDuration((fields.distance / 1000) * pace);
    }
  }, [fields, setFields]);

  return (
    <div>
      <DistanceInput
        value={fields.distance}
        setValues={setFields}
        disabled={false}
      />
      <DurationInput value={duration} setValues={setFields} disabled={true} />
      <PaceInput
        value={fields.paceMinutes}
        setValues={setFields}
        disabled={false}
      />
    </div>
  );
};

export default DistanceCalculator;
