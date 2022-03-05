import '../styles/globals.css';
import { useMemo } from 'react';
import { ThemeProvider, CssBaseline, Typography } from '@mui/material';
import { createTheme } from '@mui/material/styles';
import { getDesignTokens } from '../configs/theme';
import { useAppSelector } from '../app/hooks';
import { selectTheme } from '../app/themeSlice';
import { Provider } from 'react-redux';
import type { AppProps } from 'next/app';
import store from '../app/store';
import ThemeSwitch from '../components/ThemeSwitch';

export default function MyApp(props: AppProps) {
  return (
    <Provider store={store}>
      <ThemeApp {...props} />
    </Provider>
  );
}

function ThemeApp({ Component, pageProps }: AppProps) {
  const mode = useAppSelector(selectTheme);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <header>
        <Typography component='h1' variant='h4'>
          Overreacted
        </Typography>
        <ThemeSwitch />
      </header>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
