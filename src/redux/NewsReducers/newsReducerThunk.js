import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import privateGET from '../../Services/privateApiService'

export const getNews = createAsyncThunk('news/getNews', () => {
  const response = privateGET('https://ongapi.alkemy.org/api/news')
  return response
})

export const getNewsById = createAsyncThunk('news/getNewsById', (id) => {
  const response = privateGET(`https://ongapi.alkemy.org/api/news/${id}`)
  return response
})

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: 'idle',
    error: null,
    newsId: [],
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = 'success'
        state.news = action.payload.data
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(getNewsById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(getNewsById.fulfilled, (state, action) => {
        state.status = 'success'
        state.newsId = action.payload.data
      })
      .addCase(getNewsById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
export default newsSlice.reducer
