import React from "react";
import { Navbar } from "./Components/navbar/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import './App.css'
import ApplicationRoutes from "./Components/routes/ApplicationRoutes";
// import  Home  from "./Components/Home";
// import Products from "./Components/Products";
// import Cart from "./Components/cart/Cart";
// import Contact from "./Components/Contact";
// import About from "./Components/About";
// import Login from "./Components/loginPages/Login";

export default function App(){

  return(
    <div>
     <Router>
      <Navbar/>
      <ApplicationRoutes/>
     {/* <Routes>
      <Route path='/' element= {<Home/>}/>
      <Route path='/product' element = {<Products/>}/>
      <Route path='/cart' element= {<Cart/>}/>
      <Route path='/contact' element= {<Contact/>}/>
      <Route path='/about' element = {<About/>}/>
      <Route path='/login' element = {<Login/>}/>
     </Routes> */}
     </Router>
    </div>
  )
}

