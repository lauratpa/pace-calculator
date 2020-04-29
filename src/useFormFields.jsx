import { useState } from "react";

const useFormFields = (initialState) => {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (key, value) {
      setValues({
        ...fields,
        [key]: value,
      });
    },
  ];
};

export default useFormFields;
