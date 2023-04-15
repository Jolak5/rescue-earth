import { configureStore } from '@reduxjs/toolkit';
import ForexReducer from './homepage/homepageSlice';
import ModalReducer from './modal/modalSlice';

export default configureStore({
  reducer: {
    Forex: ForexReducer,
    Modal: ModalReducer,
  },
});
