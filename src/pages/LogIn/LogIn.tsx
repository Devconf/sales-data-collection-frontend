import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { callLoginApi } from '../../apis/userAPI/user.api';
import InputText from '@components/molecules/InputText';
import Button from '@components/atoms/Button'
import {Wrapper,LogInWrapper,LogInButtonWrapper,ErrorMessage} from './LogIn.style';
import { useMultipleInputs } from '../../hooks/UseMultipleInputs';
import {
    emailValidation,
    passwordValidation,
  } from '../../lib/helpers/Validation';

const LogIn: React.FC = () =>{
    const history = useHistory();

    const [{ loginEmail, loginPassword }, onChangeLoginInputs, resetLoginInputs] =
    useMultipleInputs({
      loginEmail: '',
      loginPassword: '',
    });


    const [error, setError] = useState({
        email: '',
        password: '',
      });

    const resetError = () => {
        setError({
          email: '',
          password: '',
        })
    };

    const { mutateAsync: handleLogin } = useMutation(callLoginApi, {
        onSuccess: ({ success, error }) => {
            if (success) {
            console.log('login Success!');
            history.push('/sales');
            resetLoginInputs();
            resetError();
            } else {
            console.log('login failed: ', error);
            }
        },
        });

    const onSubmitLoginForm = () => {
        const emailError = emailValidation(loginEmail);
        const passwordError = passwordValidation(loginPassword);
    
        setError({
          ...error,
          email: emailError,
          password: passwordError,
        });
        if (emailError === '' && passwordError === '') {
          handleLogin({ loginEmail, loginPassword });
        }
      };

    return (
        <Wrapper>
            <LogInWrapper>
                <InputText 
                    type='email' 
                    placeholder='이메일' 
                    text-align='center'
                    value={loginEmail}
                    onChange={onChangeLoginInputs}
                    name="loginEmail"
                    error={error.email}>
                </InputText>
                <ErrorMessage>{error.email}</ErrorMessage>
                <InputText 
                    type='password' 
                    placeholder='비밀번호' 
                    text-align='center'
                    value={loginPassword}
                    onChange={onChangeLoginInputs}
                    name="loginPassword"
                    error={error.password}>
                </InputText>
                <ErrorMessage>{error.password}</ErrorMessage>
            </LogInWrapper>
            <LogInButtonWrapper>
                <Button rect onClick={onSubmitLoginForm}>
                    LogIn
                </Button>
            </LogInButtonWrapper>
        </Wrapper>
    );
};

export default LogIn;