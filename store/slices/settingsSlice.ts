import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { bookingFields, headerItem, settingsResp } from '@/types/api';
import { createSlice } from '@reduxjs/toolkit';

interface SettingsState {
  settings: {
    appName?: string;
    headerItems?: headerItem[];
    bookingFormFields?: bookingFields[];
  };
}
const initialState: SettingsState = {
  settings: {
    appName: '',
    headerItems: [],
    bookingFormFields: [],
  },
};
const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings: (state: SettingsState, action: PayloadAction<settingsResp>) => {
      state.settings = action.payload;
    },
  },
});

// - Reducer
export const settingsReducer = settingsSlice.reducer;

// - Selectorssettings
export const selectSettings = (state: RootState) => state.settings;

// - Actionts
export const { setSettings } = settingsSlice.actions;
