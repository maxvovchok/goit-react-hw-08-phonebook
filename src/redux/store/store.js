import { combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import { contactsSlice } from '../slice/contactsSlice';
import { filterSlice } from 'redux/slice/filterSlice';

const rootReducer = combineReducers({
  arrayContacts: contactsSlice.reducer,
  setFilter: filterSlice.reducer,
});

const persistConfig = {
  key: 'root',
  storage,
  blacklist: ['setFilter'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);
