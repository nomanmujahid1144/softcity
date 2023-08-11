import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/createUserSlice";
import createDataPointsSlice from "../slices/createDataPointsSlice";
import createDataCollectionsSlice from "../slices/DataCollections/createDataCollectionsSlice";

const store = configureStore({
  reducer: {
    users: authSlice,
    createDataPoints: createDataPointsSlice,
    createDataCollections: createDataCollectionsSlice,
  },
});

export default store;
