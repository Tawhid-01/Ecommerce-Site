import React from 'react'
import img from '../assets/Treanding/Group 1.png'

const Discount = () => {
  return (
    <section>
      <div className="container mx-auto py-12">
        <div className="flex justify-center pt-0 pb-10">
          <h2 className='font-josef font-bold text-[32px] md:text-[42px] shadow-lg'>Discount Item </h2>
        </div>
        <div className="py-6">
          <ul className=' flex flex-wrap items-center gap-8 md:gap-16 justify-center'>
            <li>Wood Chair</li>
            <li>Plastic Chair</li>
            <li>Sofa Colletion</li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row justify-between items-center">
          {/* <div className="absolute   -left-28 top-28">
                                  <img className='pt-1'  src={Big} alt="" />
                            </div> */}
          <div className="w-full lg:w-[60%] mb-8 lg:mb-0">
            <h1 className='text-[28px] md:text-[33px] font-lato font-bold pb-2'>20% Discount Of All Products</h1>
            <h4 className='text-[#FB2E86] font-josef font-bold pb-2'>Eams Sofa Compact</h4>
            <p className='text-[14px] md:text-[16px] font-lato font-bold leading-7 text-[#8A8FB9]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" /> <p className='pl-2'>Material expose like metals</p>
              </div>
              <div className="flex items-center">
                <input type="checkbox" /> <p className='pl-2'>Material expose like metals</p>
              </div>

              
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <div className="flex items-center">
                <input type="checkbox" /> <p className='pl-2'>Material expose like metals</p>
              </div>

              <div className="">
              <div className="flex items-center">
              <input type="checkbox" /> <p className='pl-2'>Material expose like metals</p>
              </div>
              </div>
            </div>
            <button className='bg-[#FB2E86] px-8 py-3 rounded-md'>Shop Now</button>

          </div>
          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end">
            <img className='w-2/3 lg:w-3/4' src={img} alt="" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default Discount
