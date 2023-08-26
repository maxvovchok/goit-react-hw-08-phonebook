import React from 'react';
import { setFilter } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField, Container } from '@mui/material';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  const filterStyles = {
    marginBottom: '16px',
    marginLeft: '150px',
  };

  return (
    <Container>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        type="text"
        onChange={handleChange}
        style={filterStyles}
      />
    </Container>
  );
};
