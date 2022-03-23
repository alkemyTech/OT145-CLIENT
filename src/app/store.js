import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/usersReducer/authReducer'
import membersReducer from '../redux/Members/membersSlice'
import userReducer from '../redux/Users/userSlice'
import newsReducer from '../redux/NewsReducers/newsReducerThunk'

export default configureStore({
  reducer: {
    auth: authReducer,
    members: membersReducer,
    users: userReducer,
    news: newsReducer,
  },
})
