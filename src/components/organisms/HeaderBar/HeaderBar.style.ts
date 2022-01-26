import styled, { css } from 'styled-components';
import theme from '@styles/theme';
import { HeaderbarProps } from './HeaderBar.type';

type HeaderProps = Pick<
  HeaderbarProps,
  'height' | 'login' | 'bgColor' | 'color' | 'titleSize'
>;
const MAIN = theme.colors.main;
const HEADER1 = theme.fontSizes.header1;

export const StyledHeaderBar = styled.div<HeaderProps>`
  height: ${(props) => props.height || '80px'};
  width: 100%;
  background-color: ${(props) => props.bgColor || 'rgba(255, 255, 255, 0.6)'};
  backdrop-filter: blur(4px);
  border-bottom: 1px solid black;
  color: ${({ theme }) => theme.colors.main};

  display: flex;
  justify-content: space-between;
  padding: 15px 3rem;

  ${(props) =>
    props.login &&
    css`
      width: 100%;
    `}
`;

export const StyledTitle = styled.div<HeaderProps>`
  width: 90%;
  font-weight: bold;
  color: ${(props) => props.color || MAIN};
  font-size: ${(props) => props.titleSize || HEADER1};
  text-align: left;
`;


export const StyledButtonArea = styled.div`
  height: 100%;
  width: 100%;
  padding: 19px;
  display: flex;
  align-items: center;
  text-decoration: underline;
  flex: 1;
  div:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
  a:nth-child(even) {
    margin: 0px 10px 0px 10px;
  }
  color: ${({theme}) => theme.colors.bold};
  &:hover,
  :focus {
    color: ${({theme}) => theme.colors.disabledbord};
  }
  &:active {
    color: ${({theme}) => theme.colors.disabledbord};
  }
`;