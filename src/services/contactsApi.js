import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

// USER API

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const signup = async userData => {
  const { data } = await axios.post('/users/signup', userData);
  token.set(data.token);
  return data;
};

export const login = async userData => {
  const { data } = await axios.post('/users/login', userData);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  await axios.post('/users/logout');
  token.unset();
};

export const getUser = async userToken => {
  token.set(userToken);
  const { data } = await axios.get('/users/current');
  return data;
};

// CONTACTS API

export const getAllContacts = async () => {
  const { data } = await axios.get('/contacts');
  return data;
};

export const addNewContact = async newContact => {
  await axios.post(`/contacts`, newContact);
  const { data } = await axios.get('/contacts');
  return data;
};

export const deleteContact = async contactId => {
  await axios.delete(`/contacts/${contactId}`);
  const { data } = await axios.get('/contacts');
  return data;
};
