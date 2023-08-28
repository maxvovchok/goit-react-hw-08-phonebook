import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const styles = {
  toolbar: {
    backgroundColor: '#2196F3',
    color: '#ffffff',
  },
  title: {
    flexGrow: 1,
  },
  navLink: {
    textDecoration: 'none',
    color: '#ffffff',
    marginRight: '10px',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};

const Navigation = () => {
  return (
    <Toolbar>
      <Typography>
        <NavLink to="/" style={styles.navLink}>
          Home
        </NavLink>
      </Typography>
      <NavLink to="/contacts" style={styles.navLink}>
        Contacts
      </NavLink>
    </Toolbar>
  );
};

export default Navigation;
