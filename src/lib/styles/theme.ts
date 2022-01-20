import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 13}rem`;

const theme: DefaultTheme = {
  fontSizes: {
    header1: calcRem(34),
    header2: calcRem(20),
    header3: calcRem(18),
    body: calcRem(13),
  },

  colors: {
    bold: '#000000',
    disabledbord: '#d9d9d9',
    main: '#333333',
    sub: '#666666',
    button_main_color1: '#0BC7F0',
    button_main_color2: '#55d9f7',
    button_sub_color1: '#C4C4C4',
    button_sub_color2: '#E3E3E3',
    placeholder: '#999999',
    white: '#ffffff',
    background: '#fafafa',
    bgDivider: '#f0f0f0',
    scrollBar: '#c4c4c4',
    primary60: '#006644',
    primary40: '#e4efe7',
    primary20: '#f2f7f4',
    secondary100: '#062a44',
    secondary80: '#06556a',
    danger1: '#ff4d4f',
    danger2: '#ff7875',
    warning: '#ff9400',
  },
};

export default theme;
