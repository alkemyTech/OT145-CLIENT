import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getCATEGORIES,getCATEGORIESID } from '../../Peticiones/categoriesService';


export const getCategories = createAsyncThunk(
    "category/getCategories",getCATEGORIES
);

export const getCategoriesById = createAsyncThunk(
    "category/getCategoriesByID",getCATEGORIESID
);

const categorySlice = createSlice({
    name: 'categories',
    initialState:{
        categories: [],
        status: null,
        categoriesById:[]
    },
    extraReducers:{
        [getCategories.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategories.fulfilled]: (state, {payload}) => {
            state.categories = payload.data
            state.status = 'success'
        },
        [getCategories.rejected]: (state) => {
            state.status = 'failed'
        },
        [getCategoriesById.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategoriesById.fulfilled]: (state, {payload}) => {
            if(payload.success){
                state.categoriesById = payload.data
                state.status = 'success'
            }else{
                state.categoriesById = []
                state.status = payload.data.message
            }
            
        },
        [getCategoriesById.rejected]: (state) => {
            state.status = 'failed'
        },

    }
});


export default categorySlice.reducer;