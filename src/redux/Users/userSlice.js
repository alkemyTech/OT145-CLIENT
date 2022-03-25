import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUsersService, getUsersIDService, postUsersService, patchUsersService, deleteUsersService } from "../../Services/userServices";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return getUsersService();
});

export const getUsersById = createAsyncThunk("users/getUsersByID", async (id) => {
  return getUsersIDService(id);
});

export const patchUser = createAsyncThunk("users/patchUser", async (values) => {
  return patchUsersService(values.id, values);
});

export const postUser = createAsyncThunk("users/postUser", async (values) => {
  return postUsersService(values);
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  return deleteUsersService(id)
})


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    userId: null,
  },
  extraReducers: {
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.status = "success";
    },
    [getUsers.rejected]: (state, { payload }) => {
      state.status = payload.data.message;
    },
    [getUsersById.pending]: (state) => {
      state.status = "loading";
    },
    [getUsersById.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.userId = payload.data;
        state.status = "success";
      } else {
        state.users = [];
        state.status = payload.data.message;
      }
    },
    [getUsersById.rejected]: (state, { payload }) => {
      state.status = payload.data.message;
    },
    [patchUser.pending]: (state) => {
      state.status = "loading";
    },
    [patchUser.fulfilled]: (state) => {
      state.status = "edited";
    },
    [patchUser.rejected]: (state) => {
      state.status = 'failed';
    },
    [postUser.pending]: (state) => {
      state.status = "loading";
    },
    [postUser.fulfilled]: (state) => {
      state.status = "created";
    },
    [postUser.rejected]: (state) => {
      state.status = 'failed'
    },
    [deleteUser.pending]: (state) => {
      state.status = "loading";
    },
    [deleteUser.fulfilled]: (state) => {
      state.status = "deleted";
    },
    [deleteUser.rejected]: (state) => {
      state.status = 'failed'
    },
  },
});

export default userSlice.reducer;
