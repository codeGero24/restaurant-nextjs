import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { menu, tabMenu } from '@/types/render.data';

import { createSlice } from '@reduxjs/toolkit';

// - Mock
import { MENU } from '@/mock/menu';

interface MenuState {
  menu: menu;
}

const initialState: MenuState = {
  menu: {
    tabs: MENU.tabs,
    plates: MENU.plates,
  },
};

export const menuSlice = createSlice({
  name: 'menu',
  initialState,
  reducers: {
    setActiveTab: (state: MenuState, action: PayloadAction<tabMenu['id']>) => {
      state.menu.tabs = state.menu.tabs.map(tab => ({
        ...tab,
        isActive: action.payload === tab.id,
      }));

      state.menu.plates = MENU[action.payload] || initialState.menu.plates;
      console.log('MENU', state.menu);
    },
  },
});

// Reducer
export const menuReducer = menuSlice.reducer;

// Selectors
export const selectMenu = (state: RootState) => state.menu;

// Actions
export const { setActiveTab } = menuSlice.actions;
