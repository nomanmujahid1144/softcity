import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BASE_URL } from "./../constants/reduxContants";

const initialState = {
  msg: "",
  user: "",
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

const createUserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [createUser.pending]: (state, action) => {
      state.loading = true;
    },
    [createUser.fulfilled]: (state, { payload: { error, msg } }) => {
      state.loading = false;
      if (error) {
        state.error = error;
      } else {
        state.msg = msg;
      }
    },
    [createUser.rejected]: (state, action) => {
      state.loading = true;
    },
  },
});

export default createUserSlice.reducer;
