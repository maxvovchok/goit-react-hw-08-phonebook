import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography } from '@mui/material';

const styles = {
  navLink: {
    textDecoration: 'none',
    color: '#ffffff',
    marginRight: '20px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

export default function AuthNav() {
  return (
    <Toolbar>
      <Typography>
        <NavLink to="/register" style={styles.navLink}>
          Register
        </NavLink>
      </Typography>
      <Typography>
        <NavLink to="/login" style={styles.navLink}>
          Log in
        </NavLink>
      </Typography>
    </Toolbar>
  );
}
