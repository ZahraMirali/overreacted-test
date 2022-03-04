import { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode?: PaletteMode) => ({
  palette: {
    mode,
    background: {
      default: mode === 'light' ? '#fff' : '#282c35',
    },
  },
  typography: {
    fontFamily: 'Merriweather',
    h3: {
      color: mode === 'light' ? '#d23669' : '#ffa7c4',
    },
  },
});
