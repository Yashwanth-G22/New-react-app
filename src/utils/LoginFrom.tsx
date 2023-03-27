import React from 'react'
import '../Components/loginPages/Login.css'

export default function LoginFrom(props) {
    const { name , email , content , button } = props;
  return (
    <>
      <div>
        <form action="">
        <div>
        <label htmlFor="">{name}</label>
        <input type="text" className='from-input' placeholder={`Enter ${name}`}/>
        </div>
        <div>
        <label htmlFor="">{email}</label>
        <input type="text" className='email-input'  placeholder={`Enter ${email}`}/>
        </div>
        <div>
        <label htmlFor="">{content}</label>
        <input type="text" className='msg-input'  placeholder={`Enter ${content}`}/>
        </div>
        <div>
        <button className='login-button' type='submit'>{button}</button>
        </div>
        </form>
      </div>
    </>
  )
}
