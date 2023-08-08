export const getFilteredContacts = ({ arrayContacts, setFilter }) => {
  return arrayContacts.filter(contact => contact.name.includes(setFilter));
};
