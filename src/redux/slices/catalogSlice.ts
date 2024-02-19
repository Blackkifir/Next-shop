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
  },
  cartItems: [],
  isLoading: false,
  error: null,
};

const catalogSlice = createSlice({
  name: 'catalog',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<IPropsItems[]>) {
      state.cartItems = action.payload;
    },
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

export const {
  setCartItems, setItems, setLoading, setError,
} = catalogSlice.actions;
export default catalogSlice.reducer;
