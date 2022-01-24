import { useState, useCallback, ChangeEvent } from 'react';

type onChangType = (e: ChangeEvent<HTMLSelectElement>) => void;
type useInputType = (
  initialState: string,
) => [string, onChangType];

export const useSelect: useInputType = (
    initialState: string,
) => {
  const [select, setSelect] = useState(initialState);

  const onChange = useCallback((e) => {
    setSelect(e.target.value);
  }, []);
  return [select, onChange];
};