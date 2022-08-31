import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getAllContacts,
  addNewContact,
  deleteContact,
} from '../services/contactsApi';

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
