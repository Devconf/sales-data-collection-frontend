import React from 'react';
import { LoginButtonProps } from './LoginButton.type';
import { ButtonWrapper } from './LoginButton.style';
import Button from '@components/atoms/Button';

const LoginButton: React.FC<LoginButtonProps> = ({children, ...ButtonProps}) =>{
    
    return(
        <ButtonWrapper>
            <Button {...ButtonProps}>{children}</Button>
        </ButtonWrapper>
    )
}

export default LoginButton;