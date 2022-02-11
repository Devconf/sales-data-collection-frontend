import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import Routes from '@router/Routes';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import FontStyles from '@styles/fonts/fonts';
import { RecoilRoot } from 'recoil';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
        <FontStyles />
        <GlobalStyle />
        <Routes />
        </ThemeProvider>
    </RecoilRoot>
  </QueryClientProvider>,
  document.getElementById('root'),
);