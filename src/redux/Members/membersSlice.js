import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import privateGET, { privateDelete, privatePATCH, privatePOST } from "../../Services/privateApiService";

export const getMembers = createAsyncThunk("members/getMembers",  () => {
  return  privateGET("https://ongapi.alkemy.org/api/members")
});

export const getMembersById = createAsyncThunk("members/getMembersByID", (id) => {
    return privateGET(`https://ongapi.alkemy.org/api/members`, id)
});

export const putMembers = createAsyncThunk("members/putMembers", (values) => {
  console.log(values);
  return privatePATCH('https://ongapi.alkemy.org/api/members', values.id, values)
})

export const postMembers = createAsyncThunk("members/postMembers", (values) => {
  return privatePOST('https://ongapi.alkemy.org/api/members', values)
})

export const deleteMembers = createAsyncThunk("members/deleteMembers", (id) => {
  return privateDelete('https://ongapi.alkemy.org/api/members', id)
})

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
    memberId: null
  },
  extraReducers: {
    [getMembers.pending]: (state) => {
      state.status = "loading";
    },
    [getMembers.fulfilled]: (state, { payload }) => {
      state.members = payload.data;
      state.status = "success";
    },
    [getMembers.rejected]: (state) => {
      state.status = "failed";
    },
    [getMembersById.pending]: (state) => {
      state.status = "loading";
    },
    [getMembersById.fulfilled]: (state, { payload }) => {
      state.memberId = payload.data;
      state.status = "success";
    },
    [getMembersById.rejected]: (state) => {
      state.status = "failed";
    },
    [putMembers.pending]: (state) => {
      state.status = "loading";
    },
    [putMembers.fulfilled]: (state) => {
      state.status = "edited";
    },
    [putMembers.rejected]: (state) => {
      state.status = "failed";
    },
    [postMembers.pending]: (state) => {
      state.status = "loading";
    },
    [postMembers.fulfilled]: (state) => {
      state.status = "created";
    },
    [postMembers.rejected]: (state) => {
      state.status = "failed";
    },
    [deleteMembers.pending]: (state) => {
      state.status = "loading";
    },
    [deleteMembers.fulfilled]: (state) => {
      state.status = "deleted";
    },
    [deleteMembers.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default membersSlice.reducer;