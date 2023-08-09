import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { getArrayContacts } from 'redux/selectors';
import { addContact } from 'redux/slice/contactsSlice';

export const ContactForm = () => {
  const arrayContacts = useSelector(getArrayContacts);
  const dispatch = useDispatch();

  const contactExists = (contacts, name, number) => {
    return contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.number === number
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contactExists(arrayContacts, name, number)) {
      return alert('Rosie Simpson is already in contacts');
    }
    const newContact = { id: nanoid(), name, number };
    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div
        style={{
          border: '2px solid black',
          width: '500px',
        }}
      >
        <h2>Name</h2>
        <input type="text" name="name" required />
        <h2>Number</h2>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button>Add contact</button>
      </div>
    </form>
  );
};
