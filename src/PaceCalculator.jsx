import React, { useEffect, useState } from "react";
import DistanceInput from "./DistanceInput.jsx";
import DurationInput from "./DurationInput.jsx";
import PaceInput from "./PaceInput.jsx";

const PaceCalculator = ({ fields, setFields }) => {
  const [pace, setPace] = useState("0");

  useEffect(() => {
    if (fields.duration > 0 && fields.distance > 0) {
      setPace(fields.duration / (fields.distance / 1000));
    }
  }, [fields, setFields]);

  return (
    <div>
      <DistanceInput
        value={fields.distance}
        setValues={setFields}
        disabled={false}
      />
      <DurationInput
        value={fields.duration}
        setValues={setFields}
        disabled={false}
      />
      <PaceInput value={pace} setValues={setFields} disabled={true} />
    </div>
  );
};

export default PaceCalculator;
