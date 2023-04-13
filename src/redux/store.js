import { configureStore } from '@reduxjs/toolkit';
import pollutionReducer from './homepage/homepageSlice';

export default configureStore({
  reducer: {
    pollution: pollutionReducer,
  },
});
