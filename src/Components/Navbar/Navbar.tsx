import React from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css';

export  function Navbar() {
  return (
   <div>
    <ul>        
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
   </ul>
   </div>
  )
}
