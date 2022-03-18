import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer"
import slidesReducer from "../redux/slides/slidesSlice"

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    slides: slidesReducer
  },
});
