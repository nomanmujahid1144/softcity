import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { AUTH_TOKEN, BASE_URL } from "../constants/reduxContants";
import axios from "axios";
const initialState = {
  msg: "",
  user: null,
  token: "",
  loading: false,
  error: "",
};

export const createDataPoints = createAsyncThunk(
  "createDataPoints",
  async (data) => {
    console.log("entered in create data points action", data);
    const res = await fetch(`${BASE_URL}/api/v1/admin/datapoints/createdatapoint`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": `${AUTH_TOKEN}`,
      },
      body: JSON.stringify(data)
    });
    console.log("res", res.json());
    return await res.json();
  }
);

export const getDataPoint = createAsyncThunk("getDataPoint", async (id) => {
  try {
    console.log(id)
    const response = await axios.get(
      `${BASE_URL}/api/v1/admin/datapoints/getalldatapoint/${id}`,
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

const createDataPointsSlice = createSlice({
  name: "DataPoints",
  initialState,
  reducers: {},
  // extraReducers: {
  //   [createDataPoints.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   [createDataPoints.fulfilled]: (state, { payload: { error, msg } }) => {
  //     state.loading = false;
  //     state.user.push(action.payload);
  //     if (error) {
  //       state.error = error;
  //     } else {
  //       state.msg = msg;
  //     }
  //   },
  //   [createDataPoints.rejected]: (state, action) => {
  //     state.loading = true;
  //     state.error = action.payload;
  //   },
  //   // GET
  //   [getDataPoints.pending]: (state, action) => {
  //     state.loading = true;
  //   },
  //   // [getDataPoints.fulfilled]: (state, { payload: { error, msg } }) => {
  //   [getDataPoints.fulfilled]: (state, action) => {
  //     state.loading = false;
  //     // state.user = action.payload;
  //     state.user = action.payload;
  //     console.log("state.user", state, "action", action.payload);
  //     if (action.payload.error) {
  //       state.error = action.payload.error;
  //     } else {
  //       state.msg = action.payload.msg;
  //     }
  //   },
  //   [getDataPoints.rejected]: (state, action) => {
  //     state.loading = true;
  //     state.error = action.payload;
  //   },
  // },

  extraReducers: (builder) => {
    builder.addCase(createDataPoints.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(createDataPoints.rejected, (state, action) => {
        state.loading = false;
        (state.user = []), (state.error = action.payload);
      }),
      builder.addCase(createDataPoints.fulfilled, (state, action) => {
        (state.loading = false), state.user.push(action.payload);
        // (state.user = [...state.user, ...action.payload]);
        state.error = "";
      });
    builder.addCase(getDataPoints.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(getDataPoints.rejected, (state, action) => {
        state.loading = false;
        (state.user = []), (state.error = action.payload);
      }),
      builder.addCase(getDataPoints.fulfilled, (state, action) => {
        (state.loading = false),
          (state.user = action.payload),
          // (state.user = [...state.user, ...action.payload]);

          (state.error = "");
      });
  },
});

export default createDataPointsSlice.reducer;
