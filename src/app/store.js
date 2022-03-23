import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/authReducer"
import membersReducer from '../redux/Members/membersSlice';



export default configureStore({
  reducer: {
    auth : authReducer,
    members: membersReducer
  },
});
