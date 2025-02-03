import { combineReducers } from '@reduxjs/toolkit';
import { counterReducer } from '@/store/slices/counterSlice';
import { reviewsReducer } from '@/store/slices/reviwesSlice';
import { usersReducer } from '@/store/slices/usersSlice';
import { settingsReducer } from './slices/settingsSlice';

const reducers = combineReducers({
  // Add reducer Here!!!
  counter: counterReducer,
  reviews: reviewsReducer,
  settings: settingsReducer,
  users: usersReducer,
});

export default reducers;
