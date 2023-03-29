import React from "react";
import { Navbar } from "./Components/navbar/navbar";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css'
import ApplicationRoutes from "./Components/routes/applicationRoutes";

export default function App(){

  return(
    <div>
     <Router>
      <Navbar/>
      <ApplicationRoutes/>
     </Router>
    </div>
  )
}

