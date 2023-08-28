import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations.js';
import {
  TextField,
  Button,
  Typography,
  Container,
  InputAdornment,
  IconButton,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import styles from 'components/loginForm/LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handlePasswordVisibility = () => {
    setShowPassword(pervState => !pervState);
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <Container>
      <form onSubmit={handleSubmit} className={styles.form}>
        <Typography variant="h6">Log In</Typography>
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
          Log In
        </Button>
      </form>
    </Container>
  );
};
