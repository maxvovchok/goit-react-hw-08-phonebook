import React from 'react';
import { ContactForm } from 'components/ContactForm';
import { ContactList } from 'components/ContactList';
import { Filter } from 'components/Filter';
import { Container } from '@mui/material';

const Contacts = () => {
  return (
    <Container
      maxWidth="md"
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <ContactForm />
      <Filter />
      <ContactList />
    </Container>
  );
};

export default Contacts;
