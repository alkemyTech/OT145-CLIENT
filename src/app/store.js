import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/usersReducer/authReducer'
import newsReducer from '../redux/NewsReducers/newsReducerThunk'
import userReducer from '../redux/Users/userSlice'

export default configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
    users: userReducer,
  },
})
