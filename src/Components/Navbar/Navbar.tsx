import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../utils/Button';
import './Navbar.css';

export function Navbar() {
  return (<>
    <div className='main-container'>
      <h1 className='heading'>Nike Shoes</h1>
      <div className='sub-container'>
        <ul>
          <Link to='/' className='home'>Home</Link>
          <Link to='/about'>Products</Link>
          <Link to='/cart'>Cart</Link>
          <Link to='/contact'>Contact</Link>
        </ul>
      </div>
      <form>
        <input type="text" className='search-input' id="" placeholder='search for item' />
        <Button name='search' className='search-button' />
      </form>
      <div className='reg-buttons'>
      <Button name = 'LogIn' className='login-button'/>
      <Button name = 'SigIn' className='sigin-button'/>
      </div>

    </div>
  </>
  )
}
