import React from 'react'
import img from '../assets/Component 11 (1).png'
import { TfiShoppingCartFull } from "react-icons/tfi";
import { FaHeartbeat } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import img1 from '../assets/Component 8.png'
import img2 from '../assets/Component 9.png'
import img3 from '../assets/Component 10.png'
import img4 from '../assets/Component 12 (1).png'

const LetestProduct = () => {
  return (
    <section className='py-0 pb-36'>
      <div className="container mx-auto">
        <div className="flex justify-center pt-0 pb-10">
          <h2 className='font-josef font- text-[42px] shadow-lg'>Leatest Products</h2>
         </div>
           <div className="py-6">
            <ul className=' flex items-center gap-16 justify-center'>
                <li>New Arraival</li>
                <li>Best Seller</li>
                <li>Feature</li>
                <li>Special Offer</li>
            </ul>
          
            </div>
            

          <div className="flex  gap-4 flex-1 justify-center">
          <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                   
           </div>
           <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img1} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                    
           </div>
           <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img2} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                    
           </div>
         
          </div>
       
          <div className="flex  gap-4 flex-1 justify-center pt-20">
          <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img4} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                   
           </div>
           <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img2} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                    
           </div>
           <div className="w-[24%]  bg-[#F6F7FB] group">
                 
                 <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                  <img src={img3} alt="" />
                  <div className=" inline-grid grid-row  gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                  <TfiShoppingCartFull  className='text-[#702bc9]'/>
                  <FaHeartbeat  className='text-[#702bc9]'/>
                  <FaSearchengin  className='text-[#702bc9]'/>
                  </div>


                 </div>
                    
           </div>
         
          </div>
         
      </div>
        </section>


  )
}

export default LetestProduct
