import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useDispatch } from 'react-redux';
import AppBarMenu from './Menu/AppBarMenu';
// import { CurrentUser } from 'redux/auth/operations.js';

const Home = lazy(() => import('page/Home'));
const Register = lazy(() => import('page/Register'));
const Contacts = lazy(() => import('page/Contacts'));
const Login = lazy(() => import('page/Login'));

export const App = () => {
  // const dispatch = useDispatch();

  // useDispatch(() => {
  //   dispatch(CurrentUser());
  // }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route path="/" element={<AppBarMenu />}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </div>
  );
};
