import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICatalogCards, ICard } from './interfaces/ICatalogCards';

const initialState: ICatalogCards = {
  items: [],
  isLoading: false,
  isDisable: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ICard[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setDisable(state, action: PayloadAction<boolean>) {
      state.isDisable = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
});

export const {
  setItems,
  setLoading,
  setDisable,
  setError,
} = catalogSlice.actions;
export default catalogSlice.reducer;
