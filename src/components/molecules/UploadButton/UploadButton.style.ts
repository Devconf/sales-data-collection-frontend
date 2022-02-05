import styled from 'styled-components';
import { ButtonProps } from '@components/atom/Button/Button.type';


export const Wrapper = styled.div`
    width:100%;
`

export const ButtonWrapper =styled.div<ButtonProps>`
    margin: 3px;
    line-height: 1.5715;
    position: relative;
    display: inline-block;
    font-weight: 400;
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
    height: 27px;
    padding: 4px 16px;
    font-size: 12px;
    border-radius: 32px;
    color: ${({theme}) => theme.colors.bold};
    background: ${({theme}) => theme.colors.background};
    border-color: ${({theme}) => theme.colors.background};
    text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.12);
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.045);
    &:hover,
    :focus {
    color: ${({theme}) => theme.colors.bold};
    background: ${({theme}) => theme.colors.background1};
    border-color: ${({theme}) => theme.colors.background1};
    }
    &:active {
    color: ${({theme}) => theme.colors.bold};
    background: ${({theme}) => theme.colors.background1};
    border-color: ${({theme}) => theme.colors.background1};
    }
`

export const StyledInput = styled.input<ButtonProps>`
    width: 0;
    height: 0;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;  
`