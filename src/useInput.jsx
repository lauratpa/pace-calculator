import React, { useState } from "react";

const useInput = (label, defaultState, disabled) => {
  const [state, updateState] = useState(defaultState);

  const Input = () => {
    return (
      <label>
        {label}:
        <input
          type="text"
          value={state}
          disabled={disabled}
          onChange={(e) => {
            updateState(+e.target.value);
          }}
        />
      </label>
    );
  };

  return [state, Input, updateState];
};

export default useInput;
