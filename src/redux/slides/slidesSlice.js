import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import { getAllSlides, getSlideById, deleteSlide, putSlide, postSlide } from '../../Services/slider/slidesService'

export const fetchSlides = createAsyncThunk('slider/fetchSlides', () => {
  return getAllSlides()
})

export const getSlidesById = createAsyncThunk('slider/getSlideId', (id) => {
  return getSlideById(id)
})

export const deleteSlides = createAsyncThunk('slider/deleteSlides', (id) => {
  return deleteSlide(id)
})

export const putSlides = createAsyncThunk('slider/putSlides', (id, values) => {
  return putSlide(id, values)
})

export const postSlides = createAsyncThunk('slider/postSlides', (values) => {
  return postSlide(values)
})

const initialState = {
  slides: [
    {
      'name': '',
      'description': '',
      'order': '',
      'image': ''
  }
  ],
  // slideById: null,
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
      state.slides = payload
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
