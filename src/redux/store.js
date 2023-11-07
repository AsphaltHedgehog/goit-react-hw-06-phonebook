import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filterReducer } from "./reducer";

import { combineReducers } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';


export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  }
});

// const contactsPersistConfig = {
//   key: 'contacts',
//   storage: storage,
// };

// const persistedReducer = persistReducer(contactsPersistConfig, contactsReducer);

