import React from 'react';

export interface OptionProps extends React.HTMLProps<HTMLOptionElement>{  
    value?:string;
    name?:string;
    defaultSelected?:boolean;
}