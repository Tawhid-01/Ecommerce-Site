import React from 'react'
import PageHeading from '../components/PageHeading'
import { useDispatch, useSelector } from 'react-redux'
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
import { decrement, increment } from '../components/Slice/cartSlice';
const Cart = () => {

 const cartData = useSelector((state)=>state.cartItemManegment.cartItem)
  const dispatch = useDispatch()
 const handleIncrement  = (item) => {
  dispatch(increment(item))
 }
  const handleDeIncrement = (item) => {
    dispatch(decrement(item))
  }
  return (
    <>
      <PageHeading heading="Shopping Cart"  page="Cart"/>
      
      <div className="container">
      <div className="w-[70%]">
      {cartData.map((item)=>(
       // eslint-disable-next-line react/jsx-key
       <div className="flex justify-between border-b-2 pb-4">
        <div className="flex items-center  gap-5">
        <img className='w-20' src={item.thumbnail} alt="" />
        <h3>{item.title}</h3>
        </div>
        <div className="">
          <span>${item.price}</span>
        </div>
        <div className="flex items-center bg-[#BEB2C2] gap-4">
          <FaRegWindowMinimize  onClick={()=>handleIncrement(item)}/>
          <span>{item.qty}</span>
          <FaPlus onClick={()=>handleDeIncrement(item)} />
        </div>
        <div className="">
          <span>${(item.price) * (item.qty)}</span>
        </div>
       </div>
     ))}

      </div>
      </div>

    </>
  )
}

export default Cart
