import React from 'react';

export interface ButtonProps extends React.HTMLProps<HTMLButtonElement>{
    children: React.ReactNode;
    disabled?: boolean;
    danger?: boolean;
    rect?: boolean;
    secondary?: boolean;
    gray?: boolean;
    onClick?: () => void;
}