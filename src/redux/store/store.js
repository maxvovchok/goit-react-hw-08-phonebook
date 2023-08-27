import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { contactsReducer } from 'redux/contacts/contactsSlice';
import { filterReducer } from 'redux/contacts/filterSlice';
import { authReducer } from 'redux/auth/authSlice';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist/es/constants';

const authPersistConfig = {
  key: 'auth',
  storage,
  whiteList: ['token'],
};

export const store = configureStore({
  reducer: {
    arrayContacts: contactsReducer,
    filter: filterReducer,
    auth: persistReducer(authPersistConfig, authReducer),
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development', 
});

export const persistor = persistStore(store);
