import React from 'react';

export interface InputProps extends React.HTMLProps<HTMLInputElement> {
    value?: string;
    disabled?: boolean;
    readonly?: boolean;
    type?: string;
    onPressEnter?: () => void;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    onClick?: ()=> void;
    name?: string;
    error?: string;
}