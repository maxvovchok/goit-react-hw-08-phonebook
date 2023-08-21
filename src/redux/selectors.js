export const selectArrayContacts = ({ arrayContacts }) =>
  arrayContacts.contacts.items;

export const selectFilter = ({ filter }) => filter;

export const selectLoading = state => state.arrayContacts.contacts.isLoading;

export const selectFilteredContactsSelector = state => {
  const arrayContacts = selectArrayContacts(state);
  const filter = selectFilter(state);

  return arrayContacts.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );
};
