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

export const LogInWrapper =styled.div`
position: absolute;
    top: 26%;
    left: 6%;
`
export const LogInButtonWrapper = styled.div`
position: absolute;
    bottom: 13%;
    left: 37%;
`

export const ErrorMessage = styled.div`
  color: ${theme.colors.danger1};
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;