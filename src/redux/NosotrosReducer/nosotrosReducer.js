import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import privateGET from "../../Services/privateApiService";

export const getMembers = createAsyncThunk('members/getMembers',async () => {
    try{
        const response = await privateGET(`https://ongapi.alkemy.org/api/members`)
        return response;
    }
    catch(err){
        console.log(err);
    }

})

const memberSlice = createSlice({
    name:'members',
    initialState : {
        members : [],
        status : null,
    },
    extraReducers : {
        [getMembers.pending] : (state) => {
            state.status = "loading"
        },

        [getMembers.fulfilled] : (state,{payload}) => {
            state.members = payload
            state.status = "success"
        },

        [getMembers.rejected] : (state) => {
            state.status = "failed"
        },
    },
})

export default memberSlice.reducer;