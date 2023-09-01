import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  roles: [],
  token: "",
  loading: false,
  error: "",
};

export const createRole = createAsyncThunk(
  "createRole",
  async (data) => {
    console.log("entered in create User Group action", data);

    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/roles/createrole`,
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

export const updateRole = createAsyncThunk(
  "updateRole",
  async ({data, updateId}) => {
    console.log("entered in update role action", data);
    console.log("entered in update role action", updateId);

    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;
    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/roles/updaterole/${updateId}`,
        {
          method: "PUT",
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
      console.log("error in update role");
    }
  }
);

export const getAllRoles = createAsyncThunk(
  "getAllRoles",
  async () => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/roles/getallroles`,
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

export const deleteRoles = createAsyncThunk(
    "deleteRoles", async ({deleteId}) => {
    console.log("entered in Delete data collections action");

    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/admin/roles/deleterole/${deleteId}`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          }
        }
      );

      return response.data.data;
    } catch (error) {
      console.log("error in fetching get data collections", error);
    }
  }
);

const roleManagementSlice = createSlice({
  name: "RoleManagement",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(createRole.pending, (state) => {
      state.loading = true;
    })
    .addCase(createRole.rejected, (state, action) => {
      state.loading = false;
      state.roles = [];
      state.error = action.payload;
    })
    .addCase(createRole.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = action.payload;
      state.error = "";
    })
      
    .addCase(updateRole.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateRole.rejected, (state, action) => {
      state.loading = false;
      state.roles = [];
      state.error = action.payload;
    })
    .addCase(updateRole.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = action.payload;
      state.error = "";
    })
      
    .addCase(getAllRoles.pending, (state) => {
      state.loading = true;
    })
    .addCase(getAllRoles.rejected, (state, action) => {
      state.loading = false;
      state.roles = [];
      state.error = action.payload;
    })
    .addCase(getAllRoles.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = action.payload;
      state.error = "";
    })
      
      
    .addCase(deleteRoles.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteRoles.rejected, (state, action) => {
      state.loading = false;
      state.roles = [];
      state.error = action.payload;
    })
    .addCase(deleteRoles.fulfilled, (state, action) => {
      state.loading = false;
      state.roles = action.payload;
      state.error = "";
    });
    
  },
});

export default roleManagementSlice.reducer;
