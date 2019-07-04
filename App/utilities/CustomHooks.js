import { useState } from 'react';

export const useForm = initialState => {
  const [values, setValues] = useState(initialState);

  const setValue = key => value =>
    setValues({
      ...values,
      [key]: value,
    });

  return [values, setValue];
};
