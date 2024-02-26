import { configureStore } from '@reduxjs/toolkit';
import catalogSlice from './slices/catalogSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    catalogSlice,
    cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
