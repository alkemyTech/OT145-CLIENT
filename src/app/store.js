import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer";
import categorySlice from '../redux/Categories/categorySlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    categories : categorySlice,
  },
});
