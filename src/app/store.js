import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer"
import categorySlice from '../redux/Categories/categorySlice'
import authReducer from "../redux/usersReducer/authReducer"


export default configureStore({
  reducer: {
    auth : authReducer,
    categories : categorySlice,
  },
});
