import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer";
import userReducer from '../redux/Users/userSlice';
import authReducer from "../redux/usersReducer/authReducer"


export default configureStore({
  reducer: {
    auth : authReducer,
    users: userReducer,
  },
});
