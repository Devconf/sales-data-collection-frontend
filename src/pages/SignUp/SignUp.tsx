import React, {useState} from 'react';
import { useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { callSignUpApi } from '../../apis/userAPI/user.api';
import InputText from '@components/molecules/InputText';
import Select from '@components/atoms/Select';
import Button from '@components/atoms/Button'
import {Wrapper,ErrorMessage} from './SignUp.style';
import { useMultipleInputs } from '../../hooks/UseMultipleInputs';
import { useSelect } from '../../hooks/useSelect';
import {
    companyNameValidation,
    businessNumValidation,
    emailValidation,
    passwordValidation,
    passwordConfirmValidation
  } from '../../lib/helpers/Validation';


const OPTIONS=  [
	{ value: "ADMIN", name: "본사" },
	{ value: "USER", name: "자회사" },
];

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

    //default Select 정한다.
    const [role, onChangeSelection] = useSelect('USER');


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
            history.push('/');
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
            hadleSignUp({ companyName, businessNum, email, password, role });
        }
      };

    const onClickLoginPageButton = () =>{
        history.push('/');
        resetSignUpInputs();
        resetError();
    }

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
            <Select value={role} options={OPTIONS} defaultValue={role} onChange={onChangeSelection}></Select>
            <Button rect onClick={onSubmitSignUpForm}>
                SignUp
            </Button>
            <Button rect onClick={onClickLoginPageButton}>
                LogIn
            </Button>
        </Wrapper>
    );
};

export default SignUp;