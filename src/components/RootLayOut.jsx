import React from 'react'
import Header from './Header'
import Navebar from './Navebar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const RootLayOut = () => {
  return (
    <>
    
    <Header />
    <Navebar />
    <Outlet />
    <Footer />
    </>
  )
}

export default RootLayOut
