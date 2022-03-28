import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { 	
    getAllTestimonials,
	getTestimonialsById,
	postTestimonials,
	putTestimonials,
	deleteTestimonials, 
} from '../../Services/testimonials/testimonialsService'

export const getTestimonials = createAsyncThunk('testimonials/getTestimonials', () => {
  return getAllTestimonials()
})

export const getTestimonialById = createAsyncThunk('testimonials/getTestimonialById', (id) => {
  return getTestimonialsById(id)
})

export const deleteTestimonial = createAsyncThunk('testimonials/deleteTestimonial', (id) => {
  return deleteTestimonials(id)
})

export const postTestimonial = createAsyncThunk('testimonials/postTestimonial', (values) => {
  return postTestimonials(values)
})

export const putTestimonial = createAsyncThunk('testimonials/putTestimonial', (values) => {
  return putTestimonials(values.id, values)
})

const initialState = {
	testimonials: {
		data: [
			{
				name: "",
				description: "",
				order: "",
				image: "",
			},
		],
	},
	// slideById: null,
	status: "idle",
	error: null,
};

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  extraReducers: {
    [getTestimonials.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonials.fulfilled]: (state, { payload }) => {
      state.status = 'succeeded'
      state.testimonials = payload
    },
    [getTestimonials.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [deleteTestimonial.pending]: (state) => {
      state.status = 'loading'
    },
    [deleteTestimonial.fulfilled]: (state) => {
      state.status = 'updated'
    },
    [deleteTestimonial.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [getTestimonialById.pending]: (state) => {
      state.status = 'loading'
    },
    [getTestimonialById.fulfilled]: (state, { payload }) => {
      state.status = 'updated'
      state.testimonials.data = payload.data
    },
    [getTestimonialById.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [putTestimonial.pending]: (state) => {
      state.status = 'loading'
    },
    [putTestimonial.fulfilled]: (state,) => {
      state.status = 'updated'
    },
    [putTestimonial.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },

    [postTestimonial.pending]: (state) => {
      state.status = 'loading'
    },
    [postTestimonial.fulfilled]: (state,) => {
      state.status = 'updated'
    },
    [postTestimonial.rejected]: (state, { error }) => {
      state.status = 'failed'
      state.error = error.message
    },
  }
})

export default testimonialsSlice.reducer