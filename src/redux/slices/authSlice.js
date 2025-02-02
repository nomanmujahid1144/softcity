import { createSlice } from "@reduxjs/toolkit";
console.log(localStorage.getItem("roles"), 'localStorage.getItem("roles")')
const authSlice = createSlice({
    name: "auth",
    initialState: {
      authToken: localStorage.getItem("AUTH_TOKEN") || null, // Initialize authToken from localStorage if available
      userRole: localStorage.getItem("role") || null, // Initialize userRole to null
      id: localStorage.getItem("id") || null, // Initialize userRole to null
      roles: JSON.parse(localStorage.getItem("roles")) || null, // Initialize userRole to null
      // ... other authentication-related state properties
    },
    reducers: {
      // Add a reducer to update the authToken in the state
      setUserAuth: (state, action) => {
        state.authToken = action.payload.authToken;
        state.userRole = action.payload.userRole;
        state.id = action.payload.id;
        state.roles = action.payload.roles;
      },
      clearUserAuth: (state) => {
        state.authToken = null;
        state.userRole = null; // Clear userRole when logging out
        state.id = null; // Clear userRole when logging out
        state.roles = null; // Clear userRole when logging out
      },
      // ... other authentication-related reducers
    },
  });
  
  export const { setUserAuth, clearUserAuth } = authSlice.actions;
  export default authSlice.reducer;
  