import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { selectArrayContacts } from 'redux/contacts/selectors';
import { Typography, TextField, Button, Container } from '@mui/material';
import styles from 'components/contactForm/ContactForm.module.css';

export const ContactForm = () => {
  const arrayContacts = useSelector(selectArrayContacts);
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
      return alert('Contact already exists');
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));

    form.reset();
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h6">Add New Contact</Typography>
        <TextField
          label="Name"
          variant="outlined"
          type="text"
          name="name"
          required
        />
        <TextField
          label="Number"
          variant="outlined"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <Button variant="contained" color="primary" type="submit">
          Add Contact
        </Button>
      </form>
    </Container>
  );
};
