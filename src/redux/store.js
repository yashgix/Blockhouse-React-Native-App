/* Redux Store Configuration
  Configures store with auth reducer and middleware settings */

  import { configureStore } from '@reduxjs/toolkit';
  import authReducer from './authSlice';
  
  // Configure Redux store with auth reducer
  export const store = configureStore({
   reducer: {
     auth: authReducer
   },
   // Disable serializable check for Redux toolkit
   middleware: (getDefaultMiddleware) => 
     getDefaultMiddleware({
       serializableCheck: false
     })
  });