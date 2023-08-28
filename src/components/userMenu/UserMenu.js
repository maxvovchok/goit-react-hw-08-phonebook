import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { selectUserName } from 'redux/auth/selectors';
import { logOut } from 'redux/auth/operations.js';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import styles from 'components/userMenu/UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  return (
    <Toolbar>
      <Typography>
        <span className={styles.userName}>{name}</span>
        <button className={styles.btn} onClick={() => dispatch(logOut())}>
          log out
        </button>
      </Typography>
    </Toolbar>
  );
}
