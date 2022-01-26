import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { callLoginApi } from '../../apis/userAPI/user.api';
import LoginInput from '@components/molecules/LoginInput';
import {Wrapper,Label,LogInWrapper,LogInButtonWrapper,SignUpButtonWrapper,ErrorMessage} from './LogIn.style';
import { useMultipleInputs } from '../../hooks/UseMultipleInputs';
import {
    emailValidation,
    passwordValidation,
  } from '../../lib/helpers/Validation';
import LoginButton from '@components/molecules/LoginButton';

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

    const onClickSignUpButton= ()=>{
        history.push('/signUp')
    }

    return (
        <Wrapper>
            <Label>로그인</Label>
            <LogInWrapper>
                <LoginInput 
                    type='email' 
                    placeholder='이메일' 
                    text-align='center'
                    value={loginEmail}
                    onChange={onChangeLoginInputs}
                    name="loginEmail"
                    error={error.email}>
                </LoginInput>
                <ErrorMessage>{error.email}</ErrorMessage>
                <LoginInput 
                    type='password' 
                    placeholder='비밀번호' 
                    text-align='center'
                    value={loginPassword}
                    onChange={onChangeLoginInputs}
                    name="loginPassword"
                    error={error.password}>
                </LoginInput>
                <ErrorMessage>{error.password}</ErrorMessage>
            </LogInWrapper>
            <LogInButtonWrapper>
                <LoginButton rect onClick={onSubmitLoginForm}>
                    LogIn
                </LoginButton>
            </LogInButtonWrapper>
            <SignUpButtonWrapper>
                <LoginButton rect onClick={onClickSignUpButton}>
                    SignUp
                </LoginButton>
            </SignUpButtonWrapper>
        </Wrapper>
    );
};

export default LogIn;