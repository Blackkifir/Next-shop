import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './slices/catalogSlice';

const store = configureStore({
  reducer: {
    catalogSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
