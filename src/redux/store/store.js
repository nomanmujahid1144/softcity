import { configureStore } from "@reduxjs/toolkit";
import authSlice from "../slices/createUserSlice";
import createDataPointsSlice from "../slices/createDataPointsSlice";
import createDataCollectionsSlice from "../slices/DataCollections/createDataCollectionsSlice";
import userGroups from "../slices/UserGroups/UserGroups";
import roleManagement from "../slices/RolesManagement/roleManagement";
import auth from "../slices/authSlice";
import createCompanySlice from "../slices/Company/createCompanySlice";

const store = configureStore({
  reducer: {
    user: authSlice,
    auth: auth,
    createDataPoints: createDataPointsSlice,
    createDataCollections: createDataCollectionsSlice,
    userGroups: userGroups,
    roleManagement: roleManagement,
    company: createCompanySlice
  }
});

export default store;
