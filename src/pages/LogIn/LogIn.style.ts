import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper = styled.div`
    border-radius: 32px;
    border: 1px solid;
    position: absolute;
    height:300px;
    top: 23%;
    left: 41%;
    width:300px;
`;

export const Label = styled.label`
border-radius: 32px;
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.button_main_color1};
    border-color: ${({theme}) => theme.colors.button_main_color1};
    position: absolute;
    width:250px;
    font-size: 40px;
    text-align: center;
    height: 50px;
    top: 6%;
    left: 7%;
`

export const LogInWrapper =styled.div`
position: absolute;
    top: 27%;
    left: 10%;
`
export const LogInButtonWrapper = styled.div`
position: absolute;
    bottom: 20%;
    left: 37%;
`

export const SignUpButtonWrapper = styled.div`
position: absolute;
    bottom: 6%;
    left: 35%;
`

export const ErrorMessage = styled.div`
  color: ${theme.colors.danger1};
  font-size: 0.8rem;
  padding: 0.5rem 0;
  height: 25px;
`;