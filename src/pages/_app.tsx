import '../styles/globals.css';
import { useMemo } from 'react';
import { ThemeProvider, CssBaseline, Typography, Switch } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../configs/theme';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { toggle, selectTheme } from '../app/themeSlice';

import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';

import store from '../app/store';

export default function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <ThemeApp {...props} />
    </Provider>
  );
}

function ThemeApp({ Component, pageProps }: AppProps) {
  const dispatch = useAppDispatch();
  const mode = useAppSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <Typography component='h1' variant='h4'>
          Overreacted
        </Typography>
        <Switch checked={mode === 'dark'} onChange={() => dispatch(toggle())} />
      </header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
