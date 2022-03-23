import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../redux/usersReducer/authReducer'
import newsReducer from '../redux/NewsReducers/newsReducerThunk'

export default configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
})
