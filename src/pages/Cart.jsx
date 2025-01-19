import React from 'react';
import PageHeading from '../components/PageHeading';
import { useDispatch, useSelector } from 'react-redux';
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
import { decrement, increment } from '../components/Slice/cartSlice';

const Cart = () => {
  const cartData = useSelector((state) => state.cartItemManegment.cartItem);
  const dispatch = useDispatch();

  const handleIncrement = (item) => {
    dispatch(increment(item));
  };

  const handleDeIncrement = (item) => {
    dispatch(decrement(item));
  };

  const handleRemove = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const totalPrice = cartData.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <>
      <PageHeading heading="Shopping Cart" page="Cart"/>
      <div className="container mx-auto px-4">
        <div className="w-full lg:w-[70%] mx-auto">
          {cartData.map((item) => (
            <div key={item.id} className="flex flex-col lg:flex-row justify-between border-b-2 pb-4 mb-4">
              <div className="flex items-center gap-5 mb-4 lg:mb-0">
                <img className="w-20" src={item.thumbnail} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
              <div className="flex items-center justify-between lg:justify-start lg:gap-4 w-full lg:w-auto">
                <span className="text-sm lg:text-base">${item.price}</span>
                <div className="flex items-center bg-[#BEB2C2] gap-2 px-2 py-1 rounded">
                  <FaRegWindowMinimize className="cursor-pointer" onClick={() => handleDeIncrement(item)} />
                  <span>{item.qty}</span>
                  <FaPlus className="cursor-pointer" onClick={() => handleIncrement(item)} />
                </div>
                <span className="text-sm lg:text-base">${item.price * item.qty}</span>
                <button className="text-red-500" onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="flex justify-end">
            <span className="text-lg font-bold">Total: ${totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
