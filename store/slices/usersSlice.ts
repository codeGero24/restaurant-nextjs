import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { user } from '@/types/api';

import { createSlice } from '@reduxjs/toolkit';

interface UsersState {
  users: user[];
  status: 'idle' | 'loading' | 'success' | 'failure';
  error: boolean;
}

const initialState: UsersState = {
  status: 'idle',
  users: [],
  error: false,
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    fetchUserRequest: (state: UsersState) => {
      state.status = 'loading';
      state.error = false;
    },
    fetchUserSuccess: (state: UsersState, action: PayloadAction<user[]>) => {
      state.users = [...action.payload];
      state.status = 'success';
      state.error = false;
    },
    fetchUserFailure: (state: UsersState) => {
      state.status = 'failure';
      state.users = [];
      state.error = true;
    },
    addUser: (state: UsersState, action: PayloadAction<user>) => {
      state.users = [...state.users, action.payload];
    },
    removeUser: (state: UsersState, action: PayloadAction<user['id']>) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    reset: (): UsersState => {
      return initialState;
    },
  },
});

// Reducer
export const usersReducer = usersSlice.reducer;

// Selectors
export const selectUsers = (state: RootState) => state.users;
export const selectStatus = (state: RootState) => state.users.status;
export const selectError = (state: RootState) => state.users.error;

// Status
const IDLE_STATUS = 'idle';
const LOADING_STATUS = 'loading';
const SUCCESS_STATUS = 'success';
const FAILURE_STATUS = 'failure';

export { IDLE_STATUS, LOADING_STATUS, SUCCESS_STATUS, FAILURE_STATUS };

// Actions
export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  addUser,
  removeUser,
  reset,
} = usersSlice.actions;
