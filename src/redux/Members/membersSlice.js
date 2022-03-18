import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import privateGET from "../../Services/privateApiService";

export const getMembers = createAsyncThunk("users/getMembers", async () => {
  return await privateGET("https://ongapi.alkemy.org/api/members").then(
    (res) => res.data
  );
});

export const getMembersById = createAsyncThunk(
  "users/getMembersByID",
  async (id) => {
    return await privateGET(`https://ongapi.alkemy.org/api/members/${id}`).then(
      (res) => res.data
    );
  }
);

const membersSlice = createSlice({
  name: "members",
  initialState: {
    members: [],
    status: null,
  },
  extraReducers: {
    [getMembers.pending]: (state) => {
      state.status = "loading";
    },
    [getMembers.fulfilled]: (state, { payload }) => {
      state.members = payload;
      state.status = "success";
    },
    [getMembers.rejected]: (state) => {
      state.status = "failed";
    },
    [getMembersById.pending]: (state) => {
      state.status = "loading";
    },
    [getMembersById.fulfilled]: (state, { payload }) => {
      state.members = payload;
      state.status = "success";
    },
    [getMembersById.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default membersSlice.reducer;