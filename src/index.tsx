import React from 'react';
import ReactDOM from 'react-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import { ThemeProvider } from 'styled-components';
import Routes from '@pages/Routes';
import theme from '@styles/theme';
import GlobalStyle from '@styles/globalStyle';
import FontStyles from '@styles/fonts/fonts';

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <FontStyles />
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  </QueryClientProvider>,
  document.getElementById('root'),
);