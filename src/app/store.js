import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/usersReducer/authReducer"


export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
  },
});
