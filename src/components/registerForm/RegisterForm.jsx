import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations.js';
import {
  TextField,
  Button,
  InputAdornment,
  Typography,
  IconButton,
  Container,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from 'components/registerForm/RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);

      case 'email':
        return setEmail(value);

      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(register({ name, email, password }));

    setName('');
    setEmail('');
    setPassword('');
  };

  const handlePasswordVisibility = () => {
    setShowPassword(pervState => !pervState);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h6">Register</Typography>
        <TextField
          label="Name"
          variant="outlined"
          name="name"
          value={name}
          onChange={handleChange}
          required
        />
        <TextField
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <TextField
          label="Password"
          variant="outlined"
          type={showPassword ? 'text' : 'password'}
          name="password"
          value={password}
          onChange={handleChange}
          required
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handlePasswordVisibility}>
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Button variant="contained" color="primary" type="submit">
          Sign Up
        </Button>
      </form>
    </Container>
  );
};
