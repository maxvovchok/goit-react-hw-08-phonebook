import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { userName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations.js';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import avatar from 'components/userMenu/avatar';

export default function UserMenu() {
  const name = useSelector(userName);
  const dispatch = useDispatch();

  const styles = {
    userName: {
      marginRight: '20px',
    },
    btn: {
      backgroundColor: '#f44336',
      color: '#ffffff',
      border: 'none',
      borderRadius: '4px',
      padding: '8px 16px',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
      '&:hover': {
        backgroundColor: '#d32f2f',
        transition: 'background-color 0.3s ease', // Додайте цю стрічку
      },
    },
  };

  return (
    <Toolbar>
      <Typography>
        {/* <img src={avatar} alt="avatar" /> */}
        <span style={styles.userName}>{name}</span>
        <button style={styles.btn} onClick={() => dispatch(logOut())}>
          log out
        </button>
      </Typography>
    </Toolbar>
  );
}
