import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import { useState, useEffect, useRef } from 'react';

export const App = () => {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  const prevStateRef = useRef(null);

  useEffect(() => {
    const localStorageContacts = JSON.parse(localStorage.getItem('contacts'));
    if (localStorageContacts) {
      setContacts(localStorageContacts);
    }
  }, []);

  const addContact = (name, number) => {
    const existingContacts = contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );

    if (existingContacts) {
      return alert('Rosie Simpson is already in contacts.');
    }

    const newContact = { id: nanoid(), name, number };

    setContacts([...contacts, newContact]);

    localStorage.setItem('contacts', JSON.stringify([...contacts, newContact]));
  };

  const handleFilterChange = filter => {
    setFilter(filter);
  };

  const deleteContact = id => {
    localStorage.setItem(
      'contacts',
      JSON.stringify(contacts.filter(contact => contact.id !== id))
    );
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <h2>Contacts</h2>
      <Filter filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDelete={deleteContact} />
    </div>
  );
};
