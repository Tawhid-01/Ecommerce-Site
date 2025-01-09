import React, { useContext } from 'react';
import { apidata } from './ContextApi'; 
import Slider from "react-slick";
import { TiShoppingCart } from "react-icons/ti";
import { FaHeartbeat } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";

const Feature = () => {
  const data = useContext(apidata);

  const filteredData = data.filter(item => item.id <= 8 )


  
    var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };
  
  return (
    <section className='py-16'>
      <div className="container mx-auto">
        <div className="flex justify-center pt-28 pb-10">
          <h2 className='font-josef font-bold text-[32px] lg:text-[42px] shadow-lg'>Featured Products</h2>
        </div>

        <Slider {...settings}>
       
          {filteredData.map((item) => (
            <div key={item.id} className="!w-full  lg:!w-[90%] shadow-lg group mx-auto my-4">
              <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#7E33E0]">
                <img className='h-[80%] w-[70%]' src={item.thumbnail} alt={item.title} />
                <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
                <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
                <TiShoppingCart className='text-[#702bc9]' />
                <FaHeartbeat  className='text-[#702bc9]'/>
                <AiFillEye  className='text-[#702bc9]'/>
                </div>
              </div>
              <div className="text-center pt-4 pb-12 group-hover:bg-[#7E33E0]">
                <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
                <h4 className='group-hover:text-white'>$ {item.price}</h4>
              </div>
            </div>
          ))}
        
        </Slider>
      </div>

    </section>
  );
};

export default Feature;
