import React, { useContext, useEffect, useState } from 'react'
import PageHeading from '../components/PageHeading'
import { BiGridAlt } from "react-icons/bi";
import { BiListOl } from "react-icons/bi";
import {apidata} from '../components/ContextApi'
import { TiShoppingCart } from "react-icons/ti";
import { FaHeartbeat } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
const Shop = () => {
 const data = useContext(apidata)

 const filteredData = data.filter(item => item )
let [ category, setCategory] = useState([])

useEffect(()=>{
  setCategory([...new Set(data.map((item)=>item.category))])
}, [data])
 
let [cat, setCat] = useState([])
const handleCategory = (catName) =>{
  const filteredProducts = data.filter(item => item.category == catName )
  setCat(filteredProducts)
}
let [catShow, setCatShow] = useState(false)
  return (
    <>
   <section className='cursor-pointer'>
   < PageHeading heading="Shop Grid Default" page="Shop Grid Default"/>
    <div className="container mx-auto py-12">
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6">
        <div className="mb-4 lg:mb-0">
          <h3 className='text-[22px] font-bold font-josef'>Ecommerce Acceories & Fashion item </h3>
          <p className='font-lato font-normal text-x5 text-[#8A8FB9]'>About 9,620 results (0.62 seconds)</p>
        </div>
           <div className="flex flex-wrap items-center gap-5">
            <div className="flex items-center space-x-2">
              <p className='font-lato font-normal text-base text-[#3F509E]'>Per Page:</p>
              <input type="number" className='border px-2 py-2 rounded w-16 border-gray-300 font-lato outline-none font-normal'
                min="1"
                defaultValue="3"
              />

            </div>
            <div className="flex items-center space-x-2">
              <label htmlFor="sort" className='font-lato font-normal text-base text-[#3F509E]'>
                Sort By:
              </label>
              <select name="" id="sort" className='border px-3 py-2 rounded bg-white border-gray-300 font-lato font-normal text-[#8A8FB9]'>
                <option value="">Best Match</option>
                <option value=""></option>
                <option value="">Low to High</option>
                <option value="">High to Low</option>
                <option value="">New Arrial</option>
              </select>
            </div>
            <div className="flex items-center space-x-2">
              <p className='font-lato font-normal text-base text-[#3F509E]'>View</p>
              <button className='p-2 border rounded border-gray-300 hover:bg-gray-200'
               title="Grid View">

                <BiGridAlt />
              </button>
              <button className='p-2 border rounded border-gray-300 hover:bg-gray-200'
               title="List View">

                <BiListOl />
              </button>
            </div>
            <div className="flex items-center w-full lg:w-auto">
              <input type="text" placeholder='Search' className='border font-lato font-normal text-xs text-[#8A8FB9] outline-none px-3 py-2 rounded' />
            </div>
           </div>




      </div>
      <div className="flex">
        <div className="w-[20%]">
          <h2 onClick={()=>setCatShow(!catShow)}   className='font-josef text-[24px] font-bold flex items-center'>Shop By Category <TiArrowSortedDown /></h2>
         {catShow &&
          <ul className='h-64 overflow-y-scroll'>
          {category.map((item)=>(
           <li key={item} onClick={()=>handleCategory(item)}  className='py-3 border-b-2'>{item}</li>
          ))}
         </ul>
         }
          </div>
        <div className=" w-[80%] flex flex-wrap justify-between">
      {cat.length > 0 ?
         
         cat.map((item) => (
          <div key={item.id} className="!w-[24%]  shadow-lg group pb-5">
            <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#c3beeb]">
              <img className='h-[50%] w-[50%' src={item.thumbnail} alt={item.title} />
              <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
              <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
              <TiShoppingCart className='text-[#702bc9]' />
              <FaHeartbeat  className='text-[#702bc9]'/>
              <AiFillEye  className='text-[#702bc9]'/>
              </div>
            </div>
            <div className="text-center pt-4 pb-12 group-hover:bg-[#c3beeb]">
              <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
              <h4 className='group-hover:text-white'>$ {item.price}</h4>
            </div>
          </div>
        ))
      
      
      :
    
       
    filteredData.map((item) => (
      <div key={item.id} className="!w-[24%]  shadow-lg group pb-5">
        <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#c3beeb]">
          <img className='h-[50%] w-[50%' src={item.thumbnail} alt={item.title} />
          <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
          <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
          <TiShoppingCart className='text-[#702bc9]' />
          <FaHeartbeat  className='text-[#702bc9]'/>
          <AiFillEye  className='text-[#702bc9]'/>
          </div>
        </div>
        <div className="text-center pt-4 pb-12 group-hover:bg-[#c3beeb]">
          <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
          <h4 className='group-hover:text-white'>$ {item.price}</h4>
        </div>
      </div>
    ))}
    
       
</div>
      </div>
    
    </div>
   </section>
    </>
  )
}

export default Shop
