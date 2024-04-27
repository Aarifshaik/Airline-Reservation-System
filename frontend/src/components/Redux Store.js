import { configureStore, createSlice } from '@reduxjs/toolkit';

// Define a slice of the Redux store for the user data
const userSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    role: null,
  },
  reducers: {
    logIn: (state, action) => {
      state.isLoggedIn = true;
      state.role = action.payload.role;
    },
    logOut: (state) => {
      state.isLoggedIn = false;
      state.role = null;
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    user: userSlice.reducer,
  },
});

export default store;