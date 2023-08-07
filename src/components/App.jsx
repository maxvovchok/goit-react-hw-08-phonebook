import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, removeConatct } from 'redux/slice/contactsSlice';
import { setFilter } from 'redux/slice/filterSlice';

export const App = () => {
  const arrayContacts = useSelector(state => state.arrayContacts);
  const filter = useSelector(state => state.setFilter);
  const dispatch = useDispatch();

  const addContactRedux = (name, number) => {
    const existingContacts = arrayContacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContacts) {
      return alert('Rosie Simpson is already in contacts');
    }

    const newContact = { id: nanoid(), name, number };

    dispatch(addContact(newContact));
    name = '';
  };

  const handleFilterChange = filterValue => {
    dispatch(setFilter(filterValue));
  };

  const filteredContacts = arrayContacts.filter(contact =>
    contact.name.includes(filter)
  );

  const deleteContact = id => {
    dispatch(removeConatct(id));
  };
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContactRedux} />
      <h2>Contacts</h2>
      <Filter onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
