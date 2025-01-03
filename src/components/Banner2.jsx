import React from 'react'
import Ban from '../assets/Banner2.png'

const Banner2 = () => {
  return (
    <section className='py-10 bg-[#F2F0FF]  '>
           <div className="container mx-auto py-10">
               <div className="flex justify-between items-center py-10">

               <div className="w-[60%] flex justify-end">
                       <img className='w-2/3'  src={Ban} alt="" /> 
                       
                       
                       </div>
                
                   <div className="w-[60%]">
                       <h4 className='text-[#FB2E86] font-lato font-bold pb-2'>Best Furniture For Your Castle....</h4>
                        <h1 className='text-[53px] font-josef font-bold pb-2'>New Furniture Collection
                        Trends in 2020</h1>
                        <p className='text[16px] font-lato font-bold leading-7 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                        in phasellus non in justo.</p>
                        <div className="flex gap-5">
                        <button className='bg-[#FB2E86] px-8 py-3 rounded-md'>Add To Cart</button>
                          <div className="">
                          <p>B&B Italian Sofa </p>
                          <p>$32.00</p>
                          </div>
                        </div>
                           
                        </div>
   
   
   
   
                  
               </div>
           </div>
       </section>
     )
   }
  


export default Banner2
