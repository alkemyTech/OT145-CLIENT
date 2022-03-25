import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import privateGET, { privateDelete, privatePUT, privatePOST } from '../../Services/privateApiService.js'

const initialState = {
  slides: [],
  slideById: {},
  status: 'idle',
  error: null
}
export const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  extraReducers(builder) {
    builder
    .addCase(fetchSlides.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchSlides.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.slides = action.payload
    })
    .addCase(fetchSlides.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })

    .addCase(deleteSlides.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(deleteSlides.fulfilled, (state, action) => {
      state.status = 'updated'
      // console.log(action)
      // state.slides = state.slides.concat(action.payload)
      // state.slides = state.find((elemento) => elemento.id === Number(id))
    })
    .addCase(deleteSlides.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })

    .addCase(getSlideById.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(getSlideById.fulfilled, (state, action) => {
      state.status = 'updated'
      // console.log(action)
      // state.slides = state.slides.concat(action.payload)
      // state.slides = state.find((elemento) => elemento.id === Number(id))
      state.slideById = action.payload
    })
    .addCase(getSlideById.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

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

export const selectAllSlides = state => state.slides.slides
export const selectSlideById = state => state.slides.slideById
export const selectSlidesStatus = state => state.slides.status

export default sliderSlice.reducer
