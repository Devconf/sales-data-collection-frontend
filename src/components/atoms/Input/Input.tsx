import React from 'react';
import {StyledInput} from './Input.style';
import {InputProps} from './Input.type';

const Input: React.FC<InputProps> = ({
                                         disabled,
                                         readOnly,
                                         type,
                                         placeholder,
                                         value,
                                         onChange,
                                         onPressEnter,
                                         name,
                                         error,
                                         onClick
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
                readOnly={readOnly}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChange}
                onKeyDown={onPress}
                name={name}
                error={error}
                onClick={onClick}
            />
        </>
    );
};

export default Input