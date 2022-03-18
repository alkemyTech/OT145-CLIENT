import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer";
import userReducer from '../redux/Users/userSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    users: userReducer,
  },
});
