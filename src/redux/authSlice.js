/* Authentication Slice
  Manages user authentication state, registered users, and error handling */

  import { createSlice } from '@reduxjs/toolkit';

  const authSlice = createSlice({
   name: 'auth',
   // Initial state for authentication
   initialState: {
     user: null,
     isAuthenticated: false,
     registeredUsers: {},
     error: null
   },
   reducers: {
     // Handle successful signup
     signupSuccess: (state, action) => {
       state.registeredUsers[action.payload.email] = action.payload.password;
     },
     // Handle successful login
     loginSuccess: (state, action) => {
       state.user = action.payload;
       state.isAuthenticated = true;
       state.error = null;
     },
     // Handle login failure
     loginFailure: (state, action) => {
       state.error = action.payload;
     },
     // Handle user logout
     logout: (state) => {
       state.user = null;
       state.isAuthenticated = false;
       state.error = null;
     }
   }
  });
  
  export const { signupSuccess, loginSuccess, loginFailure, logout } = authSlice.actions;
  export default authSlice.reducer;