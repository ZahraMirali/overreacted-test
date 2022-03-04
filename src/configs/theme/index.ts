import { PaletteMode } from '@mui/material';
import dark from './dark';
import light from './light';

export const getDesignTokens = (mode?: PaletteMode) => ({
  palette: {
    mode,
    primary: { main: '#1fbedc' },
    secondary: { main: '#ff8800' },
    ...(mode === 'light' ? light : dark),
  },
});
