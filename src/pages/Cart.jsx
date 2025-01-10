import React from 'react'
import PageHeading from '../components/PageHeading'
import { useSelector } from 'react-redux'

const Cart = () => {

 const cartData = useSelector((state)=>state.cartItemManegment.cartItem)
  
  
  return (
    <>
      <PageHeading heading="Shopping Cart"  page="Cart"/>
      
     {cartData.map((item)=>(
       <div key={item.id} className="">
        <img src={item.thumbnail} alt="" />
        <h3>{item.title}</h3>
       </div>
     ))}

    </>
  )
}

export default Cart
