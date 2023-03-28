import React, { useRef } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const adminName = 'yashwanth@gmail.com';
  const adminPassword = 'yashwanth';
  const userNameRef = useRef<HTMLInputElement>(null)
  let passwordRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  function adminLogin(e: React.MouseEvent<HTMLButtonElement>) {

    e.preventDefault()
    if (userNameRef.current?.value === adminName && passwordRef.current?.value === adminPassword) {
      console.log(userNameRef?.current.value, passwordRef?.current.value)
      console.log('hlo yash');
      navigate('/admin')
    }
  }
  function userLogin(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    console.log('this is user login');
    navigate('/product')
  }
  return (
    <>
      <div className='admin-page'>
        <h2>LOGIN PAGE</h2>
        <form className='login-form' >
          <div>
            <label htmlFor="">User Name</label>
            <input type="text"
              placeholder='example@gmail.com'
              ref={userNameRef} />
          </div>
          <div>
            <label htmlFor="">Password</label>
            <input type="password"
              placeholder='Enter password'
              ref={passwordRef} />
          </div>
          <div className='login-buttons '>
            <button type='submit' onClick={userLogin}>USER LOGIN</button>
            <button type='submit' onClick={adminLogin}>ADMIN LOGIN</button>
          </div>
        </form>
      </div>

    </>
  )
}
