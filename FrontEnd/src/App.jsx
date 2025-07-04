import { useState } from 'react'
import './App.css'
import Navbar from "./components/Navbar.jsx";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cart from "./pages/Cart.jsx";
import PlaceOrder from "./pages/PlaceOrder.jsx";
import Footer from "./components/Footer.jsx";
import About from "./components/About.jsx";
import TermsAndCondition from "./components/TermsAndCondition.jsx";

function App() {

  return (
    <>
      <div className='app'>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/cart' element={<Cart/>}></Route>
              <Route path='/order' element={<PlaceOrder/>}></Route>
              <Route path='about' element={<About/>}></Route>
              <Route path='/termsandconditions' element={<TermsAndCondition/>}></Route>
          </Routes>
      </div>
        <Footer/>
    </>
  )
}

export default App
