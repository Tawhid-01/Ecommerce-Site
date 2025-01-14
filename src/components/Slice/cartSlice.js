import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItemManagement',
  initialState: {
    cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, action) => {
      const findProduct = state.cartItem.findIndex(item => item.id === action.payload.id);
                             
      if (findProduct === -1) {
        state.cartItem.push({ ...action.payload, qty: 1 });
      } else {
        state.cartItem[findProduct].qty += 1;
      }
      
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    increment: (state, action) => {
      const findProduct = state.cartItem.findIndex(item => item.id === action.payload);
      
      if (findProduct !== -1) {
        state.cartItem[findProduct].qty += 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItem));
      }
    },
    decrement: (state, action) => {
      const findProduct = state.cartItem.findIndex(item => item.id === action.payload);
      
      if (findProduct !== -1 && state.cartItem[findProduct].qty > 1) {
        state.cartItem[findProduct].qty -= 1;
        localStorage.setItem('cart', JSON.stringify(state.cartItem));
      }
    },
    removeItem: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    },
    clearCart: (state) => {
      state.cartItem = [];
      localStorage.setItem('cart', JSON.stringify(state.cartItem));
    }
  }
});

export const { addToCart, increment, decrement, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
