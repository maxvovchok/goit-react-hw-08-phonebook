import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import AppBarMenu from './Menu/AppBarMenu';
import { PrivateRoute } from './userMenu/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { LoggedIn } from 'redux/auth/selectors';
import { PublicRoute } from './userMenu/PublicRoute';
import { getCurrentUser } from 'redux/auth/operations';

const Home = lazy(() => import('page/Home'));
const Register = lazy(() => import('page/Register'));
const Contacts = lazy(() => import('page/Contacts'));
const Login = lazy(() => import('page/Login'));

export const App = () => {
  const isLoggedIn = useSelector(LoggedIn);

  const dispatch = useDispatch();

  dispatch(getCurrentUser());

  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBarMenu />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route
            element={
              <PrivateRoute isVisible={isLoggedIn} redirectTo="/login" />
            }
          >
            <Route path="/contacts" element={<Contacts />} />
          </Route>

          <Route
            element={
              <PublicRoute isVisible={isLoggedIn} redirectTo="/contacts" />
            }
          >
            <Route path="register" element={<Register />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
