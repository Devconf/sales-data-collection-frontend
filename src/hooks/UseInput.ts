import { ChangeEvent, useCallback, useState } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;
type onResetType = () => void;
type useInputType = (
    initialState: Record<string, string>,
  ) => [Record<string, string>, onChangeType,onResetType];
  
  export const useInput: useInputType = (
      initialState: Record<string, string>,
  ) => {
    const [input, setInput] = useState(initialState);
  
    const onChange = useCallback((e) => {
        const { name, value } = e.target;
        setInput((input) => ({...input, [name]: value}));
    }, []);
    const reset = useCallback(() => setInput(initialState), [initialState]);
  return [input, onChange, reset];
  };