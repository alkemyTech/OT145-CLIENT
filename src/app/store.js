import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/usersReducer/authReducer"


export default configureStore({
  reducer: {
    auth : authReducer,
  },
});
