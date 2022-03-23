import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../redux/Categories/categorySlice'
import authReducer from "../redux/usersReducer/authReducer"

import userReducer from '../redux/Users/userSlice';



export default configureStore({
  reducer: {
    auth : authReducer,
    categories : categorySlice,
    users: userReducer,
  },
});
