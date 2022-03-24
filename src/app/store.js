import { configureStore } from '@reduxjs/toolkit';
import authReducer from "../redux/usersReducer/authReducer"
import memberReducer from "../redux/NosotrosReducer/nosotrosReducer"

export default configureStore({
  reducer: {
    auth : authReducer,
    members : memberReducer ,
  },
});
