import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const DistanceCalculator = ({ fields, setFields }) => {
  const [distance, setDistance] = useState("here");

  useEffect(() => {
    const pace =
      fields.paceHours * 60 + fields.paceMinutes + fields.paceSeconds / 60;

    if (fields.duration > 0 && pace > 0) {
      setDistance((fields.duration / pace) * 1000);
    }
  }, [fields, setFields]);

  return (
    <div>
      <DistanceInput
        value={distance}
        updateValues={setFields}
        disabled={true}
      />
      <DurationInput
        value={fields.duration}
        updateValues={setFields}
        disabled={false}
      />
      <PaceInput
        value={fields.paceMinutes}
        updateValues={setFields}
        disabled={false}
      />
    </div>
  );
};

export default DistanceCalculator;
