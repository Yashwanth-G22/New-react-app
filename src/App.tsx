import React from "react";
import { Navbar } from "./Components/navbar/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import  Home  from "./Components/Home";
import './App.css'
import Products from "./Components/Products";
import Cart from "./Components/cart/Cart";
import Contact from "./Components/Contact";
import About from "./Components/About";

export default function App(){

  return(
    <div>
     <Router>
      <Navbar/>
     <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/product' element = {<Products/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>
     </Routes>
     </Router>
    </div>
  )
}

