import React, { useEffect, useState } from "react";
import UseInput from "./useInput.jsx";

const DistanceCalculator = ({ fields, setFields }) => {
  const [distance, setDistance] = useState("here");

  const DistanceInput = (
    <UseInput
      label="Distance"
      field="distance"
      value={distance}
      updateValues={() => {}}
      disabled={true}
    />
  );
  const DurationInput = (
    <UseInput
      label="Duration"
      field="duration"
      value={fields.duration}
      updateValues={setFields}
      disabled={false}
    />
  );
  const PaceHoursInput = (
    <UseInput
      label="Hours"
      field="paceHours"
      value={fields.paceHours}
      updateValues={setFields}
      disabled={false}
    />
  );
  const PaceMinutesInput = (
    <UseInput
      label="Minutes"
      field="paceMinutes"
      value={fields.paceMinutes}
      updateValues={setFields}
      disabled={false}
    />
  );
  const PaceSecondsInput = (
    <UseInput
      label="Seconds"
      field="paceSeconds"
      value={fields.paceSeconds}
      updateValues={setFields}
      disabled={false}
    />
  );

  useEffect(() => {
    const pace =
      fields.paceHours * 60 + fields.paceMinutes + fields.paceSeconds / 60;

    if (fields.duration > 0 && pace > 0) {
      setDistance((fields.duration / pace) * 1000);
    }
  }, [fields, setFields]);

  return (
    <div>
      {DistanceInput}
      {DurationInput}
      {PaceHoursInput}
      {PaceMinutesInput}
      {PaceSecondsInput}
    </div>
  );
};

export default DistanceCalculator;
