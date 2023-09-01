import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  userGroups: [],
  token: "",
  loading: false,
  error: "",
};

export const createUserGroup = createAsyncThunk(
  "createUserGroup",
  async (data) => {
    console.log("entered in create User Group action", data);

    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/usergroups/createusergroup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
          body: JSON.stringify(data),
          // body:
        }
      );

      return await res.json();
    } catch (error) {
      console.log("error in createData collection");
    }
  }
);

export const getUserGroups = createAsyncThunk(
  "getUserGroups",
  async () => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/usergroups/getallusergroups`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);

export const deleteUserGroup = createAsyncThunk(
    "deleteUserGroup", async (ids) => {
    console.log("entered in Delete data collections action");

    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/admin/usergroups/deleteusergroups`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
          params: {
            IDS : ids
          }
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);

const userGroupSlice = createSlice({
  name: "UserGroups",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(createUserGroup.pending, (state) => {
      state.loading = true;
    })
    .addCase(createUserGroup.rejected, (state, action) => {
      state.loading = false;
      state.userGroups = [];
      state.error = action.payload;
    })
    .addCase(createUserGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.userGroups = action.payload;
      state.error = "";
    })
      
    .addCase(getUserGroups.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserGroups.rejected, (state, action) => {
      state.loading = false;
      state.userGroups = [];
      state.error = action.payload;
    })
    .addCase(getUserGroups.fulfilled, (state, action) => {
      state.loading = false;
      state.userGroups = action.payload;
      state.error = "";
    })
      
      
    .addCase(deleteUserGroup.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteUserGroup.rejected, (state, action) => {
      state.loading = false;
      state.userGroups = [];
      state.error = action.payload;
    })
    .addCase(deleteUserGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.userGroups = action.payload;
      state.error = "";
    });
    
  },
});

export default userGroupSlice.reducer;
