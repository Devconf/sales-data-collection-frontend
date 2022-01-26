import React from 'react';
import Input from '@components/atoms/Input';
import {Wrapper, Label, InputWrapper} from './InputWithLabel.style';
import {InputWithLabelProps} from './InputWithLabel.type';


const InputWithLabel: React.FC<InputWithLabelProps> = ({
                                                     label,
                                                     ...inputProps
                                                 }) => {
    return (
        <Wrapper>
            <Label>{label}</Label>
            <InputWrapper>
                <Input {...inputProps} />
            </InputWrapper>
        </Wrapper>
    );
};

export default InputWithLabel;