import { nanoid } from 'nanoid';

import { useDispatch, useSelector } from 'react-redux';
import { selectArrayContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

export const ContactForm = () => {
  const arrayContacts = useSelector(selectArrayContacts);
  const dispatch = useDispatch();

  const contactExists = (contacts, name, phone) => {
    return contacts.some(
      contact =>
        contact.name.toLowerCase() === name.toLowerCase() ||
        contact.phone === phone
    );
  };

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;
    const name = form.elements.name.value;
    const phone = form.elements.number.value;

    if (contactExists(arrayContacts, name, phone)) {
      return alert('Rosie Simpson is already in contacts');
    }
    const newContact = { id: nanoid(), name, phone };
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
