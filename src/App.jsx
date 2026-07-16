import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes,Route} from 'react-router-dom'
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'

import Placeorder from './Pages/Placeorder/Placeorder'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>

     

      <Routes>

              <Route path='/' element={<Home/>}/>
              <Route path='/cart' element={<Cart/>}/>
              <Route path='/placeorder' element={<Placeorder/>}/>
              <Route path='/login' element={<Login/>}/>

      </Routes>
          
     
      <Footer/>
    </div>
  )
}

export default App

