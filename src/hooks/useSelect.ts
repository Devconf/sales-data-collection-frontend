import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: ChangeEvent<HTMLSelectElement>) => void;
type useInputType = (
  initialState: string,
) => [string, onChangeType];

export const useSelect: useInputType = (
    initialState: string,
) => {
  const [select, setSelect] = useState(initialState);

  const onChange = useCallback((e) => {
    setSelect(e.target.value);
  }, []);
  return [select, onChange];
};