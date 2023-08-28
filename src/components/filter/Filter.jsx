import React from 'react';
import { setFilter } from 'redux/contacts/filterSlice';
import { useDispatch } from 'react-redux';
import { TextField, Container } from '@mui/material';
import styles from 'components/filter/Filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <Container>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        type="text"
        onChange={handleChange}
        className={styles.filter}
      />
    </Container>
  );
};
