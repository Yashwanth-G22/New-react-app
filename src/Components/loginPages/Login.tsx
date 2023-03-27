import React, { useRef } from 'react';
import './Login.css';
import { Link, Outlet } from 'react-router-dom';

export default function Login() {
    const adminName = 'yashwanth@gmail.com';
    const adminPassword = 'yashwanth';
    const userNameRef = useRef<string>('') 
    let passwordRef = useRef<string>('') 

    function adminLogin(e: Event) : void {
        e.preventDefault()
        if(userNameRef.current.value === adminName && passwordRef.current.value === adminPassword){
            console.log(userNameRef.current.value , passwordRef.current.value)
            console.log('hlo yash');
            <Link to= '/admin' >click</Link>
        }
    }
    function userLogin(e : Event){
      e.preventDefault();
      console.log('this is user login');
    }
  return (
    <>
      <div className='admin-page'>
        <h2>LOGIN PAGE</h2>
        <form className='login-form' >
            <div>
                <label htmlFor="">User Name</label>
                <span><input type="text" placeholder='example@gmail.com'
                 ref={userNameRef} /></span>
            </div>
            <div>
                <label htmlFor="">Password</label>
                <span><input type="password" placeholder='Enter password' ref={passwordRef}/></span>
            </div>
            <div className='login-buttons '>
            <button type='submit'  onClick={userLogin}>LOGIN AS USER</button>
            <button type='submit' onClick={adminLogin}>LOGIN AS ADMIN</button>
            </div>
            
        </form>
      </div>
      
    </>
  )
}
