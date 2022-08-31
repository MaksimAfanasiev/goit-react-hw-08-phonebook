import axios from 'axios';

axios.defaults.baseURL = 'https://6302b723c6dda4f287bd21d9.mockapi.io';

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
