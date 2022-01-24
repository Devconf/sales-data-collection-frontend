import React from 'react';
import { OptionProps } from '../Option/Option.type';

export interface SelectProps extends React.HTMLProps<HTMLSelectElement>{
    options: Array<OptionProps>;
    value?:string;
    defaultValue?:string;
    onChange?: React.ChangeEventHandler<HTMLSelectElement>;
}