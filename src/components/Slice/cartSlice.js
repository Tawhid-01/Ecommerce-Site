import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cartItemManegment',
  initialState: {
    cartItem: localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
  },
  reducers: {
    addToCart: (state, action) => {

    let findProduct = state.cartItem.findIndex((item)=>item.id == action.payload.id)
                             
    if(findProduct === -1){
          state.cartItem.push(action.payload);
       } else {
         state.cartItem[findProduct].qty += 1
       }
      
         localStorage.setItem('cart', JSON.stringify(state.cartItem));
    }
  }
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer
