import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signup,
  login,
  logout,
  getUser,
  getAllContacts,
  addNewContact,
  deleteContact,
} from '../services/contactsApi';

// USER OPERATIONS

export const register = createAsyncThunk('auth/register', async userData => {
  const user = await signup(userData);
  return user;
});

export const logIn = createAsyncThunk('auth/login', async userData => {
  const user = await login(userData);
  return user;
});

export const logOut = createAsyncThunk('auth/logout', async () => {
  await logout();
});

export const getCurrentUser = createAsyncThunk(
  'auth/fetchCurrentUser',
  async (_, ThunkAPI) => {
    const currentState = ThunkAPI.getState();
    const token = currentState.auth.token;

    if (token === null) {
      return;
    }
    const user = await getUser(currentState.auth.token);
    return user;

    // try {
    //   const user = await getUser(currentState.auth.token);
    //   return user;
    // } catch (error) {}
    // const user = await getUser(currentState.auth.token);
    // return user;
  }
);

// CONTACTS OPERATIONS

export const getContacts = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    const contacts = await getAllContacts();
    return contacts;
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async newContact => {
    const contacts = await addNewContact(newContact);
    return contacts;
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async contactId => {
    const contacts = await deleteContact(contactId);
    return contacts;
  }
);
