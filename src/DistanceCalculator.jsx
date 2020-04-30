import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const DistanceCalculator = ({ fields, setFields }) => {
  const [distance, setDistance] = useState(0);
  const displayDistance = `${distance.toLocaleString()}`;

  useEffect(() => {
    if (fields.duration > 0 && fields.pace > 0) {
      setDistance((fields.duration / fields.pace) * 1000);
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
        value={fields.duration}
        setValues={setFields}
        disabled={false}
      />
      <PaceInput value={fields.pace} setValues={setFields} disabled={false} />
    </div>
  );
};

export default DistanceCalculator;
