import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    fontSizes: {
      header1: string;
      header2: string;
      header3: string;
      body: string;
    };

    colors: {
      bold: string;
      main: string;
      sub: string;
      placeholder: string;
      white: string;
      background: string;
      bgDivider: string;
      disabledbg: string;
      disabledborder: string;
      scrollBar: string;
      button_color1: string;
      button_color2: string;
      primary60: string;
      primary40: string;
      primary20: string;
      secondary100: string;
      secondary80: string;
      danger1: string;
      danger2: string;
      warning: string;
    };
  }
}
