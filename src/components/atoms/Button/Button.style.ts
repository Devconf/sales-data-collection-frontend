import styled,{css} from 'styled-components';
import { ButtonProps } from './Button.type';

type StyledButtonProps = Pick<ButtonProps,'disabled'|'danger'|'secondary'|'rect'|'gray'>;

export const StyledButton = styled.div<StyledButtonProps>`
  line-height: 1.5715;
  position: relative;
  display: inline-block;
  font-weight: 500;
  white-space: nowrap;
  text-align: center;
  background-image: none;
  border: 1px solid transparent;
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  touch-action: manipulation;
  height: 32px;
  padding: 4px 16px;
  font-size: 14px;
  border-radius: 32px;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.button_main_color1};
  border-color: ${({ theme }) => theme.colors.button_main_color1};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  :focus {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.button_main_color2};
    border-color: ${({ theme }) => theme.colors.button_main_color2};
  }
  &:active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.button_main_color2};
    border-color: ${({ theme }) => theme.colors.button_main_color2};
  }
  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background: ${({ theme }) => theme.colors.disabledbord};
      border-color: ${({ theme }) => theme.colors.disabledbord};
      text-shadow: none;
      box-shadow: none;
      cursor: not-allowed;
      :hover,
      :focus,
      :active {
        color: rgba(0, 0, 0, 0.25);
        background: ${({ theme }) => theme.colors.disabledbord};
        border-color: ${({ theme }) => theme.colors.disabledbord};
        text-shadow: none;
        box-shadow: none;
      }
    `}
  ${(props) =>
    props.danger &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.danger1};
      border-color: ${({ theme }) => theme.colors.danger1};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.danger2};
        border-color: ${({ theme }) => theme.colors.danger2};
      }
    `}
		${(props) =>
    props.secondary &&
    css`
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.secondary100};
      border-color: ${({ theme }) => theme.colors.secondary100};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.secondary80};
        border-color: ${({ theme }) => theme.colors.secondary80};
      }
    `}
    
    ${(props) =>
    props.gray &&
    css`
      color: ${({ theme }) => theme.colors.main};
      background: ${({ theme }) => theme.colors.scrollBar};
      border-color: ${({ theme }) => theme.colors.scrollBar};
      text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
      box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
      :hover,
      :focus,
      :active {
        color: ${({ theme }) => theme.colors.sub};
        background: ${({ theme }) => theme.colors.disabledbord};
        border-color: ${({ theme }) => theme.colors.disabledbord};
      }
    `}
    
      ${(props) =>
    props.rect &&
    css`
      border-radius: 8px;
    `}
`;