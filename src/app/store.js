import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer"
import membersReducer from '../redux/Members/membersSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    members: membersReducer
  },
});
