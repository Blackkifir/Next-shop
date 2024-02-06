import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsAll } from './interfaces/IPropsItems';

const initialState: IPropsAll = {
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
});

export const { setLoading } = catalogSlice.actions;
export default catalogSlice.reducer;
