import React from 'react'
import Img from '../assets/logo.png'
const Footer = () => {
  return (
   <section className='bg-[#EEEFFB] py-20'>
    <div className="container mx-auto  ">
        <div className="flex justify-between lg:flex-row flex-col">
            <div className="">
                <div className="">
                    <img src={Img} alt="" />
                </div>
                <div className="">
                    <div className="flex py-6">
                        <input type="email" placeholder='Enter Your E-mail' className='border-2 h-10 lg:w-64 w-32 outline-none pl-4'/>
                        <button className='bg-[#FB2E86] px-4'> Sign Up</button>
                    </div>
                    <div className="text-[#8A8FB9] ">
                    <p>Contact Info</p>
                    <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
                    </div>
                </div>
            </div>

<div className="flex  flex-col lg:flex-row">
  
<div className=" text-center p-6 text-[#8A8FB9]">
                <h1 className='text-lg  text-black pb-6 text-left'>Catagories</h1>
              <div className=" text-left">
              <p> Laptops & Computers</p>
               <p> Cameras & Photography</p>
               <p> Smart Phones & Tablets</p>
               <p> Video Games & Consoles</p>
               <p> Waterproof Headphones</p>
              </div>
            </div>





        
            <div className="text-center p-6 text-[#8A8FB9]">
            <h1 className='text-lg  text-black pb-6 text-left'>Customer Care</h1>
              <div className=" text-left">
              <p> Laptops & Computers</p>
               <p> Cameras & Photography</p>
               <p> Smart Phones & Tablets</p>
               <p> Video Games & Consoles</p>
               <p> Waterproof Headphones</p>
              </div>
            </div>





            <div className="text-center p-6 text-[#8A8FB9]">
            <h1 className='text-lg  text-black pb-6 text-left'>Pages</h1>
              <div className=" text-left">
              <p> Laptops & Computers</p>
               <p> Cameras & Photography</p>
               <p> Smart Phones & Tablets</p>
               <p> Video Games & Consoles</p>
               <p> Waterproof Headphones</p>
              </div>
            </div>

</div>

        </div>
    </div>
   </section>
  )
}

export default Footer
