import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import privateGET from '../../Services/privateApiService';


export const getCategories = createAsyncThunk(
    "category/getCategories",
    async () => {
        try{
            const response = await privateGET("https://ongapi.alkemy.org/api/categories")
            return response
        }catch(err){
            console.log(err);
        }
    }
);

export const getCategoriesById = createAsyncThunk(
    "category/getCategoriesByID",
    async (id) => {
        try{
            const response = await privateGET(`https://ongapi.alkemy.org/api/categories/${id}`)
            return response;
        }catch(err){
            console.log(err);
        }
    }
);

const categorySlice = createSlice({
    name: 'categories',
    initialState:{
        categories: [],
        status: null,
    },
    extraReducers:{
        [getCategories.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategories.fulfilled]: (state, {payload}) => {
            state.users = payload.data
            state.status = 'success'
        },
        [getCategories.rejected]: (state) => {
            state.status = 'failed'
        },
        [getCategoriesById.pending]: (state) => {
            state.status = 'loading'
        },
        [getCategoriesById.fulfilled]: (state, {payload}) => {
            state.users = payload.data
            state.status = 'success'
        },
        [getCategoriesById.rejected]: (state) => {
            state.status = 'failed'
        },

    }
});


export default categorySlice.reducer;