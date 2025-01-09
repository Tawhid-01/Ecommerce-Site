/* eslint-disable react/jsx-no-undef */
import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { GiCrossedSwords } from "react-icons/gi";
import { RxTriangleDown } from "react-icons/rx";
const Navbar = () => {
    const [menuShow, setMenuShow] = useState(false);

    const handleMenu = () => {
        setMenuShow(!menuShow);
    }

    return (
        <nav className='py-6'>
            <div className="container mx-auto">
                <div className="flex justify-between items-center">
                    <div className="flex lg:gap-16 items-center">
                        <div>
                            <img src={Logo} alt="Logo" />
                        </div>
                        <div className="">
                            <ul className={`lg:flex lg:gap-8 lg:static lg:bg-transparent  ${menuShow == true ? '  absolute top-20 left-0 bg-slate-300  duration-700 py-10 px-7 flex flex-col gap-7 t' : 'absolute -left-44 '} `}>
                                <li><Link to="/" className="text-black  decoration-violet-900 decoration-4   hover:bg-purple-300 rounded-xl px-1 py-1 ">Home</Link></li>
                                <li><Link to="/shop" className=":text-bla
                                 decoration-violet-900 decoration-4  hover:bg-purple-300 rounded-xl px-4 py-1 ">Shop</Link></li>
                                <li className='group relative'><Link className=" flex items-center text-black   decoration-violet-900 decoration-4  hover:bg-purple-300 rounded-xl px-1 py-1 ">Pages<RxTriangleDown /></Link>

                                    <ul className=' absolute  lg:hidden lg:group-hover:block px-3  hidden group-hover:block   hover:bg-purple-300 rounded-xl  bg-purple-200 py-1 '>
                                        <li className='pb-3'><Link>page1</Link></li>
                                        <li className='pb-3'><Link>page2</Link></li>
                                        <li className='pb-3'><Link>page3</Link></li>
                                        <li><Link>page4</Link></li>

                                    </ul>


                                </li>
                                <li><Link to="/products" className="text-black  hover:bg-purple-300 rounded-xl px-1 py-1  decoration-violet-900 decoration-4">Products</Link></li>
                                <li><Link to="/blog" className=" text-black   hover:bg-purple-300 rounded-xl px-4 py-1  decoration-violet-900 decoration-4">Blog</Link></li>
                                <li><Link to="/contacts" className="text-black  hover:bg-purple-300 rounded-xl px-1 py-1  decoration-violet-900 decoration-4">Contacts</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-center">
                        <input type="search" className='border-2 h-10 lg:w-64 w-32 outline-none pl-4' />
                        <div className="h-10 bg-[#FB2E86] px-4 flex justify-center items-center">
                            <CiSearch className='text-x4 text-white' />
                        </div>
                    </div>
                    <div onClick={handleMenu} className="lg:hidden cursor-pointer">
                        {menuShow ? <GiCrossedSwords /> : <FaBars />}
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
