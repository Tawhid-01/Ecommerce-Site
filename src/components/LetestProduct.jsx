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
                              <h2 className='font-josef font-bold  text-[42px] md:text-[32px] shadow-lg'>Leatest Products</h2>
                        </div>
                        <div className="py-6">
                              <ul className=' flex flex-wrap items-center gap-8 md:gap-16 justify-center'>
                                    <li>New Arraival</li>
                                    <li>Best Seller</li>
                                    <li>Feature</li>
                                    <li>Special Offer</li>
                              </ul>

                        </div>


                        <div className="flex flex-wrap gap-4 justify-center">
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img} alt="" />
                                          <div className="inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img1} alt="" />
                                          <div className="inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img2} alt="" />
                                          <div className=" inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>

                        </div>

                        <div className="flex flex-wrap gap-4 justify-center pt-20">
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img4} alt="" />
                                          <div className="inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700 ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img2} alt="" />
                                          <div className="inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700  ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>
                              <div className="w-full sm:w-[48%] lg:w-[24%] bg-[#F6F7FB] group mb-4">

                                    <div className="flex justify-center pt-5 pb-4 overflow-hidden relative ">
                                          <img src={img3} alt="" />
                                          <div className=" inline-grid gap-4 absolute -bottom-32 left-3 group-hover:bottom-20 duration-700  ">
                                                <TfiShoppingCartFull className='text-[#702bc9]' />
                                                <FaHeartbeat className='text-[#702bc9]' />
                                                <FaSearchengin className='text-[#702bc9]' />
                                          </div>


                                    </div>

                              </div>

                        </div>

                  </div>
            </section>


      )
}

export default LetestProduct
