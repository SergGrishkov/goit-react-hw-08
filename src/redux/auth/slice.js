import { createSlice } from "@reduxjs/toolkit";
import { refreshUser, userLogIn, userLogOut, userRegister } from "./operations";

const initialUserInfo = {
  user: {
    name: "",
    email: "",
  },
  token: "",
  isLoggedIn: false,
  loader: false,
  error: null,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialUserInfo,
  extraReducers: (builder) =>
    builder
      .addCase(userRegister.pending, (state) => {
        state.loader = true;
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(userLogIn.pending, (state) => {
        state.loader = true;
      })
      .addCase(userLogIn.fulfilled, (state, action) => {
        state.loader = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
      })
      .addCase(userLogIn.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(userLogOut.pending, (state) => {
        state.loader = true;
      })
      .addCase(userLogOut.fulfilled, (state) => {
        state.loader = false;
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(userLogOut.rejected, (state, action) => {
        state.loader = false;
        state.error = action.payload;
      })
      .addCase(refreshUser.pending, (state) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(refreshUser.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      }),
});

export const authReducer = authSlice.reducer;
