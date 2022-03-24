import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/usersReducer/authReducer"
import slidesReducer from "../redux/slides/slidesSlice"
import membersReducer from '../redux/Members/membersSlice';
import userReducer from '../redux/Users/userSlice';



export default configureStore({
  reducer: {
    auth : authReducer,
    slides: slidesReducer,
    members: membersReducer,
    users: userReducer,
  },
});
