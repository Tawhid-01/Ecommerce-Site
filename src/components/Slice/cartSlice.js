import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cartItemManegment',
  initialState: {
    cartItem: [],
  },
  reducers: {
    increment: (state, action) => {
      const item = state.cartItem.find(i => i.id === action.payload.id);
      if (item) item.qty += 1;
    },
    decrement: (state, action) => {
      const item = state.cartItem.find(i => i.id === action.payload.id);
      if (item && item.qty > 1) item.qty -= 1;
    },
    REMOVE_ITEM: (state, action) => {
      state.cartItem = state.cartItem.filter(item => item.id !== action.payload);
    },
  },
});

export const { increment, decrement, REMOVE_ITEM } = cartSlice.actions;
export default cartSlice.reducer;
