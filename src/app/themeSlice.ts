import { PaletteMode } from '@mui/material';
import { createSlice } from '@reduxjs/toolkit';
import type { AppState } from './store';

export interface ThemeState {
  value: PaletteMode;
}

const initialState: ThemeState = {
  value: 'light',
};

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light';
    },
  },
});

export const { toggle } = themeSlice.actions;

export const selectTheme = (state: AppState) => state.theme.value;

export default themeSlice.reducer;
