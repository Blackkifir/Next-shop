import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartCards } from './interfaces/ICartCards';
import { ICard } from './interfaces/ICatalogCards';

const initialState: ICartCards = {
  cartCards: [],
  card: {
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
    setCartCards(state, action: PayloadAction<ICard>) {
      if (!state.cartCards) {
        state.cartCards = [];
      }
      state.cartCards.push({ ...action.payload });
    },
    setClearAllCart(state) {
      state.cartCards = [];
    },
    setDeleteCard(state, action: PayloadAction<number>) {
      state.cartCards = state.cartCards.filter((card) => card.id !== action.payload);
    },
  },
});

export const { setCartCards, setClearAllCart, setDeleteCard } = cartSlice.actions;

export default cartSlice.reducer;
