import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { callSignUpApi } from '../../apis/userAPI/user.api';
import InputText from '@components/molecules/InputText';
import Button from '@components/atoms/Button'
import {Wrapper,ErrorMessage} from './SignUp.style';
import { useMultipleInputs } from '../../hooks/UseMultipleInputs';
import {
    companyNameValidation,
    businessNumValidation,
    emailValidation,
    passwordValidation,
    passwordConfirmValidation
  } from '../../lib/helpers/Validation';

const SignUp: React.FC = () =>{
    const history = useHistory();

    const [{ companyName, businessNum, email, password, passwordConfirm }, onChangeSignUpInputs, resetSignUpInputs] =
    useMultipleInputs({
      companyName:'',
      businessNum:'',
      email: '',
      password: '',
      passwordConfirm:''
    });


    const [error, setError] = useState({
      companyName:'',
      businessNum:'',
      email: '',
      password: '',
      passwordConfirm:''
      });

    const resetError = () => {
        setError({
            companyName:'',
            businessNum:'',
            email: '',
            password: '',
            passwordConfirm:''
        })
    };

    const { mutateAsync: hadleSignUp } = useMutation(callSignUpApi, {
        onSuccess: ({ success, error }) => {
            if (success) {
            console.log('signUp Success!');
            history.push('/sales');
            resetSignUpInputs();
            resetError();
            } else {
            console.log('signUp failed: ', error);
            }
        },
        });

    const onSubmitSignUpForm = () => {
        const companyNameError = companyNameValidation(companyName);
        const businessNumError = businessNumValidation(businessNum);
        const emailError = emailValidation(email);
        const passwordError = passwordValidation(password);
        const passwordConfirmError =passwordConfirmValidation(password, passwordConfirm);
    
        setError({
          ...error,
          companyName:companyNameError,
          businessNum:businessNumError,
          email: emailError,
          password: passwordError,
          passwordConfirm: passwordConfirmError
        });
        if (companyNameError === ''&&
            businessNumError === ''&&
            emailError === '' && 
            passwordError === '' &&
            passwordConfirmError === '') {
            hadleSignUp({ companyName, businessNum, email, password });
        }
      };

    return (
        <Wrapper>
            <InputText 
                type='text' 
                placeholder='회사명' 
                text-align='center'
                value={companyName}
                onChange={onChangeSignUpInputs}
                name="companyName"
                error={error.companyName}>
            </InputText>
            <ErrorMessage>{error.companyName}</ErrorMessage>
            <InputText 
                type='text' 
                placeholder='사업자번호' 
                text-align='center'
                value={businessNum}
                onChange={onChangeSignUpInputs}
                name="businessNum"
                error={error.businessNum}>
            </InputText>
            <ErrorMessage>{error.businessNum}</ErrorMessage>
            <InputText 
                type='email' 
                placeholder='이메일' 
                text-align='center'
                value={email}
                onChange={onChangeSignUpInputs}
                name="email"
                error={error.email}>
            </InputText>
            <ErrorMessage>{error.email}</ErrorMessage>
            <InputText 
                type='password' 
                placeholder='비밀번호' 
                text-align='center'
                value={password}
                onChange={onChangeSignUpInputs}
                name="password"
                error={error.password}>
            </InputText>
            <ErrorMessage>{error.password}</ErrorMessage>
            <InputText 
                type='password' 
                placeholder='비밀번호 확인' 
                text-align='center'
                value={passwordConfirm}
                onChange={onChangeSignUpInputs}
                name="passwordConfirm"
                error={error.passwordConfirm}>
            </InputText>
            <ErrorMessage>{error.passwordConfirm}</ErrorMessage>
            <Button rect onClick={onSubmitSignUpForm}>
                SignUp
            </Button>
        </Wrapper>
    );
};

export default SignUp;