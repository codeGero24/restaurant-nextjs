import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

export const store = configureStore({
  reducer: reducers,
});

// Inferire il tipo di `makeStore`
export type AppStore = typeof store;
// Inferire i tipi `RootState` e `AppDispatch` dallo store stesso
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
