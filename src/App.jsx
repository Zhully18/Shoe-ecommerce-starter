import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import {Routes, Route} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Cart from './Components/Cart/Cart'
import About from './pages/About/About'
import Contact from './pages/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/product/:id' element={<ProductDetails /> } />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App