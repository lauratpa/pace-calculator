import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const DurationCalculator = ({ fields, setFields }) => {
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (fields.distance > 0 && fields.pace > 0) {
      setDuration((fields.distance / 1000) * fields.pace);
    }
  }, [setDuration, fields]);

  return (
    <div>
      <DistanceInput
        value={fields.distance}
        setValues={setFields}
        disabled={false}
      />
      <DurationInput value={duration} setValues={setFields} disabled={true} />
      <PaceInput value={fields.pace} setValues={setFields} disabled={false} />
    </div>
  );
};

export default DurationCalculator;
