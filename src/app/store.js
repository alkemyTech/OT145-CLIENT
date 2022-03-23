import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer";
import userReducer from '../redux/Users/userSlice';



export default configureStore({
  reducer: {
    auth : authReducer,
    users: userReducer,
  },
});
