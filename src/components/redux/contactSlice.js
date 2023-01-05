import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';

const { createSlice } = require('@reduxjs/toolkit');

const contactSlice = createSlice({
  name: 'contact',
  initialState: { value: [] },
  reducers: {
    addContact(state, action) {
      state.value = [...state.value, action.payload];
    },
    deleteContact(state, action) {
      state.value = state.value.filter(
        contact => contact.userId !== action.payload
      );
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;

const persistConfig = {
  key: 'root',
  storage,
};

export const persistedContactReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);
