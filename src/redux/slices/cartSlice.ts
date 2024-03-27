import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartCards } from './interfaces/ICartCards';
import { ICard } from './interfaces/ICatalogCards';

const initialState: ICartCards = {
  cartCards: [],
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
    setQuantityMinus(state, action: PayloadAction<number>) {
      const cardIndex = state.cartCards.findIndex((card) => card.id === action.payload);

      if (state.cartCards[cardIndex].quantity > 1) {
        state.cartCards[cardIndex].quantity -= 1;
      }
    },
    setQuantityPlus(state, action: PayloadAction<number>) {
      const cardIndex = state.cartCards.findIndex((card) => card.id === action.payload);

      if (state.cartCards[cardIndex].quantity < 10) {
        state.cartCards[cardIndex].quantity += 1;
      }
    },
  },
});

export const {
  setCartCards,
  setClearAllCart,
  setDeleteCard,
  setQuantityMinus,
  setQuantityPlus,
} = cartSlice.actions;

export default cartSlice.reducer;
