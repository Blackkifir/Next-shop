import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPropsItems } from './interfaces/IPropsItems';
import { IPropsCartItems } from './interfaces/IPropsCartItems';

const initialState: IPropsCartItems = {
  cartItems: [],
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
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems(state, action: PayloadAction<IPropsItems>) {
      if (!state.cartItems) {
        state.cartItems = [];
      }
      state.cartItems.push(action.payload);
    },
  },
});

export const { setCartItems } = cartSlice.actions;

export default cartSlice.reducer;
