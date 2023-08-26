import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchContacts, deleteContact } from 'redux/contacts/operations';
import { useEffect } from 'react';
import { selectFilteredContacts } from 'redux/contacts/selectors';
import { Button, List, ListItem, ListItemText, Container } from '@mui/material';

export const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  const listStyles = {
    maxWidth: '550px',
    margin: '0 auto',
    padding: '20px',
  };

  return (
    <Container style={listStyles}>
      <List>
        {filteredContacts.map(({ name, number, id }) => (
          <ListItem key={id}>
            <ListItemText primary={`${name}: ${number}`} />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => handleDelete(id)}
            >
              Delete
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
