import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isAuthenticated: false,
    registeredUsers: {},
    error: null
  },
  reducers: {
    signupSuccess: (state, action) => {
      state.registeredUsers[action.payload.email] = action.payload.password;
    },
    loginSuccess: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    loginFailure: (state, action) => {
      state.error = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    }
  }
});

export const { signupSuccess, loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;