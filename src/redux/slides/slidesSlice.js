import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import privateGET, { privateDelete, privatePUT, privatePOST } from '../../Services/privateApiService.js'

export const fetchSlides = createAsyncThunk('slider/fetchSlides', async () => {
  const response = await privateGET(process.env.REACT_APP_API_GET_SLIDES)
  return response.data
})

export const getSlideById = createAsyncThunk('slider/getSlideId', async (id) => {
  const response = await privateGET(process.env.REACT_APP_API_GET_SLIDES, id)
  return response.data
})

export const deleteSlides = createAsyncThunk('slider/deleteSlides', async (id) => {
  const response = await privateDelete(process.env.REACT_APP_API_GET_SLIDES, id)
  return response.data
})

export const putSlides = createAsyncThunk('slider/putSlides', async (id, values) => {
  const response = await privatePUT(process.env.REACT_APP_API_GET_SLIDES, id, values)
  return response.data
})

export const postSlides = createAsyncThunk('slider/postSlides', async (values) => {
  const response = await privatePOST(process.env.REACT_APP_API_GET_SLIDES, values)
  return response.data
})

const initialState = {
  slides: [],
  slideById: {},
  status: 'idle',
  error: null
}

const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  extraReducers: {
    [fetchSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [fetchSlides.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      state.slides = payload
    },
    [fetchSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [deleteSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteSlides.fulfilled]: (state) => {
      state.status = 'updated'
    },
    [deleteSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [getSlideById.pending]: (state) => {
      state.status = 'loading'
    },
    [getSlideById.fulfilled]: (state, { payload }) => {
      state.status = 'updated'
      state.slideById = payload
    },
    [getSlideById.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [putSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [putSlides.fulfilled]: (state,) => {
      state.status = 'updated'
    },
    [putSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [postSlides.pending]: (state) => {
      state.status = 'loading'
    },
    [postSlides.fulfilled]: (state,) => {
      state.status = 'updated'
    },
    [postSlides.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
  }
})

export const selectAllSlides = state => state.slides.slides
export const selectSlideById = state => state.slides.slideById
export const selectSlidesStatus = state => state.slides.status

export default sliderSlice.reducer
