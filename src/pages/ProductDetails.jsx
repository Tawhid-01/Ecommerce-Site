import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { apidata } from '../components/ContextApi'

const ProductDetails = () => {

let productId = useParams()

let data =useContext(apidata);

let singleProduct = data.filter((item)=>item.id == productId.id);

if (singleProduct.length === 0) return <p>Product not found</p>;


  return (
   <section>
   <div className="container mx-auto p-4"> 
  <div className="flex flex-col md:flex-row gap-4">
    <div className="flex-1">
      {singleProduct[0]?.images?.map((image, index) => (
        <div key={index} className=" w-[80%] mb-4">
          <img src={image} alt="" className="w-full h-auto rounded-md shadow-md" />
        </div>
      ))}  
    </div>
    <div className="flex-1">
      {singleProduct.map((item) => (
        <div key={item.id} className="p-4 border rounded-lg shadow-md bg-white">
          <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
          <p className="text-xl font-semibold mb-1">${item.price}</p>
          <h4 className="text-lg text-green-500 mb-2">-{item.discountPercentage}%</h4>
          <p className="text-gray-700">{item.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>

   </section>
  )
}

export default ProductDetails
