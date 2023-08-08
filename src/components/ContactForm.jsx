import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/slice/contactsSlice';

export const ContactForm = () => {
  const arrayContacts = useSelector(state => state.arrayContacts);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

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
