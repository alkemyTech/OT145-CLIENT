import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer"
import newsReducer from '../redux/NewsReducers/newsReducerThunk';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    news : newsReducer
  },
});
