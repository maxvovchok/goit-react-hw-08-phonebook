import * as React from 'react';
import { NavLink } from 'react-router-dom';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from 'components/Menu/Menu.module.css';

const Navigation = () => {
  return (
    <Toolbar>
      <Typography>
        <NavLink to="/" className={styles.navLink}>
          Home
        </NavLink>
      </Typography>
      <NavLink to="/contacts" className={styles.navLink}>
        Contacts
      </NavLink>
    </Toolbar>
  );
};

export default Navigation;
