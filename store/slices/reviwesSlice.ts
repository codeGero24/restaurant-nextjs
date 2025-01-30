import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { review } from '@/types/render.data';

import { createSlice } from '@reduxjs/toolkit';

interface ReviwesState {
  reviews: review[];
  status: 'idle' | 'loading' | 'success' | 'error';
}

const initialState: ReviwesState = {
  status: 'idle',
  reviews: [],
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    setReviews: (state: ReviwesState, action: PayloadAction<review[]>) => {
      state.reviews = [...action.payload];
    },
    addReview: (state: ReviwesState, action: PayloadAction<review>) => {
      state.reviews = [...state.reviews, action.payload];
    },
    removeReview: (state: ReviwesState, action: PayloadAction<review['id']>) => {
      state.reviews.filter(review => review.id !== action.payload);
    },
    removeAll: (state: ReviwesState) => {
      state.reviews = [];
    },
  },
});

// Reducer
export const reviewsReducer = reviewsSlice.reducer;

// Selectors
export const selectReviews = (state: RootState) => state.reviews;

// Actions
export const { setReviews, addReview, removeReview, removeAll } = reviewsSlice.actions;
