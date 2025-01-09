import React, { useContext, useEffect, useState } from 'react'
import PageHeading from '../components/PageHeading'
import { BiGridAlt } from "react-icons/bi";
import { BiListOl } from "react-icons/bi";
import { apidata } from '../components/ContextApi'
import { TiShoppingCart } from "react-icons/ti";
import { FaHeartbeat } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { TiArrowSortedDown } from "react-icons/ti";
const Shop = () => {
  const data = useContext(apidata)

  const filteredData = data.filter(item => item)
  let [category, setCategory] = useState([])

  useEffect(() => {
    setCategory([...new Set(data.map((item) => item.category))])
  }, [data])
 
  let [cat, setCat] = useState([])
  const handleCategory = (catName) => {
    const filteredProducts = data.filter(item => item.category == catName)
    setCat(filteredProducts)
  }

  let [catShow, setCatShow] = useState(false)

  let[priceItems, setPriceItem] =useState([])
  const handlePrice = (value) => {
let priceFilterItems = data.filter((item)=> item.price > value.min && item.price<=value.max)
   setPriceItem(priceFilterItems)

  }

  let [priceItemsShow, setPriceItemShow] = useState(false)


let [currentPage, setCurrentPage] = useState(1);
let [perPage, setPerPage] = useState(21);
let lastItemIndex = currentPage * perPage;
let firstItenIndex = lastItemIndex - perPage;

 let perPageProduct = data.slice(firstItenIndex, lastItemIndex);

let totalPagesNumber =Math.ceil(data.length / perPage);

let pageNumber = useState([])

for(let i = 1; i<= totalPagesNumber; i++){
 pageNumber.push(i)
}

const handleNextPage = () => {
  if(currentPage !== totalPagesNumber){
    setCurrentPage(currentPage + 1)
  }
  
}
const handlePrevPage = () => {
  if(currentPage > 1){
  setCurrentPage(currentPage - 1)
  }
}
const handlePage = (item) => {
  setCurrentPage(item)

}
  return (
    <>
      <section className='cursor-pointer'>
        < PageHeading heading="Shop Grid Default" page="Shop Grid Default" />
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
          <div className="flex flex-col lg:flex-row">
            <div className="w-full lg:w-[20%] mb-6 lg:mb-0">
              <div className="">
                <div className="">
                  <h2 onClick={() => setCatShow(!catShow)} className='font-josef text-[24px] font-bold flex items-center'>Shop By Category <TiArrowSortedDown /></h2>
                  {catShow &&
                    <ul className='h-64 overflow-y-scroll'>
                      {category.map((item) => (
                        <li key={item} onClick={() => handleCategory(item)} className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>{item}</li>
                      ))}
                    </ul>
                  }
                </div>
              </div>
              <div className="">
                <h2  onClick={() => setPriceItemShow(!priceItemsShow)}  className='font-josef text-[24px] font-bold flex items-center'>Shop By Price <TiArrowSortedDown /></h2>
                <ul className='h-44 overflow-y-scroll'>
                  <li onClick={()=>handlePrice({min:0.00,max:50.00})}  className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>$0.00 - $50.00</li>
                  <li  onClick={()=>handlePrice({min:50.01,max:150.00})}  className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>$50.01 - $510.00</li>
                  <li  onClick={()=>handlePrice({min:150.01,max:250.00})}  className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>$150.01 - $250.00</li>
                  <li  onClick={()=>handlePrice({min:250.01,max:500.00})}  className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>$250.01 - $500.00</li>
                  <li  onClick={()=>handlePrice({min:500.01,max:1000.00})} className=' pl-3 py-3 border-b-2 bg-[#f2f0fd] text-purple-500 font-lato'>$500.01 - $1000.00</li>
                  
                  
                </ul>
              </div>
            </div>

            <div className="w-full lg:w-[80%] flex flex-wrap justify-between">
              {cat.length > 0 ?

                cat.map((item) => (
                  <div key={item.id} className="w-full sm:w-[32%]  lg:!w-[24%]  shadow-lg group pb-5 mb-6 lg:mb-0">
                    <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#c3beeb]">
                      <img className='h-[50%] w-[50%' src={item.thumbnail} alt={item.title} />
                      <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
                      <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
                        <TiShoppingCart className='text-[#702bc9]' />
                        <FaHeartbeat className='text-[#702bc9]' />
                        <AiFillEye className='text-[#702bc9]' />
                      </div>
                    </div>
                    <div className="text-center pt-4 pb-12 group-hover:bg-[#c3beeb]">
                      <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
                      <h4 className='group-hover:text-white'>$ {item.price}</h4>
                    </div>
                  </div>
                ))
                :
                priceItems.length >0 ?  
                 priceItems.map((item) => (
                  <div key={item.id} className="w-full sm:w-[32%] lg:!w-[24%]  shadow-lg group pb-5 mb-6 lh:mb-0">
                    <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#c3beeb]">
                      <img className='h-[50%] w-[50%' src={item.thumbnail} alt={item.title} />
                      <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
                      <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
                        <TiShoppingCart className='text-[#702bc9]' />
                        <FaHeartbeat className='text-[#702bc9]' />
                        <AiFillEye className='text-[#702bc9]' />
                      </div>
                    </div>
                    <div className="text-center pt-4 pb-12 group-hover:bg-[#c3beeb]">
                      <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
                      <h4 className='group-hover:text-white'>$ {item.price}</h4>
                    </div>
                  </div>
                ))
                :
                perPageProduct.map((item) => (
                  <div key={item.id} className=" w-full sm:w-[32%]  lg:!w-[24%]  shadow-lg group pb-5">
                    <div className="flex justify-center relative overflow-hidden bg-[#F6F7FB] pt-5 pb-5 group-hover:border-2 border-[#c3beeb]">
                      <img className='h-[50%] w-[50%]' src={item.thumbnail} alt={item.title} />
                      <button className='text-base rounded-md absolute -bottom-16 left-1/2 -translate-x-1/2 px-4 py-1 duration-700 bg-lime-600 group-hover:bottom-2'>View Details</button>
                      <div className="flex absolute gap-4 top-2 -left-20 group-hover:left-1 duration-700">
                        <TiShoppingCart className='text-[#702bc9]' />
                        <FaHeartbeat className='text-[#702bc9]' />
                        <AiFillEye className='text-[#702bc9]' />
                      </div>
                    </div>
                    <div className="text-center pt-4 pb-12 group-hover:bg-[#c3beeb]">
                      <h2 className='font-lato font-bold text-[18px] text-[#FB2E86] group-hover:text-white'>{item.title}</h2>
                      <h4 className='group-hover:text-white'>$ {item.price}</h4>
                    </div>
                  </div>
                ))}

              <div className="flex flex-col lg:flex-row  py-8" >
               <ul className='flex gap-6 flex-wrap lg:flex-nowrap'>
                <li onClick={handlePrevPage} className='py-2 px-5 border-2'>Prev</li>
                <li onClick={handleNextPage}  className='py-2 px-5 border-2' >Next</li>
                {pageNumber.map((item)=>(
                  <li onClick={()=>handlePage(item)} className='py-2 px-5 border-2 '>{item}</li>
                ))}
                
               </ul>
             </div>
            </div>
            



          </div>



        </div>
      </section>
    </>
  )
}

export default Shop
