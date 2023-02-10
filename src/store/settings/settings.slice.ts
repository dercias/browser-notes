import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

export type SettingsState = {
  isFirstRun: boolean;
};

const initialState: SettingsState = {
  isFirstRun: true,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    markFirstRun: (state: SettingsState) => {
      state.isFirstRun = false;
    },
  },
});

export const selectIsFirstRun = (state: RootState) => state.settings.isFirstRun;

export const { markFirstRun } = settingsSlice.actions;

export default settingsSlice.reducer;
