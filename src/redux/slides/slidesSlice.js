import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import privateGET, { privateDelete } from '../../Services/privateApiService.js'

const initialState = {
  slides: [],
  status: 'idle',
  error: null
}
const sliderSlice = createSlice({
  name: 'slider',
  initialState,
  reducers: {
    
  },
  extraReducers(builder) {
    builder
    .addCase(fetchSlides.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(fetchSlides.fulfilled, (state, action) => {
      state.status = 'succeeded'
      state.slides = state.slides.concat(action.payload)
    })
    .addCase(fetchSlides.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })

    .addCase(deleteSlides.pending, (state, action) => {
      state.status = 'loading'
    })
    .addCase(deleteSlides.fulfilled, (state, action) => {
      state.status = 'succeeded'
      console.log(action)
      // state.slides = state.slides.concat(action.payload)
      // state.slides = state.find((elemento) => elemento.id === Number(id))
    })
    .addCase(deleteSlides.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export const fetchSlides = createAsyncThunk('slider/fetchSlides', async () => {
  const response = await privateGET(process.env.REACT_APP_API_GET_SLIDES)
  return response.data
})

export const deleteSlides = createAsyncThunk('slider/deleteSlides', async (id) => {
  const response = await privateDelete(process.env.REACT_APP_API_GET_SLIDES, id)
  return response.data
})

// export const selectAllSlides = state => state

export default sliderSlice.reducer
