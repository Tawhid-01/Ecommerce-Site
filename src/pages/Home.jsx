import React from 'react'
import Banner from '../components/Banner'
import Feature from '../components/Feature'
import LetestProduct from '../components/LetestProduct'
import Banner2 from '../components/Banner2'
import Treanding from '../components/Treanding'
import Discount from '../components/Discount'
import TopCatagory from '../components/TopCatagory'

const Home = () => {
  return (
    <div>
     <Banner />
    <Feature />
    <LetestProduct/>
    < Banner2 />
       <Treanding />
      <Discount/>
      {/* <TopCatagory/> */}
    </div>
  )
}

export default Home
