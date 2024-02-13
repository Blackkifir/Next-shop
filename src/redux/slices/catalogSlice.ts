import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsAll, IPropsItems } from './interfaces/IPropsItems';

const initialState: IPropsAll = {
  items: [],
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
    setItems(state, action: PayloadAction<IPropsItems[]>) {
      state.items = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
});

export const { setLoading, setItems, setError } = catalogSlice.actions;
export default catalogSlice.reducer;
