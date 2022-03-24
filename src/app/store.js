import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/usersReducer/authReducer";
import membersReducer from '../redux/Members/membersSlice';
import userReducer from '../redux/Users/userSlice';
import categorySlice from '../redux/Categories/categorySlice';


import nosotrosReducer from '../redux/NosotrosReducer/nosotrosReducer';

export default configureStore({
  reducer: {
    auth : authReducer,
    members: membersReducer,
    users: userReducer,
    categories : categorySlice,
    nosotros : nosotrosReducer,
  },
});
