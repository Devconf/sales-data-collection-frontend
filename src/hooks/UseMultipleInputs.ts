import { useState, useCallback, ChangeEvent } from 'react';

type onChangeType = (e: ChangeEvent<HTMLInputElement>) => void;
type onResetType = () => void;
type useInputType = (
  initialState: Record<string, string>,
) => [Record<string, string>, onChangeType, onResetType];

export const useMultipleInputs: useInputType = (
  initialForm: Record<string, string>,
) => {
  const [form, setForm] = useState(initialForm);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initialForm), [initialForm]);
  return [form, onChange, reset];
};