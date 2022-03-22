import { configureStore } from '@reduxjs/toolkit';
<<<<<<< HEAD
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../redux/authReducer";
import userReducer from '../redux/Users/userSlice';
=======
import authReducer from "../redux/authReducer"
>>>>>>> 30f46c70a0d9757c9457af96d2b58db7cd763f89

export default configureStore({
  reducer: {
    auth : authReducer,
    users: userReducer,
  },
});
