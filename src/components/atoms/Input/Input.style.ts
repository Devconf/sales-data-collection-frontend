import styled, { css } from 'styled-components';
import { InputProps } from './Input.type';
import theme from '@styles/theme';

type StyledInputProps = Pick<InputProps, 'disabled' | 'error'>;

export const StyledInput = styled.input<StyledInputProps>`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-variant: tabular-nums;
  list-style: none;
  font-feature-settings: 'tnum';
  position: relative;
  display: inline-block;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: black;
  font-size: 14px;
  line-height: 1.5715;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.bold};
  border-radius: 20px;
  transition: all 0.3s;
  &:-moz-placeholder {
    opacity: 1;
    text-overflow: ellipsis;
  }
  &:placeholder-shown {
    text-overflow: ellipsis;
  }
  &:-ms-input-placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
    text-overflow: ellipsis;
  }
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.bold};
    border-right-width: 1px !important;
  }
  &:focus {
    border-color: ${({ theme }) => theme.colors.bold};
    border-right-width: 1px !important;
    outline: 0;
  }
  ${(props) =>
    props.disabled &&
    css`
      color: rgba(0, 0, 0, 0.25);
      background-color: ${({ theme }) => theme.colors.white};
      cursor: not-allowed;
      opacity: 1;
      &:hover {
        border-color: ${({ theme }) => theme.colors.white};
        border-right-width: 1px !important;
      }
    `}
  ${(props) =>
    props.error &&
    css`
      border-color: ${theme.colors.danger1};
      &:hover {
        border-color: ${theme.colors.danger1};
        border-right-width: 1px !important;
      }
      &:focus {
        border-color: ${({ theme }) => theme.colors.danger1};
        border-right-width: 1px !important;
        outline: 0;
        box-shadow: 0 0 0 2px rgba(255, 77, 79, 0.2);
      }
    `}
`;