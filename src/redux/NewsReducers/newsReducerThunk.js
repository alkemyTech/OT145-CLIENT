import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import {
  getAllNews,
  getNewById,
  postedNews,
  deletedNews,
  putsNews,
} from '../../Services/newsSevices'

export const getNews = createAsyncThunk('news/getNews', () => {
  const response = getAllNews()
  return response
})

export const getNewsById = createAsyncThunk('news/getNewsById', (id) => {
  const response = getNewById(id)
  return response
})

export const deleteNews = createAsyncThunk('news/deleteNews', (id) => {
  const response = deletedNews(id)
  return response
})

export const postNews = createAsyncThunk('news/postNews', (values) => {
  const response = postedNews(values)
  return response
})

export const putNews = createAsyncThunk('news/putNews', (values) => {
  const response = putsNews(values.id, values)
  return response
})

const newsSlice = createSlice({
  name: 'news',
  initialState: {
    news: [],
    status: 'idle',
    error: null,
    newsId: {},
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getNews.pending, (state) => {
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
      .addCase(getNewsById.pending, (state) => {
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
      //delete
      .addCase(deleteNews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(deleteNews.fulfilled, (state) => {
        state.status = 'deleted'
      })
      .addCase(deleteNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      //post
      .addCase(postNews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(postNews.fulfilled, (state) => {
        state.status = 'created'
      })
      .addCase(postNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      //put
      .addCase(putNews.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(putNews.fulfilled, (state) => {
        state.status = 'edited'
      })
      .addCase(putNews.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})
export default newsSlice.reducer
