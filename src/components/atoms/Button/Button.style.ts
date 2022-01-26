import styled, {css} from 'styled-components';
import {ButtonProps} from './Button.type';

type StyledButtonProps = Pick<ButtonProps, 'disabled' | 'danger' | 'secondary' | 'rect' | 'gray'>;

export const StyledButton = styled.div<StyledButtonProps>`
  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background: ${({theme}) => theme.colors.disabledbord};
      border-color: ${({theme}) => theme.colors.disabledbord};
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;
      :hover,
      :focus,
      :active {
        color: rgba(0, 0, 0, 0.25);
        background: ${({theme}) => theme.colors.disabledbord};
        border-color: ${({theme}) => theme.colors.disabledbord};
        text-shadow: none;
        box-shadow: none;
      }
    `}
  ${(props) =>
    props.danger &&
    css`
      color: ${({theme}) => theme.colors.white};
      background: ${({theme}) => theme.colors.danger1};
      border-color: ${({theme}) => theme.colors.danger1};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({theme}) => theme.colors.white};
        background: ${({theme}) => theme.colors.danger2};
        border-color: ${({theme}) => theme.colors.danger2};
      }
    `}
		${(props) =>
    props.secondary &&
    css`
      color: ${({theme}) => theme.colors.white};
      background: ${({theme}) => theme.colors.secondary100};
      border-color: ${({theme}) => theme.colors.secondary100};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({theme}) => theme.colors.white};
        background: ${({theme}) => theme.colors.secondary80};
        border-color: ${({theme}) => theme.colors.secondary80};
      }
    `}
    
    ${(props) =>
    props.gray &&
    css`
      color: ${({theme}) => theme.colors.main};
      background: ${({theme}) => theme.colors.scrollBar};
      border-color: ${({theme}) => theme.colors.scrollBar};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({theme}) => theme.colors.sub};
        background: ${({theme}) => theme.colors.disabledbord};
        border-color: ${({theme}) => theme.colors.disabledbord};
      }
    `}
    
      ${(props) =>
    props.rect &&
    css`
      border-radius: 8px;
    `}
`;