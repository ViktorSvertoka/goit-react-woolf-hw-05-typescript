import React, { useCallback, useState } from 'react';

export function FormComponent() {
  const [value, setValue] = useState('');

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setValue(event.target.value);
    },
    [],
  );

  return <input type="text" value={value} onChange={handleChange} />;
}
