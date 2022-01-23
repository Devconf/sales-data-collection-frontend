import React from 'react';
import Input from '@components/atoms/Input';
import {Wrapper} from './LoginInput.style';
import {LoginInputProps} from './LoginInput.type';

const LonginInput: React.FC<LoginInputProps> = ({
                                                    ...inputProps
                                                }) => {
    return (
        <Wrapper>
            <Input {...inputProps} />
        </Wrapper>
    );
};

export default LonginInput