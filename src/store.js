import { configureStore } from '@reduxjs/toolkit';
import {  cartSlice } from './components/Slice/cartSlice';


export default configureStore({
  reducer: {
    cartItemManegment: cartSlice.reducer
  }
});
