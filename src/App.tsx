import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import './App.css'
import About from "./Components/About";
import Cart from "./Components/Cart/Cart";
import Contact from "./Components/Contact";

export default function App(){

  return(
    <div>
     <Router>
      <Navbar/>
     <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
      <Route path="/cart" element= {<Cart/>}/>
      <Route path="/contact" element= {<Contact/>}/>
     </Routes>
     </Router>
    </div>
  )
}

