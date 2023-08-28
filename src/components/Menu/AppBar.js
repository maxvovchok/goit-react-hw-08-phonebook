import { useSelector } from 'react-redux';
import { AppBar } from '@mui/material';

import Navigation from 'components/Menu/Navigation';
import AuthNav from 'components/Menu/AuthNav';
import UserMenu from 'components/userMenu/UserMenu';

import { selectLoggedIn } from 'redux/auth/selectors';

const styles = {
  appBar: {
    paddingRight: '30px',
    paddingLeft: '30px',
    display: 'flex',
    backgroundColor: '#2196F3',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
};

export const AppBarMenu = () => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </AppBar>
  );
};
