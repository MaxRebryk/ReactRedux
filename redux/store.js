import { configureStore } from '@reduxjs/toolkit';
import balanceReducer from './balanceSlice';
import storage from 'redux-persist/lib/storage';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const balancePersistConfig = {
  key: 'balanceValue',
  storage,
  whitelist: ['value'],
};

const persistedBalanceReducer = persistReducer(
  balancePersistConfig,
  balanceReducer
);

export const store = configureStore({
  reducer: {
    balance: persistedBalanceReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
