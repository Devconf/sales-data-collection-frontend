import React from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    value?: string;
    disabled?: boolean;
    type?: string;
    onPressEnter?: () => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
    error?: string;
}