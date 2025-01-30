import { counterReducer } from '@/store/slices/counterSlice';
import { reviewsReducer } from '@/store/slices/reviwesSlice';
import { usersReducer } from '@/store/slices/usersSlice';

const reducers = {
  // Add reducer Here!!!
  counter: counterReducer,
  reviews: reviewsReducer,
  users: usersReducer,
};

export default reducers;
