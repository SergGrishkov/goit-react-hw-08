import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const axios = axios.create({
//   baseURL: "https://connections-api.herokuapp.com",
// });

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const API_GET_CONTACTS = "/contacts";
const API_DELETE_CONTACTS = `/contacts/{id}`;

const prefix = {
  fetchAll: "contacts/fetchAll",
  addContact: "contacts/addContact",
  deleteContact: "contacts/deleteContact",
};

function setPathParameters(url, params) {
  let path = url;
  for (const key in params) {
    path = path.replace(`{${key}}`, params[key]);
  }
  return path;
}

export const getContacts = createAsyncThunk(
  prefix.fetchAll,
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(API_GET_CONTACTS);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  prefix.addContact,
  async (newContact, thunkAPI) => {
    try {
      const response = await axios.post(API_GET_CONTACTS, newContact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  prefix.deleteContact,
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        setPathParameters(API_DELETE_CONTACTS, { id })
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
