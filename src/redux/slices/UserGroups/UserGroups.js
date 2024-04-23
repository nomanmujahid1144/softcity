import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
import { axiosInstance } from "../../../constants/axiosInstance";
const initialState = {
  msg: "",
  userGroups: [],
  singleUserGroup: {},
  token: "",
  loading: false,
  error: "",
};

export const createUserGroup = createAsyncThunk("createUserGroup", async ({userGroup, alert}) => {
    console.log("entered in create User Group action", userGroup);
    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
    try {
      const res = await axiosInstance.post(`/api/v1/admin/usergroups/createusergroup`, JSON.stringify(userGroup),{
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      alert.success('User group Created Successfully');
      return await res.data;
    } catch (error) {
      console.log("error in createData collection");
    }
  }
);
export const updateUserGroup = createAsyncThunk("updateUserGroup", async ({userGroup, userGroupId, alert}) => {
    console.log("entered in create User Group action", userGroup);
    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
    try {
      const res = await axiosInstance.post(`/api/v1/admin/usergroups/update-user-group`, JSON.stringify(userGroup),{
        headers: {
            "Content-Type": "application/json"
        },
        params: {
          id: userGroupId
      }});
      alert.success('User group Updated Successfully');
      return await res.data;
    } catch (error) {
      console.log("error in createData collection");
    }
  }
);

export const getUserGroup = createAsyncThunk(
  "getUserGroup",
  async (id) => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/usergroups/getusergroup/${id}`,
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
      
    .addCase(updateUserGroup.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateUserGroup.rejected, (state, action) => {
      state.loading = false;
      state.singleUserGroup = {};
      state.error = action.payload;
    })
    .addCase(updateUserGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUserGroup = action.payload;
      state.error = "";
    })
      
    .addCase(getUserGroup.pending, (state) => {
      state.loading = true;
    })
    .addCase(getUserGroup.rejected, (state, action) => {
      state.loading = false;
      state.singleUserGroup = {};
      state.error = action.payload;
    })
    .addCase(getUserGroup.fulfilled, (state, action) => {
      state.loading = false;
      state.singleUserGroup = action.payload;
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
