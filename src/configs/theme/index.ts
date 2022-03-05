import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode?: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#fff' : '#282c35',
    },
    primary: { main: mode === 'light' ? '#d23669' : '#ffa7c4' },
    secondary: { main: '#fff' },
  },
  typography: {
    fontFamily: 'Merriweather',
  },
});
