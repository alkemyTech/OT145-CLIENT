import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import privateGET, { privatePATCH, privatePOST, privateDelete} from "../../Services/privateApiService";

export const getUsers = createAsyncThunk("users/getUsers", async () => {
  return privateGET("https://ongapi.alkemy.org/api/users");
});

export const getUsersById = createAsyncThunk("users/getUsersByID", async (id) => {
    return privateGET(`https://ongapi.alkemy.org/api/users/${id}`);
});

export const patchUser = createAsyncThunk("users/patchUser", async (values) => {
  return privatePATCH('https://ongapi.alkemy.org/api/users', values.id, values);
});

export const postUser = createAsyncThunk("users/postUser", async (values) => {
  return privatePOST("https://ongapi.alkemy.org/api/users", values);
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  return privateDelete("https://ongapi.alkemy.org/api/users", id)
})


const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: null,
    userId: null,
    error: null
  },
  extraReducers: {
    //GET
    [getUsers.pending]: (state) => {
      state.status = "loading";
    },
    [getUsers.fulfilled]: (state, { payload }) => {
      state.users = payload.data;
      state.userId = null;
      state.status = "success";
    },
    [getUsers.rejected]: (state, {payload}) => {
      state.status = payload.data.message;
    },
    //GET BY ID
    [getUsersById.pending]: (state) => {
      state.status = "loading";
    },
    [getUsersById.fulfilled]: (state, { payload }) => {
      if (payload.success) {
        state.userId = payload.data;
        state.status = "success";
      } else {
        state.users = [];
        state.status = 'failed'
        state.error = payload.message;
      }
    },
    [getUsersById.rejected]: (state, {payload}) => {
      state.status = payload.data.message;
    },
    //PUT
    [patchUser.pending]: (state) => {
      state.status = "loading";
    },
    [patchUser.fulfilled]: (state) => {
      state.status = "edited";
    },
    [patchUser.rejected]: (state) => {
      state.status = 'failed';
    },
    //POST
    [postUser.pending]: (state) => {
      state.status = "loading";
    },
    [postUser.fulfilled]: (state) => {
      state.status = "created";
    },
    [postUser.rejected]: (state) => {
      state.status = 'failed'
    },
    //DELETE
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
