import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  dataPoints: [],
  datapoint: null,
  token: "",
  loading: false,
  error: "",
};

export const createDataPoints = createAsyncThunk(
  "createDataPoints",
  async (data) => {
    console.log("entered in create data points action", data);
    const res = await fetch(
      `${BASE_URL}/api/v1/admin/datapoints/createdatapoint`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${AUTH_TOKEN}`,
        },
        body: JSON.stringify(data),
      }
    );
    console.log("res", res.json());
    return await res.json();
  }
);

export const updateDataPoint = createAsyncThunk(
  "updateDataPoint",
  async (obj) => {
    var { dataArr, id } = obj;
    const res = await fetch(
      `${BASE_URL}/api/v1/admin/datapoints/updatedatapoint/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${AUTH_TOKEN}`,
        },
        body: JSON.stringify(dataArr),
      }
    );
    console.log("res", res.json());
    return await res.json();
  }
);

export const getDataPoint = createAsyncThunk("getDataPoint", async (id) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/datapoints/getdatapoint/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${AUTH_TOKEN}`,
        },
      }
    );

    // console.log("response", response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("error in fetching get data point", error);
  }
});

export const getDataPoints = createAsyncThunk("getDataPoints", async () => {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/datapoints/getalldatapoints`,
      {
        headers: {
          "Content-Type": "application/json",
          "auth-token": `${AUTH_TOKEN}`,
        },
      }
    );

    // console.log("response", response.data.data)
    return response.data.data;
  } catch (error) {
    console.log("error in fetching get data point", error);
  }
});

export const deleteDataPoint = createAsyncThunk(
  "deleteDataPoint",
  async (id) => {
    try {
      const res = await fetch(
        `${BASE_URL}/api/v1/admin/datapoints/deletedatapoint/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            "auth-token": `${AUTH_TOKEN}`,
          }
        }
      );
      console.log("res", res.json());
      return await res.json();
    } catch (error) {
      console.log("error in fetching get data point", error);
    }
  }
);

const createDataPointsSlice = createSlice({
  name: "DataPoints",
  initialState,
  reducers: {},
  // extraReducers: (builder) => {
  //   builder
  //   .addCase(createDataPoints.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(createDataPoints.rejected, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = [];
  //     state.error = action.payload;
  //   })
  //   .addCase(createDataPoints.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = action.payload;
  //     state.error = "";
  //   })
      
  //   .addCase(updateDataPoint.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(updateDataPoint.rejected, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = [];
  //     state.error = action.payload;
  //   })
  //   .addCase(updateDataPoint.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = action.payload;
  //     state.error = "";
  //   })
      
  //   .addCase(getDataPoints.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(getDataPoints.rejected, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = [];
  //     state.error = action.payload;
  //   })
  //   .addCase(getDataPoints.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = action.payload
  //     state.error = "";
  //   })
      
      
  //   .addCase(getDataPoint.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(getDataPoint.rejected, (state, action) => {
  //     state.loading = false;
  //     state.datapoint = {};
  //     state.error = action.payload;
  //   })
  //   .addCase(getDataPoint.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.datapoint = action.payload;
  //     state.error = "";
  //   })
      
      
  //   .addCase(deleteDataPoint.pending, (state) => {
  //     state.loading = true;
  //   })
  //   .addCase(deleteDataPoint.rejected, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = [];
  //     state.error = action.payload;
  //   })
  //   .addCase(deleteDataPoint.fulfilled, (state, action) => {
  //     state.loading = false;
  //     state.dataPoints = action.payload;
  //     state.error = "";
  //   });
    
  // },
});

export default createDataPointsSlice.reducer;
