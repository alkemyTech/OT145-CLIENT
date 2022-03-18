import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import privateGET from "../../Services/privateApiService";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return await privateGET("https://ongapi.alkemy.org/api/users").then(
    (res) => res.data
  );
});

export const getUsersById = createAsyncThunk(
  "users/getUsersByID",
  async (id) => {
    return await privateGET(`https://ongapi.alkemy.org/api/users/${id}`).then(
      (res) => res.data
    );
  }
);

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.status = "success";
    },
    [getUsers.rejected]: (state) => {
      state.status = "failed";
    },
    [getUsersById.pending]: (state) => {
      state.status = "loading";
    },
    [getUsersById.fulfilled]: (state, { payload }) => {
      state.users = payload;
      state.status = "success";
    },
    [getUsersById.rejected]: (state) => {
      state.status = "failed";
    },
  },
});

export default userSlice.reducer;
