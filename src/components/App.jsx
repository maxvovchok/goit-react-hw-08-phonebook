import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectRefreshing } from 'redux/auth/selectors';
import { getCurrentUser } from 'redux/auth/operations';

import { Layout } from 'components/Layout';

const Home = lazy(() => import('page/Home'));
const Register = lazy(() => import('page/Register'));
const Contacts = lazy(() => import('page/Contacts'));
const Login = lazy(() => import('page/Login'));

export const App = () => {
  const isRefreshing = useSelector(selectRefreshing);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="/register"
          element={
            <PublicRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/login"
          element={<PublicRoute redirectTo="/contacts" component={<Login />} />}
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute redirectTo="/login" component={<Contacts />} />
          }
        />
      </Route>
    </Routes>
  );
};
