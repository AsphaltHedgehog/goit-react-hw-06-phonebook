import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact: {
      reducer: (state, action) => {
        return [...state, action.payload]
      },
      prepare: (info) => {
        return {
          payload: {
            name: info.name,
            number: info.number,
            id: nanoid()
          },
        };
      },
    },

    deleteContact: (state, action) => {
      return state.filter(item => item.id !== action.payload);
    },
  },
});

export const {
  addContact,
  deleteContact
} =
  contactsSlice.actions;
  
export const contactsReducer = contactsSlice.reducer;