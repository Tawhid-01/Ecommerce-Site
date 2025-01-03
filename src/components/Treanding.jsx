import React from 'react'
import img from '../assets/Treanding/Trending products.png'
import img1 from '../assets/Treanding/Trending products (1).png'
import img2 from '../assets/Treanding/Trending products (2).png'
import img3 from '../assets/Treanding/Trending products (3).png'
import img4 from '../assets/Treanding/Group 154.png'
import img5 from '../assets/Treanding/Group 155.png'
import img6 from '../assets/Treanding/Trnding products list.png'
import img7 from '../assets/Treanding/Trnding products list (1).png'
import img8 from '../assets/Treanding/Trnding products list (2).png'
const Treanding = () => {
  return (
  <section>
    <div className="container mx-auto py-10">
         <div className="flex justify-center pt-0 pb-10">
                  <h2 className='font-josef font- text-[42px] shadow-lg'>Leatest Products</h2>
                 </div>
            
        
                  <div className="flex  gap-4 flex-1 justify-center">
                  <div className="w-[24%]  bg-[#F6F7FB] group">
                         
                         <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img} alt="" />
                        
        
        
                         </div>
                           
                   </div>
                   <div className="w-[24%]  bg-[#F6F7FB] group">
                         
                         <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img1} alt="" />
                        
        
        
                         </div>
                            
                   </div>
                   <div className="w-[24%]  bg-[#F6F7FB] group">
                         
                         <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img2} alt="" />
                        
                          </div>
        
        
                         </div>

                         <div className="w-[24%]  bg-[#F6F7FB] group">
                         
                         <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img3} alt="" />
                        
                          </div>
        
        
                         </div>
                            
                   </div>
                 
                   <div className="flex">
                   <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img4} alt="" />
                    
        
                         </div>
                         <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img5} alt="" />
                    
        
                         </div>
                    <div className=" pt-8">
                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img6} alt="" />
                    
        
                         </div> <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img7} alt="" />
                    
        
                         </div> <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                          <img src={img8} alt="" />
                    
        
                         </div>

                    </div>
                   </div>

                  </div>
    
  </section>
  )
}

export default Treanding
