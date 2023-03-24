import React from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter as Router , Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home";
import './App.css'
import About from "./Components/About";

export default function App(){

  return(
    <div>
     <Router>
      <Navbar/>
     <Routes>
      <Route path="/" element= {<Home/>}/>
      <Route path="/about" element = {<About/>}/>
     </Routes>
     </Router>
    </div>
  )
}

