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
      state.cartCards.push({
        ...action.payload,
        quantity: 1,
        basePrice: action.payload.price,
      });
      localStorage.setItem('cartItems', JSON.stringify(state.cartCards));
    },
    setClearAllCart(state) {
      state.cartCards = [];
      localStorage.setItem('cartItems', JSON.stringify(state.cartCards));
    },
    setDeleteCard(state, action: PayloadAction<number>) {
      state.cartCards = state.cartCards.filter((card) => card.id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartCards));
    },
    setQuantityMinus(state, action: PayloadAction<number>) {
      const cardIndex = state.cartCards.findIndex((card) => card.id === action.payload);

      if (state.cartCards[cardIndex].quantity > 1) {
        state.cartCards[cardIndex].quantity -= 1;
        state.cartCards[cardIndex].price -= state.cartCards[cardIndex].basePrice;
        localStorage.setItem('cartItems', JSON.stringify(state.cartCards));
      }
    },
    setQuantityPlus(state, action: PayloadAction<number>) {
      const cardIndex = state.cartCards.findIndex((card) => card.id === action.payload);

      if (state.cartCards[cardIndex].quantity < 10) {
        state.cartCards[cardIndex].quantity += 1;
        state.cartCards[cardIndex].price = state.cartCards[cardIndex].basePrice * state.cartCards[cardIndex].quantity;
        localStorage.setItem('cartItems', JSON.stringify(state.cartCards));
      }
    },
    loadCartState(state) {
      const cartState = localStorage.getItem('cartItems');
      if (cartState) {
        state.cartCards = JSON.parse(cartState) as ICartCards['cartCards'];
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
  loadCartState,
} = cartSlice.actions;

export default cartSlice.reducer;
