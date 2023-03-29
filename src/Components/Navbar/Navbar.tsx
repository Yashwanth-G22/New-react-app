import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css';

export function Navbar() {
  return (<>
    <div className='main-container'>
      <h1 className='heading'>Nike Shoes</h1>
      <div className='sub-container'>
        <ul>
          <Link to='/' className='home'>Home</Link>
          <Link to='/product'>Products</Link>
          <Link to='/about'>About</Link>
          <Link to='/cart'>Cart</Link>
        </ul>
      </div>
      <form>
        <input type='text' className='search-input' placeholder='search for item' />
        <button  className='search-button' >search</button>
      </form>
      <div className='reg-buttons'>
      <Link to = '/login'><button  className='login-button'>Login</button></Link>
      <Link to = '/signin'><button  className='sigin-button'>SignIn</button></Link>
      </div>

    </div>
  </>
  )
}
