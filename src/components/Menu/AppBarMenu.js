import { useSelector } from 'react-redux';
import { AppBar } from '@mui/material';

import Navigation from 'components/Menu/Navigation';
import AuthNav from 'components/Menu/AuthNav';
import UserMenu from 'components/userMenu/UserMenu';

import { selectLoggedIn } from 'redux/auth/selectors';
import styles from 'components/Menu/Menu.module.css';

export const AppBarMenu = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <AppBar
      position="static"
      sx={{ flexDirection: 'row', justifyContent: 'space-between' }}
      className={styles.appBar}
    >
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
