import React from 'react'
import PageHeading from '../components/PageHeading'
import { useSelector } from 'react-redux'
import { FaPlus } from "react-icons/fa6";
import { FaRegWindowMinimize } from "react-icons/fa";
const Cart = () => {

 const cartData = useSelector((state)=>state.cartItemManegment.cartItem)
  
  
  return (
    <>
      <PageHeading heading="Shopping Cart"  page="Cart"/>
      
      <div className="container">
      <div className="w-[70%]">
      {cartData.map((item)=>(
       // eslint-disable-next-line react/jsx-key
       <div className="flex justify-between">
        <div className="flex items-center ">
        <img className='w-20' src={item.thumbnail} alt="" />
        <h3>{item.title}</h3>
        </div>
        <div className="">
          <span>${item.price}</span>
        </div>
        <div className="flex items-center gap-4">
          <FaRegWindowMinimize />
          <span>{item.qty}</span>
          <FaPlus />
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
