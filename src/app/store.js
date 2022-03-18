import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer"
import memberReducer from "../redux/NosotrosReducer/nosotrosReducer"

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth : authReducer,
    members : memberReducer ,
  },
});
