import * as contactActions from './actions';
import { createReducer } from '@reduxjs/toolkit';
import {
  getContacts,
  addContact,
  removeContact,
} from '../reduxStore/operations';

const initState = {
  items: [],
  filter: '',
  isLoading: false,
};

// Reducer

export const rootReducer = createReducer(initState, {
  [getContacts.pending]: state => {
    state.isLoading = true;
  },
  [getContacts.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  [getContacts.rejected]: state => {
    state.isLoading = false;
  },

  [addContact.pending]: state => {
    state.isLoading = true;
  },
  [addContact.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  [addContact.rejected]: state => {
    state.isLoading = false;
  },

  [removeContact.pending]: state => {
    state.isLoading = true;
  },
  [removeContact.fulfilled]: (state, action) => {
    state.items = action.payload;
    state.isLoading = false;
  },
  [removeContact.rejected]: state => {
    state.isLoading = false;
  },

  [contactActions.filterValue]: (state, action) => {
    state.filter = action.payload;
  },
});
