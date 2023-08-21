import { createSelector } from 'reselect';

export const selectArrayContacts = ({ arrayContacts }) =>
  arrayContacts.contacts.items;

export const selectFilter = ({ filter }) => filter;

export const selectLoading = ({ arrayContacts }) =>
  arrayContacts.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectArrayContacts, selectFilter],
  (arrayContacts, filter) => {
    return arrayContacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
