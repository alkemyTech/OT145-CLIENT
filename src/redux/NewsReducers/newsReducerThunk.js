import { accordionActionsClasses } from '@mui/material'
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
  console.log(id)
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

  extraReducers: {
    [getNews.pending]: (state) => {
      state.status = 'loading'
    },
    [getNews.fulfilled]: (state, action) => {
      state.status = 'success'
      state.news = action.payload.data
    },
    [getNews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    [getNewsById.pending]: (state) => {
      state.status = 'loading'
    },
    [getNewsById.fulfilled]: (state, { payload }) => {
      console.log(payload)
      console.log(state)
      if (payload.success) {
        state.newsId = payload.data
        state.status = 'success'
      } else {
        console.log('cayo acá')
        state.status = 'failed'
        state.error = payload.message
      }
    },
    [getNewsById.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.payload.message
    },
    //delete
    [deleteNews.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteNews.fulfilled]: (state) => {
      state.status = 'deleted'
    },
    [deleteNews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    //post
    [postNews.pending]: (state) => {
      state.status = 'loading'
    },
    [postNews.fulfilled]: (state) => {
      state.status = 'created'
    },
    [postNews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
    //put
    [putNews.pending]: (state) => {
      state.status = 'loading'
    },
    [putNews.fulfilled]: (state) => {
      state.status = 'edited'
    },
    [putNews.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    },
  },
})
export default newsSlice.reducer
