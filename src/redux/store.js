import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filterReducer } from "./filterSlice"; 
import { contactsReducer } from "./contactsSlice";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['contacts']
}

const persistedContactsReducer = persistReducer(persistConfig, combineReducers({contacts: contactsReducer, filter: filterReducer}))


export const store = configureStore({
  reducer: persistedContactsReducer, 
  devTools: process.env.NODE_ENV !== 'production',
  // {
    // contacts: persistedContactsReducer,
    // filter: filterReducer,
  // }
});

export const persistor = persistStore(store)


