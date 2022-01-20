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
      disabledbord: string;
      main: string;
      sub: string;
      button_main_color1: string;
      button_main_color2: string;
      button_sub_color1: string;
      button_sub_color2: string;
      placeholder: string;
      white: string;
      background: string;
      bgDivider: string;
      scrollBar: string;
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
