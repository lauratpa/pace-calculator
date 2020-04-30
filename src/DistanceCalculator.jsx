import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const DistanceCalculator = ({ fields, setFields }) => {
  const [distance, setDistance] = useState(0);
  const displayDistance = `${distance.toLocaleString()}`;

  useEffect(() => {
    const pace =
      fields.paceHours * 60 + fields.paceMinutes + fields.paceSeconds / 60;

    const duration =
      fields.durationHours * 60 +
      fields.durationMinutes +
      fields.durationSeconds / 60;

    if (duration > 0 && pace > 0) {
      setDistance((duration / pace) * 1000);
    }
  }, [fields, setFields]);

  return (
    <div>
      <DistanceInput
        value={displayDistance}
        setValues={setFields}
        disabled={true}
      />
      <DurationInput
        value={fields.durationMinutes}
        setValues={setFields}
        disabled={false}
      />
      <PaceInput
        value={fields.paceMinutes}
        setValues={setFields}
        disabled={false}
      />
    </div>
  );
};

export default DistanceCalculator;
