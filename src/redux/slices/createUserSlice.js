import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./../constants/reduxContants";

const initialState = {
  msg: "",
  user: {},
  users: [],
  token: "",
  loading: false,
  error: "",
};

export const createUser = createAsyncThunk("createuser", async (data) => {
  console.log("entered in create user action", data);
  const res = await fetch(`${BASE_URL}/api/auth/createuser`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("res", res.json());
  return await res.json();
});
export const getAllUsers = createAsyncThunk("getAllUsers", async (data) => {
  console.log("entered in create user action", data);
  const res = await fetch(`${BASE_URL}/api/auth/getallusers`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await res.json();
});

const createUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createUser.pending, (state) => {
      state.loading = true;
    })
    .addCase(createUser.rejected, (state, action) => {
      state.loading = false;
      state.user = [];
      state.error = action.payload;
    })
    .addCase(createUser.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload;
      state.error = "";
    })
    
    .addCase(getAllUsers.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllUsers.rejected, (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.payload;
    })
    .addCase(getAllUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    })
    
  },
});

export default createUserSlice.reducer;
