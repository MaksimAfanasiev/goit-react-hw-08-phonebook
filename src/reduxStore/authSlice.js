import { createSlice } from '@reduxjs/toolkit';
import { register, logIn, logOut, getCurrentUser } from './operations';

const initState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initState,
  extraReducers: {
    [register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
    },
    [logOut.fulfilled](state) {
      state.user.name = null;
      state.user.email = null;
      state.token = null;
      state.isLoggedIn = false;
    },
    [getCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [getCurrentUser.fulfilled](state, action) {
      state.user.name = action.payload?.name;
      state.user.email = action.payload?.email;
      state.isRefreshingUser = false;
      state.isLoggedIn = action.payload ? true : false;
    },
    [getCurrentUser.rejected](state, action) {
      state.isRefreshingUser = false;
    },
  },
});

export const authReducer = authSlice.reducer;
export const actions = authSlice.actions;
