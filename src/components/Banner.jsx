import React from 'react'
import Img from '../assets/Banner.png'
import Big from '../assets/Ban.png'

const Banner = () => {
  
  return (
    <section className='py-36 bg-[#F2F0FF]'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                {/* <div className="absolute   -left-28 top-28">
                      <img className='pt-1'  src={Big} alt="" />
                </div> */}
                <div className="w-[60%]">
                    <h4 className='text-[#FB2E86] font-lato font-bold pb-2'>Best Furniture For Your Castle....</h4>
                     <h1 className='text-[53px] font-josef font-bold pb-2'>New Furniture Collection
                     Trends in 2020</h1>
                     <p className='text[16px] font-lato font-bold leading-7 text-[#8A8FB9]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing
                     in phasellus non in justo.</p>
                      <button className='bg-[#FB2E86] px-8 py-3 rounded-md'>Shop Now</button>
                    
                     </div>




                <div className="w-[60%] flex justify-end">
                    <img className='w-2/3'  src={Img} alt="" /> 
                    
                    
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Banner
