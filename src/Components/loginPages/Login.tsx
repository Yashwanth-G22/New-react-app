import React, { useRef } from 'react';
import './Login.css';

export default function Login() {
    const adminName = 'yashwanth@gmail.com';
    const adminPassword = 'yashwanth';
    const userNameRef = useRef(null) 
    let passwordRef = useRef(null) 

    function handleSubmit(e: Event) : void {
        e.preventDefault()
        if(userNameRef.current.value === adminName && passwordRef.current.value === adminPassword){
            console.log(userNameRef.current.value , passwordRef.current.value)
            console.log('hlo yash')
        }
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
            <div className='login-buttons'>
            <button type='submit'>LOGIN AS USER</button>
            <button type='submit' onClick={handleSubmit}>LOGIN AS ADMIN</button>
            </div>

        </form>
      </div>
    </>
  )
}
