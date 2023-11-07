import { createAction, nanoid } from "@reduxjs/toolkit";

export const addContact = createAction('contacts/addContact', info => {
  return {
    payload: {
      name: info.name,
      number:info.number,
      id: nanoid()
    }
  }
});

export const deleteContact = createAction('contacts/deleteContact');


export const setContactsFilter = createAction('filter/setContactFilter ');