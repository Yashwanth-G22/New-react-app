import React from 'react'

export default function Contact() {
  return (
    <>
      <h1>Contact Through Message via Email</h1>
      <>
      <div>
        <form action="">
        <div>
        <label htmlFor="">Name :</label>
        <input type="text" className='from-input' placeholder={`Enter name`}/>
        </div>
        <div>
        <label htmlFor="">Email</label>
        <input type="text" className='email-input'  placeholder={`Enter email`}/>
        </div>
        <div>
        <label htmlFor="">Messege</label>
        <input type="text" className='msg-input'  placeholder={`Enter content`}/>
        </div>
        <div>
        <button className='login-button' type='submit'>Submit</button>
        </div>
        </form>
      </div>
    </>    </>
  )
}
