import { configureStore } from '@reduxjs/toolkit';
import { persistedContactReducer } from './contactSlice';
import filterSlice from './filterSlice';
import { persistStore, FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE } from 'redux-persist';

export const store = configureStore({
  reducer: {
    contacts: persistedContactReducer,
    filter: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE],
      },
    }),
});

export const persistor = persistStore(store);
