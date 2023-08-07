import { createSlice } from '@reduxjs/toolkit';

export const contactsSlice = createSlice({
  name: 'arrayContacts',
  initialState: [],
  reducers: {
    addContact(state, action) {
      state.push(action.payload);
    },
    removeConatct(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, removeConatct } = contactsSlice.actions;
