import { configureStore } from '@reduxjs/toolkit';
import categorySlice from '../redux/Categories/categorySlice'
import authReducer from "../redux/usersReducer/authReducer"


export default configureStore({
  reducer: {
    auth : authReducer,
    categories : categorySlice,
  },
});
