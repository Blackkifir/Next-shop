import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsAll, IPropsItems } from './interfaces/IPropsItems';

const initialState: IPropsAll = {
  items: [],
  item: {
    id: 0,
    title: '',
    price: 0,
    description: '',
    images: [],
    category: {
      id: 0,
      name: '',
      image: '',
    },
    categoryImage: '',
  },
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<IPropsItems[]>) {
      state.items = action.payload;
    },
    setLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    setError(state, action: PayloadAction<Error | null>) {
      state.error = action.payload;
    },
  },
});

export const { setItems, setLoading, setError } = catalogSlice.actions;
export default catalogSlice.reducer;
