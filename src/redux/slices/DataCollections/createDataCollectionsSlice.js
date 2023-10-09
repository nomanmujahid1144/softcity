import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  collectionTemplates: [],
  collectionTemplate: {},
  token: "",
  loading: false,
  error: "",
};

export const createDataCollections = createAsyncThunk(
  "createDataCollections",
  async (data) => {
    console.log("entered in create data collections action", data);

    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;

    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/datatemplate/createdatatemplate`,
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

export const updateDataCollections = createAsyncThunk(
  "updateDataCollections",
  async ({data, updateId}) => {
    console.log("entered in create data collections action", data);

    // const { selectedDataPoints, TemplateName, TemplateDescription } = data;

    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/datatemplate/updatedatatemplate/${updateId}`,
        {
          method: "PATCH",
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

export const getDataCollections = createAsyncThunk(
  "getDataCollections",
  async () => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/datatemplate/getalldatatemplates`,
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
export const getDataCollection = createAsyncThunk(
  "getDataCollection",
  async ({id}) => {
    console.log("entered in get data collections action");

    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/admin/datatemplate/getdatatemplate/${id}`,
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

export const deleteDataCollection = createAsyncThunk( "deleteDataCollection", async (ids) => {
    console.log("entered in Delete data collections action");

    try {
      const response = await axios.delete(
        `${BASE_URL}/api/v1/admin/datatemplate/deletedatatemplates`,
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

const createDataCollectionsSlice = createSlice({
  name: "DataCollections",
  initialState,
  reducers: {},
  extraReducers: (builder) => {

    builder
    .addCase(createDataCollections.pending, (state) => {
      state.loading = true;
    })
    .addCase(createDataCollections.rejected, (state, action) => {
      state.loading = false;
      state.collectionTemplate = {};
      state.error = action.payload;
    })
    .addCase(createDataCollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionTemplate = action.payload;
      state.error = "";
    })
      
    .addCase(updateDataCollections.pending, (state) => {
      state.loading = true;
    })
    .addCase(updateDataCollections.rejected, (state, action) => {
      state.loading = false;
      state.collectionTemplates = [];
      state.error = action.payload;
    })
    .addCase(updateDataCollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionTemplates = action.payload;
      state.error = "";
    })
      
    .addCase(getDataCollections.pending, (state) => {
      state.loading = true;
    })
    .addCase(getDataCollections.rejected, (state, action) => {
      state.loading = false;
      state.collectionTemplates = [];
      state.error = action.payload;
    })
    .addCase(getDataCollections.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionTemplates = action.payload;
      state.error = "";
    })
      
      
    .addCase(getDataCollection.pending, (state) => {
      state.loading = true;
    })
    .addCase(getDataCollection.rejected, (state, action) => {
      state.loading = false;
      state.collectionTemplate = {};
      state.error = action.payload;
    })
    .addCase(getDataCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionTemplate = action.payload;
      state.error = "";
    })
      
      
    .addCase(deleteDataCollection.pending, (state) => {
      state.loading = true;
    })
    .addCase(deleteDataCollection.rejected, (state, action) => {
      state.loading = false;
      state.collectionTemplates = [];
      state.error = action.payload;
    })
    .addCase(deleteDataCollection.fulfilled, (state, action) => {
      state.loading = false;
      state.collectionTemplates = action.payload;
      state.error = "";
    });
    
  },
});

export default createDataCollectionsSlice.reducer;
