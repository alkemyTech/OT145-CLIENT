import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer"
import slidesReducer from "../redux/slides/slidesSlice"

export default configureStore({
  reducer: {
    auth : authReducer,
    slides: slidesReducer
  },
});
