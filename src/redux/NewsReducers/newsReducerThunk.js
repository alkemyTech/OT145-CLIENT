import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import privateGET from '../../Services/privateApiService'

export const getNews = createAsyncThunk(
    'news/getNews', 
    async()=>{
        try{
            const response= await privateGET('https://ongapi.alkemy.org/api/news')
            return response
        }catch(error){
            console.log(error)
        }
})

export const getNewsById = createAsyncThunk(
    'news/getNewsById', 
    async(id)=>{
        try{
            const response= await privateGET(`https://ongapi.alkemy.org/api/news/${id}`)
            return response
        }catch(error){
            console.log(error)
        }
})

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        news:[],
        status: null, 
    },
       extraReducers:{
           [getNews.pending]:(state)=>{
               state.status = 'loading'
           },
           [getNews.fulfilled]:(state,{payload})=>{
              state.news=payload.data 
               state.status='success'
           },
           [getNewsById.rejected]:(state)=>{
               state.status= "failed"            
           },
           [getNewsById.pending]:(state)=>{
            state.status = 'loading'
        },
        [getNewsById.fulfilled]:(state,{payload})=>{
           state.news=payload.data 
            state.status='success'
        },
        [getNewsById.rejected]:(state)=>{
            state.status= "failed"            
        },
       }
})
export default newsSlice.reducer