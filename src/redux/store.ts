import { AnyAction, ThunkDispatch, configureStore } from '@reduxjs/toolkit';
import catalogSlice from './slices/catalogSlice';
import cartSlice from './slices/cartSlice';

const store = configureStore({
  reducer: {
    catalogSlice,
    cartSlice,
  },
});

export type AppDispatch = typeof store.dispatch;
export type AppThunkDispatch = ThunkDispatch<RootState, unknown, AnyAction>;
export type RootState = ReturnType<typeof store.getState>;
export default store;
