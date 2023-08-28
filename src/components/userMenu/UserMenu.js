import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations.js';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function UserMenu() {
  const name = useSelector(selectUserName);
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
        transition: 'background-color 0.3s ease',
      },
    },
  };

  return (
    <Toolbar>
      <Typography>
        <span style={styles.userName}>{name}</span>
        <button style={styles.btn} onClick={() => dispatch(logOut())}>
          log out
        </button>
      </Typography>
    </Toolbar>
  );
}
