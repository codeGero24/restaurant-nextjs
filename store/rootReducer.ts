import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '@/store/slices/counterSlice';
import { menuReducer } from './slices/menuSlice';
import { reviewsReducer } from '@/store/slices/reviwesSlice';
import { settingsReducer } from './slices/settingsSlice';
import { usersReducer } from '@/store/slices/usersSlice';

const reducers = combineReducers({
  // Add reducer Here!!!
  counter: counterReducer,
  menu: menuReducer,
  reviews: reviewsReducer,
  settings: settingsReducer,
  users: usersReducer,
});

export default reducers;
