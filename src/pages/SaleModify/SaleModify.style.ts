import styled from 'styled-components';
import theme from '@styles/theme';

export const Wrapper =styled.div`
`

export const InputWithLabelWrapper =styled.div`
    height:400px;
`

export const LabelWrapper = styled.div`
    width:350px;
    height:50px;
    position: relative;
    left: 0px;
    top: 60px
`
export const ButtonWrapper =styled.div`
`

export const ErrorMessage = styled.div`
  color: ${theme.colors.danger1};
  font-size: 0.8rem;
  padding: 0.5rem 0;
`;