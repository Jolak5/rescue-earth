import { configureStore } from '@reduxjs/toolkit';
import ForexReducer from './homepage/homepageSlice';

export default configureStore({
  reducer: {
    Forex: ForexReducer,
  },
});
