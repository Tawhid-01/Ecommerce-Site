import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Shop  from './pages/Shop'
import RootLayOut from './components/RootLayOut'
import ProductDetails from './pages/ProductDetails'
function App() {
   
  const router = createBrowserRouter(createRoutesFromElements(
   <Route element={<RootLayOut />}>
    <Route path ="/"  element ={<Home/>}/>
    <Route path ="/shop"  element ={<Shop/>}/>
    <Route path ="/shop"  element ={<Shop/>}/>
    <Route path ="/shop/:id"  element ={<ProductDetails/>}/>
   </Route>
   
  ))

  return (
    <>
     <RouterProvider router={router} />
   

    </>
  )
}

export default App
