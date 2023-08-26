import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

import Navigation from 'components/Menu/Navigation';
import AuthNav from 'components/Menu/AuthNav';
import UserMenu from 'components/userMenu/UserMenu';

import { LoggedIn } from 'redux/auth/selectors';
import { useSelector } from 'react-redux';

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

export default function AppBarMenu() {
  const isLoggedIn = useSelector(LoggedIn);

  return (
    <>
      <AppBar position="static" sx={styles.appBar}>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </>
  );
}
