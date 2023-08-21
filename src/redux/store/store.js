import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from 'redux/slice/contactsSlice';
import { filterSlice } from 'redux/slice/filterSlice';

export const store = configureStore({
  reducer: {
    arrayContacts: contactsSlice.reducer,
    filter: filterSlice.reducer,
  },
});
