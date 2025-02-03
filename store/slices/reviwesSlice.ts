import type { RootState } from '@/store';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { review } from '@/types/render.data';

import { createSlice } from '@reduxjs/toolkit';

interface ReviewsState {
  reviews: review[];
  status: 'idle' | 'loading' | 'success' | 'failure';
  error: boolean;
}

const initialState: ReviewsState = {
  status: 'idle',
  reviews: [],
  error: false,
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    fetchReviewsRequest: (state: ReviewsState) => {
      state.status = 'loading';
      state.error = false;
    },
    fetchReviewsSuccess: (state: ReviewsState, action: PayloadAction<review[]>) => {
      state.reviews = [...action.payload];
      state.status = 'success';
      state.error = false;
    },
    fetchReviewsFailure: (state: ReviewsState) => {
      state.status = 'failure';
      state.reviews = [];
      state.error = true;
    },
    setReviews: (state: ReviewsState, action: PayloadAction<review[]>) => {
      state.reviews = [...action.payload];
    },
    addReview: (state: ReviewsState, action: PayloadAction<review>) => {
      state.reviews = [...state.reviews, action.payload];
    },
    removeReview: (state: ReviewsState, action: PayloadAction<review['id']>) => {
      state.reviews.filter(review => review.id !== action.payload);
    },
    removeAll: (state: ReviewsState) => {
      state.reviews = [];
    },
  },
});

// Reducer
export const reviewsReducer = reviewsSlice.reducer;

// Selectors
export const selectReviews = (state: RootState) => state.reviews;

// Actions
export const {
  fetchReviewsRequest,
  fetchReviewsSuccess,
  fetchReviewsFailure,
  setReviews,
  addReview,
  removeReview,
  removeAll,
} = reviewsSlice.actions;
