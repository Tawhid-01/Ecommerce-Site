import React from 'react'
import { CiMail } from "react-icons/ci";
import { IoIosCall } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { RiShoppingCartFill } from "react-icons/ri";
const Header = () => {



    return (
        <header className="bg-[#7E33E0] py-3 ">
            <div className="container mx-auto ">
                <div className="lg:flex lg:justify-between text-white ">
                    <div className="lg:flex lg: gap-6 " >
                        <div className="flex items-center gap-3 ">
                            <CiMail />
                            <h4> edetgdtgh@gmail.com</h4>
                        </div>
                        <div className="flex items-center gap-3 ">
                            <IoIosCall />
                            <h4> 1232065432</h4>
                        </div>
                    </div>
                    <div className="">
                        <ul className='flex  item-center lg:gap-8 gap-4'>
                            <li>
                                <select name="" id="" className='bg-transparent  '>
                                    <option value="" className='bg-purple-400'>English</option>
                                    <option value="" className='bg-purple-400'>Bangla</option>
                                </select>
                            </li>
                            <li >
                                < select name="" id="" className='bg-transparent '>
                                    <option value="" className='bg-slate-600'>USD</option>
                                    <option value="" className='bg-slate-600'>BDT</option>
                                </select>
                            </li>
                            <li className='flex items-center' >Login <FaRegUser /></li>
                            <li className='flex items-center'>Wishlist <CiHeart /> </li>
                            <li><RiShoppingCartFill className='text-2xl' /></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
