import React from 'react'
import Ban from '../assets/Banner2.png'

const Banner2 = () => {
  return (
    <section className='py-10 bg-[#F2F0FF]  '>
      <div className="container mx-auto py-10 px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center py-10">

          <div className="w-full lg:w-[60%] flex justify-center lg:justify-end mb-8 lg:mb-0">
            <img className='w-2/3' src={Ban} alt="" />
          </div>

          <div className="w-[60%]">
            <h4 className='text-[#FB2E86] font-lato font-bold pb-2'>Best Furniture For Your Castle....</h4>
            <h1 className='text-[32px] lg:text-[53px] font-josef font-bold pb-2'>New Furniture Collection
              Trends in 2020</h1>
            <p className='text-[14px] lg:text-[16px] font-lato font-bold leading-7 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
              in phasellus non in justo.</p>
            <div className="flex flex-col sm:flex-row gap-5 mt-4">
              <button className='bg-[#FB2E86] px-8 py-3 rounded-md'>Add To Cart</button>
              <div className="text-center sm:text-left">
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
