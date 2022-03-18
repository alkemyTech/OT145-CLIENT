import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit'
import privateGET from '../../Services/privateApiService.js'

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
      // Add any fetched posts to the array
      state.slides = state.slides.concat(action.payload)
    })
    .addCase(fetchSlides.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  }
})

export const fetchSlides = createAsyncThunk('slider/fetchSlides', async () => {
  const response = await privateGET(process.env.REACT_APP_API_GET_SLIDES)
  return response.data
})

// export const selectAllSlides = state => state

export default sliderSlice.reducer
