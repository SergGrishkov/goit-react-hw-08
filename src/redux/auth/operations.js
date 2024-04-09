import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// const axios = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
// });

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const API_SIGN_UP = "/users/signup";
const API_LOGIN = "/users/login";
const API_LOGOUT = "/users/logout";
const API_GET_CURR_USER = "users/current";

const prefix = {
  register: "auth/register",
  login: "auth/login",
  logout: "auth/logout",
  refresh: "auth/refresh",
};

const setAuthHeader = (token) => {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common["Authorization"] = "";
};

export const userRegister = createAsyncThunk(
  prefix.register,
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post(API_SIGN_UP, userInfo);
      setAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(prefix.login, async (userInfo, thunkAPI) => {
  try {
    const response = await axios.post(API_LOGIN, userInfo);
    setAuthHeader(response.data.token);
    toast.success("Login successful");
    return response.data;
  } catch (error) {
    toast.error("Your enter wrong email or password");
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const userLogOut = createAsyncThunk(prefix.logout, async (_, thunkAPI) => {
  try {
    await axios.post(API_LOGOUT);
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  prefix.refresh,
  async (_, thunkAPI) => {
    const {
      auth: { token },
    } = thunkAPI.getState();
    setAuthHeader(token);
    try {
      const response = await axios.get(API_GET_CURR_USER);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const reduxState = getState();
      const savedToken = reduxState.auth.token;

      return savedToken !== null;
    },
  }
);
