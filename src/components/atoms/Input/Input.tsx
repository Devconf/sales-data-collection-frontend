import React from 'react';
import { StyledInput } from './Input.style';
import { InputProps } from './Input.type';

const Input: React.FC<InputProps> = ({
  disabled,
  type,
  placeholder,
  value,
  onChange,
  onPressEnter,
  name,
  error,
}) => {
  const onPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter' && onPressEnter) {
      onPressEnter();
    }
  };
  return (
    <>
      <StyledInput
        disabled={disabled}
        placeholder={placeholder}
        type={type}
        value={value}
        onChange={onChange}
        onKeyDown={onPress}
        name={name}
        error={error}
      />
    </>
  );
};

export default Input;