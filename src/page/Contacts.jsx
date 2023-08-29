import React from 'react';
import { ContactForm } from 'components/contactForm/ContactForm';
import { ContactList } from 'components/contactList/ContactList';
import { Filter } from 'components/filter/Filter';
import { Container } from '@mui/material';

const Contacts = () => {
  return (
    <Container
      maxWidth="md"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '600px',
      }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
