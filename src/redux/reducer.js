
import { addContact, deleteContact, setContactsFilter } from "./actions";

const contactsInitialState = JSON.parse(localStorage.contacts) ?? [];


export const contactsReducer = (state = contactsInitialState, action) => {
  switch (action.type) {

    case addContact.type:
      return [...state, action.payload];
    
    case deleteContact.type:
      return state.filter(item => item.id !== action.payload);
    
    default:
      return state;
  };
};


const filterInitialState = '';


export const filterReducer = (state = filterInitialState, action) => {
  switch (action.type) {
    case setContactsFilter.type:
      return action.payload;
    default: 
      return state;
  }
  
};