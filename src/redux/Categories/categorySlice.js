import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import privateGET from '../../Services/privateApiService';


export const getCategories = createAsyncThunk(
    "category/getCategories",() => {
        return privateGET("https://ongapi.alkemy.org/api/categories")
    }
);

export const getCategoriesById = createAsyncThunk(
    "category/getCategoriesByID",(id) => {
        return privateGET(`https://ongapi.alkemy.org/api/categories/${id}`)
    }
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
                state.categories = []
                state.status = payload.data.message
            }
            
        },
        [getCategoriesById.rejected]: (state) => {
            state.status = 'failed'
        },

    }
});


export default categorySlice.reducer;