import styled from 'styled-components';
import { LoginButtonProps } from './LoginButton.type';

export const ButtonWrapper =styled.div<LoginButtonProps>`
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
  color: ${({theme}) => theme.colors.white};
  background: ${({theme}) => theme.colors.button_main_color1};
  border-color: ${({theme}) => theme.colors.button_main_color1};
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
  &:hover,
  :focus {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.button_main_color2};
    border-color: ${({theme}) => theme.colors.button_main_color2};
  }
  &:active {
    color: ${({theme}) => theme.colors.white};
    background: ${({theme}) => theme.colors.button_main_color2};
    border-color: ${({theme}) => theme.colors.button_main_color2};
  }
`