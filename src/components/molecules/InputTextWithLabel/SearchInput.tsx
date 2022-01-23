import React from 'react';
import Input from '@components/atoms/Input';
import {Wrapper, Label, InputWrapper} from './SearchInput.style';
import {SearchInputProps} from './SearchInput.type';


const SearchInput: React.FC<SearchInputProps> = ({
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

export default SearchInput;