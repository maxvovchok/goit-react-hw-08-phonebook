import * as React from 'react';
import { NavLink } from 'react-router-dom';
import { Toolbar, Typography } from '@mui/material';
import styles from 'components/Menu/Menu.module.css';

export default function AuthNav() {
  return (
    <Toolbar>
      <Typography>
        <NavLink to="/register" className={styles.navLink}>
          Register
        </NavLink>
      </Typography>
      <Typography>
        <NavLink to="/login" className={styles.navLink}>
          Log in
        </NavLink>
      </Typography>
    </Toolbar>
  );
}
