import { configureStore } from '@reduxjs/toolkit';
import ForexReducer from './homepage/homepageSlice';
import ModalReducer from './modal/modalSlice';
import SearchReducer from './search/searchSlice';

export default configureStore({
  reducer: {
    Forex: ForexReducer,
    Modal: ModalReducer,
    Search: SearchReducer,
  },
});
