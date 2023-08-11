import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  user: [],
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
        `${BASE_URL}/api/collections/createdatacollectiontemplate`,
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

      console.log("res", res.json());
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
        `${BASE_URL}/api/collections/getalldatacollectiontemplates`,
        {
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          },
        }
      );

      return response.data;
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
    builder.addCase(createDataCollections.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(createDataCollections.rejected, (state, action) => {
        state.loading = false;
        (state.user = []), (state.error = action.payload);
      }),
      builder.addCase(createDataCollections.fulfilled, (state, action) => {
        (state.loading = false), state.user.push(action.payload);
        // (state.user = [...state.user, ...action.payload]);
        state.error = "";
      });
    builder.addCase(getDataCollections.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getDataCollections.rejected, (state, action) => {
        state.loading = false;
        (state.user = []), (state.error = action.payload);
      }),
      builder.addCase(getDataCollections.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          // (state.user = [...state.user, ...action.payload]);

          (state.error = "");
      });
  },
});

export default createDataCollectionsSlice.reducer;
