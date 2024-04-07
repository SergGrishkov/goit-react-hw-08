import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const instance = axios.create({
  baseURL: "https://6607f036a2a5dd477b13b8c7.mockapi.io",
});

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
      const response = await instance.get(API_GET_CONTACTS);
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
      const response = await instance.post(API_GET_CONTACTS, newContact);
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
      const response = await instance.delete(
        setPathParameters(API_DELETE_CONTACTS, { id })
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
